import { inject } from 'vue';

type Consumer = [{}, () => void];
type GetFromState = (state: any) => any;

export function consumeGame(gameKey: Symbol, getFromState: GetFromState) {
    const provided = inject<Consumer>(gameKey);
    if (provided === undefined) {
        throw new TypeError('consumeGame(): injected gameState was undefined.');
    }
    const [state, dispatch] = provided;

    return [getFromState(state), dispatch];
}
