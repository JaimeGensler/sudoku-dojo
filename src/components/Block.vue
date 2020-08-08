<template lang="html">
    <div class="w-1/3">
        <h2 class="text-green-500">Block</h2>
        <Cell />
    </div>
</template>

<script lang="ts">
    import Cell from './Cell.vue';
    export default {
        props: {
            blockIndex: Number,
        },
        setup(props) {
            console.log(props.blockIndex);
        },
        components: {
            Cell,
        },
    };
</script>
