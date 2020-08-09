import { provide, reactive } from 'vue';
import useKeydown from './useKeydown';

interface GameDefinition<S extends object> {
    state: S;
}

export function provideGame<S extends object>(
    gameKey: Symbol,
    gameDefinition: GameDefinition<S>,
) {
    const providedState = reactive(gameDefinition.state);

    useKeydown(e => console.log(e.key));
    const someFunc = () => console.log('Hello from provideGame');

    provide(gameKey, [providedState, someFunc]);
}
