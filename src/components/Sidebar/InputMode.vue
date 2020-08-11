<template lang="html">
    <div class="flex mx-auto justify-center">
        <button
            class="p-2 border border-gray-700 rounded-l-lg transition-colors duration-150"
            :class="currentMode.VALUE"
            @click="handleClick('VALUE')"
        >
            Values
        </button>
        <button
            class="p-2 border border-gray-700 rounded-r-lg transition-colors duration-150"
            :class="currentMode.CANDIDATE"
            @click="handleClick('CANDIDATE')"
        >
            Pencil Marks
        </button>
    </div>
</template>

<script lang="ts">
import { consumeGame } from '../utils/consumeGame';
import { SudokuState, SudokuModes } from '../../lib/types';
import { getModeStyles } from './helpers';

export default {
    components: {},
    setup() {
        const [state, dispatch] = consumeGame<SudokuState>(
            Symbol.for('sudoku-dojo:game'),
        );
        const currentMode = getModeStyles(state);
        const handleClick = (button: keyof typeof SudokuModes) => {
            if (SudokuModes[button] !== state.mode) {
                dispatch('TOGGLE_INPUT_MODE');
            }
        };
        return { state, currentMode, handleClick };
    },
};
</script>
