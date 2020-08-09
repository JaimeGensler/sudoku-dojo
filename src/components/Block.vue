<template lang="html">
    <div class="flex flex-wrap w-1/3 h-1/3 border border-gray-800">
        <Cell
            v-for="n in 9"
            :blockIndex="blockIndex"
            :blockSubIndex="n"
            :key="n"
        />
    </div>
</template>

<script lang="ts">
    import Cell from './Cell.vue';
    export default {
        props: {
            blockIndex: Number,
        },
        setup() {},
        components: {
            Cell,
        },
    };
</script>
