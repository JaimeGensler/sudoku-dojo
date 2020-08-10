import { easySudoku, hardSudoku } from './utils/dummyBoard';
import { SudokuState, SudokuModes } from '../types';

hardSudoku;
export default function sudoku(): SudokuState {
    return {
        cells: easySudoku,
        selected: null,
        mode: SudokuModes.VALUE,
    };
}
