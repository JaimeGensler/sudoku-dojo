import { SudokuCell } from '../types';

export const removeElementFromArray = (element: any, array: any[]) => {
    array.splice(array.indexOf(element), 1);
};

export const notifyNeighbors = (
    notifier: (draftOfNeighbor: any) => void,
    draft,
    { selected, cells },
    includeSelf = false
) => {
    const { row, column, block } = cells[selected];
    cells.forEach(cell => {
        if (selected === cell.index && !includeSelf) return;
        if (
            row === cell.row ||
            column === cell.column ||
            block === cell.block
        ) {
            notifier(draft.cells[cell.index]);
        }
    });
};

//old stuff

export const getNeighbors = state => {
    //there's definitely a good mathy way to do this but I can't be bothered to figure it out
    const { selected, cells } = state;
    const { row, column, block } = cells[selected];
    return cells.reduce((acc, neighbor) => {
        if (
            row === neighbor.row ||
            column === neighbor.column ||
            block === neighbor.block
        ) {
            acc.push(neighbor.index);
        }
        return acc;
    }, [] as number[]);
};

//the good mathy way
const boardSize = 9;
const getNeighborsOf = cellIndex => {
    const rowPosition = cellIndex % boardSize;
    const columnPosition = Math.floor(cellIndex / boardSize);
    const rowSubPosition = null;
    const colSubPosition = null;

    const arr = [];
    for (let i = 0; i < boardSize; i++) {
        arr.push(cellIndex - rowPosition + i);
        arr.push(cellIndex - boardSize * columnPosition + boardSize * i);
        //need to get block neighbors
    }
    return arr;
};
