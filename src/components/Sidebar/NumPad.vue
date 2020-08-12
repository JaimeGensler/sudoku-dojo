<template lang="html">
    <div class="border border-gray-700 mx-auto w-24 lg:w-48 rounded">
        <div class="grid grid-cols-3">
            <button
                v-for="n in 9"
                class="h-8 w-8 lg:h-16 lg:w-16 p-1 border-gray-700"
                :class="getBorders(n)"
                @click="handleClick(n)"
            >
                {{ n }}
            </button>
        </div>
        <button
            class="border-t border-gray-700 w-full h-8"
            @click="handleClick(0)"
        >
            Delete
        </button>
    </div>
</template>

<script lang="ts">
import { consumeGame } from '../utils/consumeGame';
import { SudokuState } from '../../lib/types';
import { computed, defineComponent } from 'vue';

export default defineComponent({
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
});
</script>
