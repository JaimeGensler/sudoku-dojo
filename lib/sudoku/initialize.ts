import dummyBoard from './utils/dummyBoard';
import { SudokuState, Modes } from './types';

const initialize = (): SudokuState => {
    return {
        cells: dummyBoard,
        selected: null as number,
        options: {
            mode: Modes.VALUE,
        },
    };
};
export default initialize;
