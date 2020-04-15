import useGame from './useGame';
import rules from '../lib/sudoku/rules';
import keyMap from '../lib/sudoku/keyMap';

import dummyBoard from '../lib/sudoku/dummyBoard';
import * as helpers from '../lib/sudoku/helpers';
import { Blocks } from '../lib/types';

const initialState = {
    cells: dummyBoard,
    selected: null as number,
};

export default function useSudoku() {
    const [state, handleClick] = useGame(initialState, rules, keyMap);

    return [helpers.getBlocks(state.cells), handleClick] as [
        Blocks,
        (payload: number) => void
    ];
}
