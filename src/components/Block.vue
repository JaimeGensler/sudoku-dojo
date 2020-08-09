<template lang="html">
    <div class="flex flex-wrap w-1/3 h-third border border-gray-800">
        <Cell
            v-for="n in 9"
            :blockIndex="blockIndex"
            :blockSubIndex="n"
            :key="n"
        />
    </div>
</template>

<script lang="ts">
    import Cell from './Cell/index.vue';
    export default {
        props: {
            blockIndex: { type: Number, required: true },
        },
        setup() {},
        components: { Cell },
    };
</script>
