import { KeyMap } from '../../components/useGame';

const keyMap: KeyMap = {
    '0': { type: 'SET_VALUE', payload: 0 },
    '1': { type: 'SET_VALUE', payload: 1 },
    '2': { type: 'SET_VALUE', payload: 2 },
    '3': { type: 'SET_VALUE', payload: 3 },
    '4': { type: 'SET_VALUE', payload: 4 },
    '5': { type: 'SET_VALUE', payload: 5 },
    '6': { type: 'SET_VALUE', payload: 6 },
    '7': { type: 'SET_VALUE', payload: 7 },
    '8': { type: 'SET_VALUE', payload: 8 },
    '9': { type: 'SET_VALUE', payload: 9 },
    Backspace: { type: 'SET_VALUE', payload: 0 },
    Delete: { type: 'SET_VALUE', payload: 0 },

    '!': { type: 'ALT', payload: 1 },
    '@': { type: 'ALT', payload: 2 },
    '#': { type: 'ALT', payload: 3 },
    $: { type: 'ALT', payload: 4 },
    '%': { type: 'ALT', payload: 5 },
    '^': { type: 'ALT', payload: 6 },
    '&': { type: 'ALT', payload: 7 },
    '*': { type: 'ALT', payload: 8 },
    '(': { type: 'ALT', payload: 9 },

    ArrowUp: { type: 'MOVE_SELECT', payload: -9 },
    ArrowLeft: { type: 'MOVE_SELECT', payload: -1 },
    ArrowDown: { type: 'MOVE_SELECT', payload: 9 },
    ArrowRight: { type: 'MOVE_SELECT', payload: 1 },
    w: { type: 'MOVE_SELECT', payload: -9 },
    a: { type: 'MOVE_SELECT', payload: -1 },
    s: { type: 'MOVE_SELECT', payload: 9 },
    d: { type: 'MOVE_SELECT', payload: 1 },
};

export default keyMap;
