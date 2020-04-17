import dummyBoard from './utils/dummyBoard';
import { SudokuState, Modes } from './types';

const initialize = (): SudokuState => {
    return {
        cells: dummyBoard,
        selected: null,
        options: {
            mode: Modes.VALUE,
        },
    };
};
export default initialize;
