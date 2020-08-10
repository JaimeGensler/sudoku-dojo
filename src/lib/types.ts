// === provideGame types ===
export interface Rules<S> {
    [ruleName: string]: Rule<S>;
}

export interface Rule<S> {
    condition?: (currentState: S, actionPayload?: any) => boolean;
    modifier: (reactiveState: S, payload?: any) => void;
}

export interface KeyMap<S> {
    [key: string]: {
        type: string | ((currentState: S) => string);
        payload?: any;
    };
}

export interface Game<S> {
    initialize: () => S;
    rules: Rules<S>;
    keyMap: KeyMap<S>;
}

export type Dispatch = (ruleName: string, payload: any) => void;

// === Other Types ===
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

export type SudokuBoard = SudokuCell[];

// DEPRECATED, will remove later
export interface SudokuState {
    cells: SudokuBoard;
    selected: null | number;
    mode: SudokuModes;
}

export enum SudokuModes {
    VALUE = 'VALUE',
    CANDIDATE = 'CANDIDATE',
}
