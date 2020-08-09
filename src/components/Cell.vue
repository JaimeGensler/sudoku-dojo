<template lang="html">
    <div
        class="flex items-center justify-center w-1/3 h-1/3 bg-white border-gray-700"
        v-bind:class="cellBorders"
    >
        <span>{{ cellIndex }}</span>
    </div>
</template>

<script lang="ts">
    import { computed } from 'vue';
    import { getCellIndex, getCellBorders } from './utils/cellHelpers';
    export default {
        props: {
            blockIndex: Number,
            blockSubIndex: Number,
        },
        setup(props) {
            const cellIndex = computed(() => getCellIndex(props));
            const cellBorders = computed(() =>
                getCellBorders(props.blockSubIndex),
            );
            return { cellIndex, cellBorders };
        },
    };
</script>
