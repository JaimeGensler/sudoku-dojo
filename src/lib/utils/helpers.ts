import { SudokuCell } from '../types';

//these can all live on the cell
export const removeElementFromArray = (element: any, array: any[]) => {
    array.splice(array.indexOf(element), 1);
};

export const isNeighbor = (current: SudokuCell, compare: SudokuCell) => {
    if (current.index === compare.index) return false;
    return (
        current.row === compare.row ||
        current.column === compare.column ||
        current.block === compare.block
    );
};

export const isConflict = (cell: SudokuCell, newValue: number) => {
    return newValue !== 0 && newValue === cell.currentValue;
};
export const wasConflict = (cellOne: SudokuCell, cellTwo: SudokuCell) => {
    return cellOne.hasConflictsWith.includes(cellTwo.index);
};

export const aggregateCurrentValues = (cells: SudokuCell[]) => {
    const initial = Array.from({ length: 9 }, (x, i) => i + 1).reduce(
        (acc, num) => {
            acc[`r${num}`] = [];
            acc[`c${num}`] = [];
            acc[`b${num}`] = [];
            return acc;
        },
        {} as { [key: string]: number[] },
    );
    return cells.reduce((acc, cell) => {
        if (cell.currentValue === 0) return acc;
        acc[`r${cell.row}`].push(cell.currentValue);
        acc[`c${cell.column}`].push(cell.currentValue);
        acc[`b${cell.block}`].push(cell.currentValue);
        return acc;
    }, initial);
};
