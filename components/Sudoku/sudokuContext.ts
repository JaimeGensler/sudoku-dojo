import { createContext } from 'react';
import { SudokuState } from '../../lib/sudoku/types';

type SudokuContext = {
    gameState: SudokuState;
    applyRule: (ruleName: string, payload?: unknown) => void;
};
const sudokuContext = createContext({} as SudokuContext);

export const Provider = sudokuContext.Provider;
export default sudokuContext;
