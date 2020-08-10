<template lang="html">
    <div
        class="flex items-center justify-center w-1/3 h-third bg-white border-gray-700"
        :class="cellStyle"
        @click="dispatch('CLICK_SELECT', cell.index)"
    >
        <Given :value="cell.solvedValue" v-if="shouldRender.given" />
        <Big :value="cell.currentValue" v-if="shouldRender.big" />
        <Little :values="cell.candidates" v-if="shouldRender.little" />
    </div>
</template>

<script lang="ts">
    import { getCellIndex, getCellStyle, getDisplayLookup } from './helpers';
    import { consumeGame } from '../utils/consumeGame';

    import Big from './Big.vue';
    import Given from './Given.vue';
    import Little from './Little.vue';
    import { computed } from 'vue';
    import { SudokuState } from '../../lib/types';

    export default {
        props: {
            blockIndex: { type: Number, required: true },
            blockSubIndex: { type: Number, required: true },
        },
        setup(props) {
            const cellIndex = getCellIndex(props);
            const getFromState = (state: SudokuState) => {
                return state.cells[getCellIndex(props)];
            };
            const [cell, dispatch] = consumeGame(
                Symbol.for('sudoku'),
                getFromState,
            );
            console.log(cell.candidates);

            const cellStyle = computed(() => {
                return getCellStyle(cell, props.blockSubIndex);
            });
            const shouldRender = computed(() => {
                return getDisplayLookup(cell);
            });

            return { cellStyle, cell, shouldRender, dispatch };
        },
        components: { Big, Given, Little },
    };
</script>
