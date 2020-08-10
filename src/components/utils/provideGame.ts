import { provide, reactive } from 'vue';
import useKeydown from './useKeydown';
import { Game } from '../../lib/types';

export function provideGame<S extends {}>(
    gameKey: Symbol,
    gameDefinition: Game<S>,
) {
    const { initialize, rules, keyMap } = gameDefinition;
    const state = reactive(initialize());

    const dispatch = (ruleName: string, payload: any) => {
        if (rules[ruleName] === undefined) {
            throw new Error(
                `provideGame(): Attempted to call rule named '${ruleName}', but no such rule was found.`,
            );
        }

        const { condition, modifier } = rules[ruleName];
        const shouldExecuteModifier = condition
            ? condition(state as S, payload)
            : true;

        if (shouldExecuteModifier) {
            modifier(state as S, payload);
        }
    };

    const handleKeydown = (e: KeyboardEvent) => {
        const action = keyMap[e.key];
        if (action === undefined) return;

        const ruleName =
            typeof action.type === 'string'
                ? action.type
                : action.type(state as S);
        dispatch(ruleName, action.payload);
    };

    useKeydown(handleKeydown);

    provide(gameKey, [state, dispatch]);
}
