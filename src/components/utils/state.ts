import { provide, inject, reactive } from 'vue';
import { easySudoku } from '../../lib/old/utils/dummyBoard';
import {
    SudokuBoard,
    SudokuCell,
    Modes,
    SudokuInteralState,
} from '../../lib/types';
import useKeydown from './useKeydown';

const boardKey = Symbol('sudoku:cells');
const handleClickKey = Symbol('sudoku:handleClick');

export function provideCells() {
    const cellsState = reactive<SudokuBoard>(easySudoku);
    const internalState = reactive<SudokuInteralState>({
        selected: null,
        mode: Modes.VALUE,
    });

    const handleClick = (cellIndex: number) => {
        if (internalState.selected !== null) {
            cellsState[internalState.selected].isSelected = false;
        }
        internalState.selected = cellIndex;
        cellsState[cellIndex].isSelected = true;
    };

    provide(boardKey, cellsState);
    provide(handleClickKey, handleClick);
}

export function useCell(
    cellIndex: number,
): [SudokuCell, (num: number) => void] {
    const cells = inject<SudokuBoard>(boardKey);
    const handleClick = inject<(num: number) => void>(handleClickKey);

    if (cells === undefined || handleClick === undefined) {
        throw new TypeError(
            'useCell(): type of "cells" or "handleClickCell" was undefined.',
        );
    }

    return [cells[cellIndex], handleClick];
}
