import { useEffect } from 'react';
import { useImmer } from 'use-immer';
import { Draft } from 'immer';

interface Rule<S> {
    condition?: (currentState: S, actionPayload: unknown) => boolean;
    modifier: (draft?: Draft<S>, currentState?: S, payload?: unknown) => void;
}
type Rules<S> = { [ruleName: string]: Rule<S> };
interface KeyMap {
    [key: string]: {
        type: string;
        payload?: unknown; //payload should be renamed
    };
}

export default function useGame<S>(
    initialState: S,
    rules: Rules<S>,
    keyMap: KeyMap
) {
    const [state, updateState] = useImmer(initialState);

    const applyRule = (rule: Rule<S>, payload: unknown) => {
        const { condition, modifier } = rule;
        //Conditions are optional - use it if found, otherwise give true (unconditioned rules always run)
        const shouldExecuteModifier = condition
            ? condition(state, payload)
            : true;

        if (shouldExecuteModifier) {
            updateState(draft => {
                //This gives the modifier a value that SHOULD be mutated, followed by
                //a value that should NEVER be mutated. That's probably not good.
                modifier(draft, state, payload);
            });
        }
    };

    const handleKeyPress = (e: KeyboardEvent) => {
        //Find what we're supposed to do
        const action = keyMap[e.key];
        //If there's no corresponding key, there is no further work to do
        if (action === undefined) return;
        //If the action is malformed or there is no corresponding rule, throw error
        if (action.type === undefined || rules[action.type] === undefined) {
            throw new Error(
                'useGame could not find a corresponding rule for that input.'
            );
        }
        applyRule(rules[action.type], action.payload);
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [state]);

    const handleClick = (payload?: unknown) => {
        //this logic is heavily repeated, probably merge the two functions somewhere
        if (rules.CLICK === undefined) {
            throw new Error(
                "Could not find rule for 'CLICK'. Please include a 'CLICK' key in your ruleset if you would like to use the click handler."
            );
        }
        const { condition, modifier } = rules.CLICK;
        const shouldExecuteModifier = condition
            ? condition(state, payload)
            : true;

        if (shouldExecuteModifier) {
            updateState(draft => {
                modifier(draft, state, payload);
            });
        }
    };

    return [state, handleClick] as [S, (payload?: unknown) => void];
}
