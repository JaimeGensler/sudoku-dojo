import { inject, isReactive } from 'vue';
import { Dispatch } from '../../lib/types';

type Consumer = [{}, Dispatch];
type GetFromState<S> = (state: any) => S;

export function consumeGame<S>(
    gameKey: Symbol,
    getFromState: GetFromState<S>,
): [S, (ruleName: string, payload: any) => void] {
    const provided = inject<Consumer>(gameKey);
    if (provided === undefined) {
        throw new TypeError(
            'consumeGame(): The injected gameState was undefined. This is most likely due to an incorrect key.',
        );
    }
    const [state, dispatch] = provided;
    const subState = getFromState(state);

    if (!isReactive(subState)) {
        throw new Error(
            'consumeGame(): The provided getFromState() callback did not return a reactive value. Make sure the return is not a primitive.',
        );
    }
    return [subState, dispatch];
}
