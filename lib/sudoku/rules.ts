import * as helpers from './utils/helpers';
import { Rules } from '../../components/useGameTypes';
import { SudokuState, Modes } from './types';

const rules: Rules<SudokuState> = {
    CLICK_SELECT: {
        condition: ({ selected }, newSelected: number) =>
            selected !== newSelected,
        modifier: (draft, newSelected: number) => {
            const { selected, cells } = draft;
            if (selected !== null) {
                cells[selected].isSelected = false;
            }
            if (newSelected !== null) {
                cells[newSelected].isSelected = true;
            }
            draft.selected = newSelected;
        },
    },
    MOVE_SELECT: {
        condition: ({ selected }, distance: number) => {
            if (selected === null) return true;
            if (distance === -9 && selected < 9) return false; //top
            if (distance === 9 && selected > 71) return false; //bottom
            if (distance === -1 && selected % 9 === 0) return false; //left
            if (distance === 1 && (selected + 1) % 9 === 0) return false; //right
            return true;
        },
        modifier: (draft, distance: number) => {
            const { selected, cells } = draft;

            if (selected !== null) {
                cells[selected].isSelected = false;
            }
            const newSelected = selected === null ? 0 : selected + distance;
            cells[newSelected].isSelected = true;
            draft.selected = newSelected;
        },
    },
    SET_VALUE: {
        condition: ({ cells, selected }, newValue: number) => {
            return (
                selected !== null &&
                !cells[selected].isGiven &&
                cells[selected].currentValue !== newValue
            );
        },
        modifier: ({ selected, cells }, newValue: number) => {
            const target = cells[selected as number];
            target.currentValue = newValue;

            //notify neighbors
            cells.forEach(neighbor => {
                if (!helpers.isNeighbor(target, neighbor)) return;

                if (helpers.isConflict(neighbor, newValue)) {
                    target.hasConflictsWith.push(neighbor.index);
                    neighbor.hasConflictsWith.push(target.index);
                } else if (helpers.wasConflict(target, neighbor)) {
                    helpers.removeElementFromArray(
                        neighbor.index,
                        target.hasConflictsWith
                    );
                    helpers.removeElementFromArray(
                        target.index,
                        neighbor.hasConflictsWith
                    );
                }
            });
        },
    },
    SET_CANDIDATE: {
        condition: ({ cells, selected }, newValue: number) => {
            return (
                selected !== null &&
                !cells[selected].isGiven &&
                cells[selected].currentValue !== newValue
            );
        },
        modifier: ({ selected, cells }, candidate: number) => {
            const target = cells[selected as number];
            target.currentValue = 0;
            cells.forEach(neighbor => {
                if (
                    helpers.isNeighbor(target, neighbor) &&
                    helpers.wasConflict(target, neighbor)
                ) {
                    helpers.removeElementFromArray(
                        neighbor.index,
                        target.hasConflictsWith
                    );
                    helpers.removeElementFromArray(
                        target.index,
                        neighbor.hasConflictsWith
                    );
                }
            });

            if (target.candidates.includes(candidate)) {
                helpers.removeElementFromArray(candidate, target.candidates);
            } else {
                target.candidates.push(candidate);
            }
        },
    },
    TOGGLE_INPUT_MODE: {
        modifier: ({ options }) => {
            options.mode =
                options.mode === Modes.VALUE ? Modes.CANDIDATE : Modes.VALUE;
        },
    },
    POPULATE_CANDIDATES: {
        modifier: ({ cells }) => {
            // This probably isn't the most efficient way to do this, but it's fine for now.
            const currents = helpers.aggregateCurrentValues(cells);
            cells.forEach(cell => {
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
                    x => !taken.has(x)
                );
            });
        },
    },
};

export default rules;
