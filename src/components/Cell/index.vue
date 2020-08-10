<template lang="html">
    <div
        class="flex items-center justify-center w-1/3 h-third bg-white border-gray-700"
        :class="borders"
        @click="dispatch('CLICK_SELECT', cell.index)"
    >
        <Given
            :value="cell.solvedValue"
            :color="color"
            v-if="shouldRender.given"
        />
        <Big
            :value="cell.currentValue"
            :color="color"
            v-if="shouldRender.big"
        />
        <Little
            :values="cell.candidates"
            :color="color"
            v-if="shouldRender.little"
        />
    </div>
</template>

<script lang="ts">
import { getCellIndex, getBorders, getShouldRender, getColor } from './helpers';
import { consumeGame } from '../utils/consumeGame';
import type { SudokuState } from '../../lib/types';

import Big from './Big.vue';
import Given from './Given.vue';
import Little from './Little.vue';

export default {
    props: {
        blockIndex: { type: Number, required: true },
        blockSubIndex: { type: Number, required: true },
    },
    setup(props) {
        const [cell, dispatch] = consumeGame(
            Symbol.for('sudoku'),
            (state: SudokuState) => state.cells[getCellIndex(props)],
        );

        const borders = getBorders(cell, props.blockSubIndex);
        const shouldRender = getShouldRender(cell);
        const color = getColor(cell);

        return { borders, cell, dispatch, shouldRender, color };
    },
    components: { Big, Given, Little },
};
</script>
