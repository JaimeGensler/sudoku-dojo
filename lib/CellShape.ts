export type CellShape = {
    isGiven: boolean;
    currentValue: number;
    solvedValue: number;
    candidates: number[];

    row: number;
    column: number;
    block: number;
};
