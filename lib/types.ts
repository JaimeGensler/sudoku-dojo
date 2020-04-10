export type CellShape = {
    isGiven: boolean;
    currentValue: number;
    solvedValue: number;
    candidates: number[];

    highlight: string;

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
