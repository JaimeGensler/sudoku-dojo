import * as helpers from './utils/helpers';
import { Rules } from '../../components/useGame';
import { SudokuState, Modes } from './types';
import { original } from 'immer';

//I can pull primitives directly off of the draft, should I do away with original?
//or should immer just be put here?
const rules: Rules<SudokuState> = {
    CLICK_SELECT: {
        condition: ({ selected }, newSelected: number) =>
            selected !== newSelected,
        modifier: (draft, newSelected: number) => {
            const currentSelected = original(draft).selected;

            if (currentSelected !== null) {
                helpers.removeElementFromArray(
                    'SELECTED',
                    draft.cells[currentSelected].highlight
                );
            }
            if (newSelected !== null) {
                draft.cells[newSelected].highlight.push('SELECTED');
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
            const currentSelected = original(draft).selected;

            if (currentSelected !== null) {
                helpers.removeElementFromArray(
                    'SELECTED',
                    draft.cells[currentSelected].highlight
                );
            }
            const newSelected = currentSelected + distance;
            draft.cells[newSelected].highlight.push('SELECTED');
            draft.selected = newSelected;
        },
    },
    //switched to not using original() below this point to give it a try
    SET_VALUE: {
        condition: ({ cells, selected }, newValue: number) => {
            return (
                selected !== null &&
                !cells[selected].isGiven &&
                cells[selected].currentValue !== newValue
            );
        },
        modifier: ({ selected, cells }, newValue: number) => {
            const target = cells[selected];
            target.currentValue = newValue;

            //notify neighbors
            cells.forEach(neighbor => {
                if (!helpers.isNeighbor(target, neighbor)) return;

                if (helpers.isConflict(neighbor, newValue)) {
                    target.highlight.push(neighbor.index);
                    neighbor.highlight.push(target.index);
                } else if (helpers.wasConflict(target, neighbor)) {
                    helpers.removeElementFromArray(
                        neighbor.index,
                        target.highlight
                    );
                    helpers.removeElementFromArray(
                        target.index,
                        neighbor.highlight
                    );
                }
            });
        },
    },
    SET_CANDIDATE: {
        modifier: ({ selected, cells }, candidate: number) => {
            const target = cells[selected];
            target.currentValue = 0;
            cells.forEach(neighbor => {
                if (
                    helpers.isNeighbor(target, neighbor) &&
                    helpers.wasConflict(target, neighbor)
                ) {
                    helpers.removeElementFromArray(
                        neighbor.index,
                        target.highlight
                    );
                    helpers.removeElementFromArray(
                        target.index,
                        neighbor.highlight
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
    SET_INPUT_MODE: {
        modifier: ({ options }) => {
            options.mode =
                options.mode === Modes.VALUE ? Modes.CANDIDATE : Modes.VALUE;
        },
    },
    AUTOPOPULATE_CANDIDATES: {
        modifier: ({ cells }) => {
            cells.forEach(cell => {});
        },
    },
};

export default rules;
