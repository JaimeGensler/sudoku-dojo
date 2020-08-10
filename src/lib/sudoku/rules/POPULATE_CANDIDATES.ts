import type { Rule, SudokuState } from '../../types';
import { aggregateCurrentValues } from './helpers';

export default {
    modifier: state => {
        // This probably isn't the most efficient way to do this, but it's fine for now.
        const currents = aggregateCurrentValues(state.cells);
        state.cells.forEach(cell => {
            if (cell.currentValue !== 0) return;
            const taken = new Set([
                ...currents[`r${cell.row}`],
                ...currents[`c${cell.column}`],
                ...currents[`b${cell.block}`],
            ]);
            //Could make an incredibly small gain on speed. This runs 9 tests regardless
            //of the number of items in the set, when it only needs to remove Set.size elements
            //from the 1-9 array. Probably not the area to worry about making gains though.
            cell.candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
                x => !taken.has(x),
            );
        });
    },
} as Rule<SudokuState>;
