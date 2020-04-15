import { useEffect } from 'react';
import { useImmer } from 'use-immer';
import { Draft } from 'immer';

export interface Rules<S> {
    [ruleName: string]: {
        condition?: (currentState: S, actionPayload: unknown) => boolean;
        modifier: (
            draft?: Draft<S>,
            currentState?: S,
            payload?: unknown
        ) => void;
    };
}
export interface KeyMap {
    [key: string]: {
        type: string;
        payload?: unknown; //payload should be renamed
    };
}

//I may want to turn initialize into an object that lets us preprocess the state return (i.e. for sudoku, just return blocks)
interface Game<S> {
    initialize: () => S;
    rules: Rules<S>;
    keyMap: KeyMap;
}

export default function useGame<S>(
    game: Game<S>
): [S, (ruleName: string, payload: unknown) => void] {
    const { initialize, rules, keyMap } = game;
    const [state, updateState] = useImmer(initialize());

    const applyRule = (ruleName: string, payload: unknown) => {
        //If the rule cannot be found, throw error
        if (rules[ruleName] === undefined) {
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
                //This gives the modifier a value that SHOULD be mutated, followed by
                //a value that should NEVER be mutated. That seems not good.

                //At the same time, immer's draft makes things easier, and the alternative
                //would be to supply the current immutable state and require a return of the
                //fully reconstructed new state, which doesn't feel like a meaningful improvement.

                //Alternatively, I could move my own immer usage to the rules,
                //and have this hook remain immer free. That might be an actual improvement?

                //It looks like it's possible to find state for primitives in draft. Maybe I just use that?
                modifier(draft, state, payload);
            });
        }
    };

    const handleKeyPress = (e: KeyboardEvent) => {
        //Find what we're supposed to do
        const action = keyMap[e.key];
        //If there is no action mapped to the key, there is no further work to do
        if (action === undefined) return;

        applyRule(action.type, action.payload);
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [state]);
    //state should be a dependency here, right? can't apply once and forget? don't need anything else?

    //I originally had an abstraction that didn't directly return applyRule - doesn't seem like an improvement, but was it?
    return [state, applyRule];
}
