type Strum = string | number;
export interface SudokuCell {
    isGiven: boolean;
    currentValue: number;
    solvedValue: number;
    candidates: number[];

    highlight: Strum[];

    row: number;
    column: number;
    block: number;
    index: number;
}

export type SudokuBlocks = SudokuCell[][];

export interface SudokuState {
    cells: SudokuCell[];
    selected: number;
    options: {
        mode: Modes;
    };
}

export enum Modes {
    VALUE = 'VALUE',
    CANDIDATE = 'CANDIDATE',
}
