<template lang="html">
    <div class="flex">
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
import { computed } from 'vue';

export default {
    components: {},
    setup() {
        const [state, dispatch] = consumeGame<SudokuState>(
            Symbol.for('sudoku-dojo:game'),
        );
        const currentMode = computed(() => {
            const isValue = state.mode === SudokuModes.VALUE;
            return {
                VALUE: {
                    'border-r-0': !isValue,
                    'border-blue-800': isValue,
                    'text-blue-800': isValue,
                    'bg-blue-200': isValue,
                },
                CANDIDATE: {
                    'border-l-0': isValue,
                    'border-blue-800': !isValue,
                    'text-blue-800': !isValue,
                    'bg-blue-200': !isValue,
                },
            };
        });
        const handleClick = (button: keyof typeof SudokuModes) => {
            if (SudokuModes[button] !== state.mode) {
                dispatch('TOGGLE_INPUT_MODE');
            }
        };
        return { currentMode, handleClick };
    },
};
</script>
