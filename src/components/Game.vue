<template lang="html">
    <pre class="flex flex-wrap mx-auto my-0 border border-gray-800 game-board">
        <Block v-for="n in 9" :blockIndex="n" :key="n" />
    </pre>
</template>

<script lang="ts">
    import Block from './Block.vue';
    export default {
        setup() {},
        components: {
            Block,
        },
    };
</script>
