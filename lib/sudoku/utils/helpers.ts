import { SudokuCell } from '../types';

//these can all live on the cell
export const removeElementFromArray = (element: any, array: any[]) => {
    array.splice(array.indexOf(element), 1);
};

export const isNeighbor = (current, compare) => {
    if (current.index === compare.index) return false;
    return (
        current.row === compare.row ||
        current.column === compare.column ||
        current.block === compare.block
    );
};

export const isConflict = (cell, newValue) => {
    return newValue !== 0 && newValue === cell.currentValue;
};
export const wasConflict = (cellOne, cellTwo) => {
    return cellOne.highlight.includes(cellTwo.index);
};

//old stuff

// const getNeighbors = state => {
//     //there's definitely a good mathy way to do this but I can't be bothered to figure it out
//     const { selected, cells } = state;
//     const { row, column, block } = cells[selected];
//     return cells.reduce((acc, neighbor) => {
//         if (
//             row === neighbor.row ||
//             column === neighbor.column ||
//             block === neighbor.block
//         ) {
//             acc.push(neighbor.index);
//         }
//         return acc;
//     }, [] as number[]);
// };

// //the good mathy way
// const boardSize = 9;
// const getNeighborsOf = cellIndex => {
//     const rowPosition = cellIndex % boardSize;
//     const columnPosition = Math.floor(cellIndex / boardSize);
//     const rowSubPosition = null;
//     const colSubPosition = null;

//     const arr = [];
//     for (let i = 0; i < boardSize; i++) {
//         arr.push(cellIndex - rowPosition + i);
//         arr.push(cellIndex - boardSize * columnPosition + boardSize * i);
//         //need to get block neighbors
//     }
//     return arr;
// };
