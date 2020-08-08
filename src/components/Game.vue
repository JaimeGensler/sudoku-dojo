<template lang="html">
    <div class="flex flex-wrap w-4/5 h-4/5 mx-auto my-0">
        <Block v-for="n in 9" :blockIndex="n" :key="n" />
    </div>
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
