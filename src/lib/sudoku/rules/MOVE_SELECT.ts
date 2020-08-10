import type { Rule, SudokuState } from '../../types';

export default {
    condition: ({ selected }, distance: number) => {
        if (selected === null) return true;
        if (distance === -9 && selected < 9) return false; //top
        if (distance === 9 && selected > 71) return false; //bottom
        if (distance === -1 && selected % 9 === 0) return false; //left
        if (distance === 1 && (selected + 1) % 9 === 0) return false; //right
        return true;
    },
    modifier: (state, distance: number) => {
        const { selected, cells } = state;

        if (selected !== null) {
            cells[selected].isSelected = false;
        }
        const newSelected = selected === null ? 0 : selected + distance;
        cells[newSelected].isSelected = true;
        state.selected = newSelected;
    },
} as Rule<SudokuState>;
