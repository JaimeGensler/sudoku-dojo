import { KeyMap } from '../../components/useGameTypes';
import { SudokuState } from './types';

//SET_VALUE or SET_CANDIDATE
const numberInputType = ({ options }: SudokuState) => `SET_${options.mode}`;

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

    '1': { type: numberInputType, payload: 1 },
    '!': { type: numberInputType, payload: 1 },
    '2': { type: numberInputType, payload: 2 },
    '@': { type: numberInputType, payload: 2 },
    '3': { type: numberInputType, payload: 3 },
    '#': { type: numberInputType, payload: 3 },
    '4': { type: numberInputType, payload: 4 },
    $: { type: numberInputType, payload: 4 },
    '5': { type: numberInputType, payload: 5 },
    '%': { type: numberInputType, payload: 5 },
    '6': { type: numberInputType, payload: 6 },
    '^': { type: numberInputType, payload: 6 },
    '7': { type: numberInputType, payload: 7 },
    '&': { type: numberInputType, payload: 7 },
    '8': { type: numberInputType, payload: 8 },
    '*': { type: numberInputType, payload: 8 },
    '9': { type: numberInputType, payload: 9 },
    '(': { type: numberInputType, payload: 9 },

    n: { type: 'TOGGLE_INPUT_MODE' },
    p: { type: 'POPULATE_CANDIDATES' },
};

export default keyMap;
