export interface SudokuCell {
    isGiven: boolean;
    currentValue: number;
    solvedValue: number;
    candidates: number[];

    isSelected: boolean;
    hasConflictsWith: number[];

    row: number;
    column: number;
    block: number;
    index: number;
}

export type SudokuBlocks = SudokuCell[][];

export interface SudokuState {
    cells: SudokuCell[];
    selected: null | number;
    options: {
        mode: Modes;
        autoUpdateCandidates: boolean;
    };
}

export enum Modes {
    VALUE = 'VALUE',
    CANDIDATE = 'CANDIDATE',
}
