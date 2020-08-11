<template lang="html">
    <pre
        tabindex="0"
        class="flex flex-wrap mx-auto my-0 border border-gray-800 game-board"
    >
        <Block v-for="n in 9" :block-index="n" :key="n" />
    </pre>
</template>

<script lang="ts">
import Block from './Block.vue';

export default {
    components: { Block },
};
</script>
