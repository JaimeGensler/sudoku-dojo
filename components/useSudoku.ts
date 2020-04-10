import { useState, useEffect } from 'react';

import dummyBoard from '../lib/dummyBoard';
import { CellShape } from '../lib/types';
import Sudoku from '../lib/Sudoku';

export default function useSudoku(): [
    CellShape[][],
    (i: number) => () => void
] {
    const game = new Sudoku(dummyBoard);

    const clickHandleCreator = (i: number) => {
        return () => {
            game.selectCell(i);
        };
    };

    return [game.getBlocks(), clickHandleCreator];
}
