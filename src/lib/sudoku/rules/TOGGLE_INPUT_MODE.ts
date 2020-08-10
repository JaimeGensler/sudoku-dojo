import type { Rule, SudokuState } from '../../types';
import { SudokuModes } from '../../types'

export default {
    modifier: state => {
        state.mode =
            state.mode === SudokuModes.VALUE
                ? SudokuModes.CANDIDATE
                : SudokuModes.VALUE;
    },
} as Rule<SudokuState>;
