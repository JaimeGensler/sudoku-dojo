import { useEffect } from 'react';
import { useImmer } from 'use-immer';
import { Draft } from 'immer';

export interface Rules<S> {
    [ruleName: string]: {
        condition?: (currentState: S, actionPayload: unknown) => boolean;
        modifier: (draft?: Draft<S>, payload?: unknown) => void;
    };
}

export interface KeyMap<S> {
    [key: string]: {
        type: string | ((currentState: S) => string);
        payload?: unknown;
    };
}

interface Game<S> {
    initialize: () => S;
    rules: Rules<S>;
    keyMap: KeyMap<S>;
}

export default function useGame<S>(
    game: Game<S>
): [S, (ruleName: string, payload: unknown) => void] {
    const { initialize, rules, keyMap } = game;
    const [state, updateState] = useImmer(initialize());

    const applyRule = (ruleName: string, payload: unknown) => {
        //If the rule cannot be found, throw error
        if (rules[ruleName] === undefined) {
            //Typescript can maybe save me from this check
            //The error message is a pretty helpful catch tho.
            throw new Error(
                `Attempted to call rule named '${ruleName}', but no such rule was found.`
            );
        }

        const { condition, modifier } = rules[ruleName];
        //Conditions are optional - use it if found, otherwise use true (unconditioned rules always run)
        const shouldExecuteModifier = condition
            ? condition(state, payload)
            : true;

        if (shouldExecuteModifier) {
            updateState(draft => {
                //Would it be preferable to make this just use useState, and push
                //the immer usage into the rules (i.e., wrap modifiers in produce)?
                modifier(draft, payload);
            });
        }
    };

    const handleKeyPress = (e: KeyboardEvent) => {
        //Find what the action mapped to the key
        const action = keyMap[e.key];
        //If there is no action mapped to the key, there is no further work to do
        if (action === undefined) return;

        const ruleName =
            typeof action.type === 'string' ? action.type : action.type(state);
        applyRule(ruleName, action.payload);
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [state]);
    //Are further dependencies needed?

    //I originally had an abstraction that didn't directly return applyRule -
    //Is there an actually good way I should do that?
    return [state, applyRule];
}
