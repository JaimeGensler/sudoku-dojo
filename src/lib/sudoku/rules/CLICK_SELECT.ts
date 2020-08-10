import type { Rule, SudokuState } from '../../types';

export default {
    condition: ({ selected }, newSelected: number) => selected !== newSelected,
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
} as Rule<SudokuState>;
