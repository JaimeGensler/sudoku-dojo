<template lang="html">
    <div
        class="flex items-center justify-center w-1/3 h-third bg-white border-gray-700"
        :class="cellStyle"
        @click="handleClick(cell.index)"
    >
        <Given :value="cell.solvedValue" v-if="display.given" />
        <Big :value="cell.currentValue" v-if="display.big" />
        <Little :values="cell.candidates" v-if="display.little" />
    </div>
</template>

<script lang="ts">
    import { getCellIndex, getCellStyle, getDisplayLookup } from './helpers';
    import { consumeGame } from '../utils/consumeGame';

    import Big from './Big.vue';
    import Given from './Given.vue';
    import Little from './Little.vue';
    import { computed } from 'vue';

    export default {
        props: {
            blockIndex: { type: Number, required: true },
            blockSubIndex: { type: Number, required: true },
        },
        setup(props) {
            const getFromState = (state: any) => state[getCellIndex(props)];
            const [cell, handleClick] = consumeGame(
                Symbol.for('sudoku'),
                getFromState,
            );

            const cellStyle = computed(() =>
                getCellStyle(cell, props.blockSubIndex),
            );
            const display = getDisplayLookup(cell);
            return { cellStyle, cell, display, handleClick };
        },
        components: { Big, Given, Little },
    };
</script>
