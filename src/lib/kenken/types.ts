export interface KenKenCell {
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

// export type SudokuBlocks = SudokuCell[][];

export interface KenKenState {
    cells: KenKenCell[];
    selected: number;
    options: {
        mode: Modes;
        autoUpdateCandidates: boolean;
    };
}

export enum Modes {
    VALUE = 'VALUE',
    CANDIDATE = 'CANDIDATE',
}
