import { easySudoku, hardSudoku } from './utils/dummyBoard';
import { SudokuState, SudokuModes } from '../types';

export default function sudoku(): SudokuState {
    return {
        cells: easySudoku[0],
        selected: null,
        mode: SudokuModes.VALUE,
        unfilledCells: easySudoku[1],
        isActive: true,
    };
}
