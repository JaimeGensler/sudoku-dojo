type Strum = string | number;
export type CellShape = {
    isGiven: boolean;
    currentValue: number;
    solvedValue: number;
    candidates: number[];

    highlight: Strum[];

    row: number;
    column: number;
    block: number;
    index: number;
};

export interface Position {
    row: number;
    column: number;
    block: number;
}

export type Blocks = CellShape[][];

export enum Actions {
    SET_SELECTED = 'SET_SELECTED',
    SET_CURRENT_VALUE = 'SET_CURRENT_VALUE',
}

export interface State {
    cells: CellShape[];
    selected: number;
}
