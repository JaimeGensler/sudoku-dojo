import type { Rules, SudokuState } from '../../types';

import CLICK_SELECT from './CLICK_SELECT';
import MOVE_SELECT from './MOVE_SELECT';
import SET_VALUE from './SET_VALUE';
import POPULATE_CANDIDATES from './POPULATE_CANDIDATES';
import SET_CANDIDATE from './SET_CANDIDATE';
import TOGGLE_INPUT_MODE from './TOGGLE_INPUT_MODE';

export default {
    CLICK_SELECT,
    MOVE_SELECT,
    SET_VALUE,
    POPULATE_CANDIDATES,
    SET_CANDIDATE,
    TOGGLE_INPUT_MODE,
} as Rules<SudokuState>;
