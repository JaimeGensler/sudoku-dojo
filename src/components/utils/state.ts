import { provide, inject } from 'vue';
import { easySudoku } from '../../lib/utils/dummyBoard';
import { SudokuBoard } from '../../lib/types';

const cellKey = Symbol('sudoku:cells');

export function provideCells() {
    provide(cellKey, easySudoku);
}

export function injectCell(cellIndex: number) {
    const cells = inject<SudokuBoard>(cellKey);

    if (cells === undefined) {
        throw new TypeError('useBoard(): type of cells was undefined.');
    }
    return cells[cellIndex];
}

// Vue docs recommend this pattern
// https://v3.vuejs.org/guide/composition-api-provide-inject.html#injection-reactivity

// setup() {
//   const book = reactive({
//     title: 'Vue 3 Guide',
//     author: 'Vue Team'
//   })

//   function changeBookName() {
//     book.title = 'Vue 3 Advanced Guide'
//   }

//   provide('book', book)
//   provide('changeBookName', changeBookName)
// }
