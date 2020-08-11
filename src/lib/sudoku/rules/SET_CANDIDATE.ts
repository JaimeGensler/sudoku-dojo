import { Rule, SudokuState } from '../../types';
import { isNeighbor, wasConflict, removeElementFromArray } from './helpers';

export default {
    condition: ({ cells, selected }) => {
        return selected !== null && !cells[selected].isGiven;
    },
    modifier: (state, candidate: number) => {
        const target = state.cells[state.selected as number];
        if (target.currentValue !== 0) {
            target.currentValue = 0;
            state.unfilledCells++;
        }
        state.cells.forEach(neighbor => {
            if (isNeighbor(target, neighbor) && wasConflict(target, neighbor)) {
                removeElementFromArray(neighbor.index, target.hasConflictsWith);
                removeElementFromArray(target.index, neighbor.hasConflictsWith);
            }
        });

        if (target.candidates.includes(candidate)) {
            removeElementFromArray(candidate, target.candidates);
        } else {
            target.candidates.push(candidate);
        }
    },
} as Rule<SudokuState>;
