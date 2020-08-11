<template lang="html">
    <div
        class="flex items-center justify-center w-1/3 h-third bg-white border-gray-700"
        :class="borders"
        @click="dispatch('CLICK_SELECT', cell.index)"
    >
        <Given
            v-if="displayType.given"
            :value="cell.solvedValue"
            :color="color"
        />
        <Big
            v-if="displayType.big"
            :value="cell.currentValue"
            :color="color"
        />
        <Little
            v-if="displayType.little"
            :values="cell.candidates"
            :color="color"
        />
    </div>
</template>

<script lang="ts">
import { getCellIndex, getComputedValues } from './helpers';
import { consumeGame } from '../../utils/consumeGame';
import { SudokuState } from '../../../lib/types';

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
            Symbol.for('sudoku-dojo:game'),
            (state: SudokuState) => state.cells[getCellIndex(props)],
        );
        const { borders, displayType, color } = getComputedValues(cell);

        return { borders, cell, dispatch, displayType, color };
    },
    components: { Big, Given, Little },
};
</script>
