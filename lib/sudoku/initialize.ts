import dummyBoard from './utils/dummyBoard';
import { SudokuState, Modes } from './types';

const initialize = (): SudokuState => {
    return {
        cells: dummyBoard,
        selected: null,
        options: {
            mode: Modes.VALUE,
            autoUpdateCandidates: true,
        },
    };
};
export default initialize;
