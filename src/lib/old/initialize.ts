import { easySudoku, hardSudoku } from './utils/dummyBoard';
import { SudokuState, Modes } from '../types';

hardSudoku;
const initialize = (): SudokuState => {
    return {
        cells: easySudoku,
        selected: null,
        options: {
            mode: Modes.VALUE,
            autoUpdateCandidates: true,
        },
    };
};
export default initialize;
