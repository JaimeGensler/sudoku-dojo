<template lang="html">
    <!-- The flex here may be unnecessary-->
    <!-- flex items-center justify-center -->
    <div
        class="border-gray-700 bg-white w-12 lg:w-20 h-12 lg:h-20"
        :class="borders"
        @click="dispatch('CLICK_SELECT', cell.index)"
    >
        <Given
            v-if="displayType.given"
            :value="cell.solvedValue"
            :colors="colors"
        />
        <Big
            v-if="displayType.big"
            :value="cell.currentValue"
            :colors="colors"
        />
        <Little
            v-if="displayType.little"
            :values="cell.candidates"
            :colors="colors"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getCellIndex, getComputedValues } from './helpers';
import { consumeGame } from '../../utils/consumeGame';
import { SudokuState } from '../../../lib/types';

import Big from './Big.vue';
import Given from './Given.vue';
import Little from './Little.vue';

export default defineComponent({
    props: {
        blockIndex: { type: Number, required: true },
        blockSubIndex: { type: Number, required: true },
    },
    setup(props) {
        const [cell, dispatch] = consumeGame(
            Symbol.for('sudoku-dojo:game'),
            (state: SudokuState) => state.cells[getCellIndex(props)],
        );
        const { borders, displayType, colors } = getComputedValues(cell);

        return { borders, cell, dispatch, displayType, colors };
    },
    components: { Big, Given, Little },
});
</script>
