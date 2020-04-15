import * as helpers from './helpers';
import { createPublicKey } from 'crypto';

const rules = {
    SET_VALUE: {
        condition: state => {
            return (
                !(state.selected === null) &&
                !state.cells[state.selected].isGiven
            );
        },
        modifier: (draft, state, newValue) => {
            draft.cells[state.selected].currentValue = newValue;
        },
    },
    MOVE_SELECTED: {
        condition: (state, distance) => {
            if (state.selected === null) return true;
            if (distance === -9 && state.selected < 9) return false; //top
            if (distance === 9 && state.selected > 71) return false; //bottom
            if (distance === -1 && state.selected % 9 === 0) return false; //left
            if (distance === 1 && (state.selected + 1) % 9 === 0) return false; //right
            return true;
        },
        modifier: (draft, state, distance) => {
            if (state.selected === null) {
                draft.selected === 0;
            } else {
                //this workaround is dogshit
                rules.CLICK.modifier(draft, state, state.selected + distance);
            }
        },
    },
    CLICK: {
        modifier: (draft, state, newSelectedIndex) => {
            if (state.selected !== null) {
                helpers.removeElementFromArray(
                    'SELECTED',
                    draft.cells[state.selected].highlight
                );
            }
            if (newSelectedIndex !== null) {
                draft.cells[newSelectedIndex].highlight.push('SELECTED');
            }
            draft.selected = newSelectedIndex;
        },
    },
};

export default rules;
