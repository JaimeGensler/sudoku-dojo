import { Rule, SudokuState } from '../../types';
import {
    isNeighbor,
    isConflict,
    wasConflict,
    removeElementFromArray,
} from './helpers';

export default {
    condition: ({ selected, cells }, newValue: number) => {
        return (
            selected !== null &&
            !cells[selected].isGiven &&
            cells[selected].currentValue !== newValue
        );
    },
    modifier: (state, newValue: number) => {
        const target = state.cells[state.selected as number];

        if (target.currentValue === 0) state.unfilledCells--;
        if (newValue === 0) {
            state.unfilledCells++;
            state.isActive = true;
        }

        target.currentValue = newValue;

        // notify neighbors
        state.cells.forEach(neighbor => {
            if (!isNeighbor(target, neighbor)) return;

            if (isConflict(neighbor, newValue)) {
                target.hasConflictsWith.push(neighbor.index);
                neighbor.hasConflictsWith.push(target.index);
            } else if (wasConflict(target, neighbor)) {
                removeElementFromArray(neighbor.index, target.hasConflictsWith);
                removeElementFromArray(target.index, neighbor.hasConflictsWith);
            }
        });

        if (state.unfilledCells === 0) {
            state.isActive = state.cells.some(
                cell => cell.currentValue !== cell.solvedValue,
            );
        }
    },
} as Rule<SudokuState>;
