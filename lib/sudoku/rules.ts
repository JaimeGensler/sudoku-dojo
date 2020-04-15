import * as helpers from './utils/helpers';
import { Rules } from '../../components/useGame';
import { SudokuState } from './types';

const rules: Rules<SudokuState> = {
    CLICK_SELECT: {
        condition: ({ selected }, newSelected) => selected !== newSelected, //this saves very little work, if any
        modifier: (draft, { selected }, newSelected: number) => {
            if (selected !== null) {
                helpers.removeElementFromArray(
                    'SELECTED',
                    draft.cells[selected].highlight
                );
            }
            if (newSelected !== null) {
                draft.cells[newSelected].highlight.push('SELECTED');
            }
            draft.selected = newSelected;
        },
    },
    MOVE_SELECT: {
        condition: ({ selected }, distance) => {
            if (selected === null) return true;
            if (distance === -9 && selected < 9) return false; //top
            if (distance === 9 && selected > 71) return false; //bottom
            if (distance === -1 && selected % 9 === 0) return false; //left
            if (distance === 1 && (selected + 1) % 9 === 0) return false; //right
            return true;
        },
        modifier: (draft, { selected }, distance: number) => {
            console.log(draft.cells[0].currentValue);
            const newSelected = selected + distance;
            if (selected !== null) {
                helpers.removeElementFromArray(
                    'SELECTED',
                    draft.cells[selected].highlight
                );
            }
            draft.cells[newSelected].highlight.push('SELECTED');
            draft.selected = newSelected;
        },
    },
    SET_VALUE: {
        condition: ({ cells, selected }) => {
            return selected !== null && !cells[selected].isGiven;
        },
        modifier: (draft, { selected }, newValue: number) => {
            draft.cells[selected].currentValue = newValue;
        },
    },
};

export default rules;
