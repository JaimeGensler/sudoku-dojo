import { KeyMap } from '../../components/useGame';
import { SudokuState } from './types';

const numberInputType = ({ options }: SudokuState) => {
    return `SET_${options.mode}`; //SET_VALUE or SET_CANDIDATE
};

//0 works differently so make sure to change that
//it maybe doesn't matter
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
    '1': { type: numberInputType, payload: 1 },
    '2': { type: numberInputType, payload: 2 },
    '3': { type: numberInputType, payload: 3 },
    '4': { type: numberInputType, payload: 4 },
    '5': { type: numberInputType, payload: 5 },
    '6': { type: numberInputType, payload: 6 },
    '7': { type: numberInputType, payload: 7 },
    '8': { type: numberInputType, payload: 8 },
    '9': { type: numberInputType, payload: 9 },
    Backspace: { type: 'SET_VALUE', payload: 0 },
    Delete: { type: 'SET_VALUE', payload: 0 },

    '!': { type: numberInputType, payload: 1 },
    '@': { type: numberInputType, payload: 2 },
    '#': { type: numberInputType, payload: 3 },
    $: { type: numberInputType, payload: 4 },
    '%': { type: numberInputType, payload: 5 },
    '^': { type: numberInputType, payload: 6 },
    '&': { type: numberInputType, payload: 7 },
    '*': { type: numberInputType, payload: 8 },
    '(': { type: numberInputType, payload: 9 },

    n: { type: 'SET_INPUT_MODE' },
};

export default keyMap;
