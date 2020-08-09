<template lang="html">
    <div
        class="flex items-center justify-center w-1/3 h-third bg-white border-gray-700"
        v-bind:class="cellBorders"
    >
        <Given :value="state.solvedValue" v-if="display.given" />
        <Big :value="state.currentValue" v-if="display.big" />
        <Little :values="state.candidates" v-if="display.given" />
    </div>
</template>

<script lang="ts">
    import { getCellIndex, getCellBorders, getDisplayLookup } from './helpers';
    import { injectCell } from '../utils/state';

    import Big from './Big.vue';
    import Given from './Given.vue';
    import Little from './Little.vue';

    export default {
        props: {
            blockIndex: { type: Number, required: true },
            blockSubIndex: { type: Number, required: true },
        },
        setup(props) {
            const state = injectCell(getCellIndex(props));

            const cellBorders = getCellBorders(props.blockSubIndex);
            const display = getDisplayLookup(state);
            return { cellBorders, state, display };
        },
        components: {
            Big,
            Given,
            Little,
        },
    };
</script>
