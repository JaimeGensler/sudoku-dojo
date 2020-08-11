import { KeyMap, SudokuModes } from '../types';
import { SudokuState } from '../types';

//SET_VALUE or SET_CANDIDATE
const mainInputType = (state: SudokuState) => `SET_${state.mode}`;
const altInputType = (state: SudokuState) => {
    return `SET_${
        state.mode === SudokuModes.VALUE
            ? SudokuModes.CANDIDATE
            : SudokuModes.VALUE
    }`;
};

const keyMap: KeyMap<SudokuState> = {
    ArrowUp: { type: 'MOVE_SELECT', payload: -9 },
    ArrowLeft: { type: 'MOVE_SELECT', payload: -1 },
    ArrowDown: { type: 'MOVE_SELECT', payload: 9 },
    ArrowRight: { type: 'MOVE_SELECT', payload: 1 },
    w: { type: 'MOVE_SELECT', payload: -9 },
    a: { type: 'MOVE_SELECT', payload: -1 },
    s: { type: 'MOVE_SELECT', payload: 9 },
    d: { type: 'MOVE_SELECT', payload: 1 },

    '0': { type: 'SET_VALUE', payload: 0 },
    Backspace: { type: 'SET_VALUE', payload: 0 },
    Delete: { type: 'SET_VALUE', payload: 0 },

    '1': { type: mainInputType, payload: 1 },
    '!': { type: altInputType, payload: 1 },
    '2': { type: mainInputType, payload: 2 },
    '@': { type: altInputType, payload: 2 },
    '3': { type: mainInputType, payload: 3 },
    '#': { type: altInputType, payload: 3 },
    '4': { type: mainInputType, payload: 4 },
    $: { type: altInputType, payload: 4 },
    '5': { type: mainInputType, payload: 5 },
    '%': { type: altInputType, payload: 5 },
    '6': { type: mainInputType, payload: 6 },
    '^': { type: altInputType, payload: 6 },
    '7': { type: mainInputType, payload: 7 },
    '&': { type: altInputType, payload: 7 },
    '8': { type: mainInputType, payload: 8 },
    '*': { type: altInputType, payload: 8 },
    '9': { type: mainInputType, payload: 9 },
    '(': { type: altInputType, payload: 9 },

    n: { type: 'TOGGLE_INPUT_MODE' },
    p: { type: 'POPULATE_CANDIDATES' },
};

export default keyMap;
