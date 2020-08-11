import { computed } from 'vue';
import { SudokuState, SudokuModes } from '../../lib/types';

const getModeStyleObject = (side: 'l' | 'r', value: boolean) => {
    return {
        [`border-${side}-0`]: !value,
        'border-blue-800': value,
        'text-blue-800': value,
        'bg-blue-200': value,
    };
};
export const getModeStyles = (state: SudokuState) =>
    computed(() => {
        const isValue = state.mode === SudokuModes.VALUE;
        return {
            VALUE: getModeStyleObject('r', isValue),
            CANDIDATE: getModeStyleObject('l', !isValue),
        };
    });
