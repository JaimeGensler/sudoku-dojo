import { useCallback, useEffect } from 'react';
import { useImmer } from 'use-immer';
import { Game } from './useGameTypes';

export default function useGame<S>(
    game: Game<S>
): [S, (ruleName: string, payload?: unknown) => void] {
    const { initialize, rules, keyMap } = game;
    const [state, updateState] = useImmer(initialize);

    const applyRule = useCallback(
        (ruleName: string, payload: unknown) => {
            if (rules[ruleName] === undefined) {
                throw new Error(
                    `Attempted to call rule named '${ruleName}', but no such rule was found.`
                );
            }

            const { condition, modifier } = rules[ruleName];
            const shouldExecuteModifier = condition
                ? condition(state, payload)
                : true;

            if (shouldExecuteModifier) {
                updateState(draft => modifier(draft, payload));
            }
        },
        [state, updateState, rules]
    );

    const handleKeyPress = useCallback(
        (e: KeyboardEvent) => {
            const action = keyMap[e.key];
            if (action === undefined) return;

            const ruleName =
                typeof action.type === 'string'
                    ? action.type
                    : action.type(state);
            applyRule(ruleName, action.payload);
        },
        [state, keyMap, applyRule]
    );

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [handleKeyPress]);

    return [state, applyRule];
}
