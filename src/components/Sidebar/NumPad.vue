<template lang="html">
    <div class="border border-gray-700 flex flex-col mx-auto w-30">
        <div class="flex flex-wrap w-30">
            <button
                v-for="n in 9"
                class="h-10 w-10 p-1 border-gray-700"
                :class="getBorders(n)"
                @click="handleClick(n)"
            >
                {{ n }}
            </button>
        </div>
        <button class="border-t border-gray-700" @click="handleClick(0)">
            Delete
        </button>
    </div>
</template>

<script lang="ts">
import { consumeGame } from '../utils/consumeGame';
import { SudokuState } from '../../lib/types';
import { computed } from 'vue';

export default {
    components: {},
    setup() {
        const [state, dispatch] = consumeGame<SudokuState>(
            Symbol.for('sudoku-dojo:game'),
        );
        const getBorders = (index: number) => {
            const isCenterRow = [4, 5, 6].includes(index);
            const isCenterCol = [2, 5, 8].includes(index);
            return {
                'border-l': isCenterCol,
                'border-r': isCenterCol,
                'border-t': isCenterRow,
                'border-b': isCenterRow,
            };
        };
        const handleClick = (n: number) => dispatch(`SET_${state.mode}`, n);
        return { getBorders, handleClick };
    },
};
</script>
