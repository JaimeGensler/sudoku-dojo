import useGame from '../useGame';

import sudoku from '../../lib/sudoku';
import { SudokuCell, SudokuBlocks } from '../../lib/sudoku/types';

const getBlocks = (cells: SudokuCell[]) => {
    const blocks: SudokuBlocks = Array.from({ length: 9 }, () => []);
    cells.forEach(cell => blocks[cell.block - 1].push(cell));
    return blocks;
};

export default function useSudoku() {
    const [state, applyRule] = useGame(sudoku);

    const handleClick = (index: number) => {
        applyRule('CLICK_SELECT', index);
    };

    return [getBlocks(state.cells), handleClick] as [
        SudokuBlocks,
        (payload: number) => void
    ];
}
