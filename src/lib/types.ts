import { Draft } from 'immer';
// === useGame types ===
export interface Rules<S> {
    [ruleName: string]: {
        condition?: (currentState: S, actionPayload?: any) => boolean;
        modifier: (draft: Draft<S>, payload?: any) => void;
    };
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

export type ApplyRule = (ruleName: string, payload?: unknown) => void;

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
