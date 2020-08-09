import { provide, inject, reactive } from 'vue';
import useKeydown from './useKeydown';

interface GameDefinition<S extends object> {
    state: S;
}
type Consumer = [object, () => void];
type Fetch = (state: any) => any;

export function provideGame<S extends object>(
    gameKey: Symbol,
    gameDefinition: GameDefinition<S>,
) {
    const providedState = reactive(gameDefinition.state);

    useKeydown(e => console.log(e.key));
    const someFunc = () => console.log('Hello from provideGame');

    provide(gameKey, [providedState, someFunc]);
}

export function consumeGame(gameKey: Symbol, getFromState: Fetch) {
    const provided = inject<Consumer>(gameKey);
    if (provided === undefined) {
        throw new TypeError('consumeGame(): injected gameState was undefined.');
    }
    const [state, dispatch] = provided;
    return [getFromState(state), dispatch];
}
