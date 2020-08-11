import { Rule, SudokuState } from '../../types';

export default {
    condition: ({ selected }, newSelected: number) => selected !== newSelected,
    modifier: (state, newSelected: number) => {
        const { selected, cells } = state;
        if (selected !== null) {
            cells[selected].isSelected = false;
        }
        if (newSelected !== null) {
            cells[newSelected].isSelected = true;
        }
        state.selected = newSelected;
    },
} as Rule<SudokuState>;
