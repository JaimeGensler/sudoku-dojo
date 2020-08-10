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
    import { provideGame } from './utils/provideGame';
    import sudoku from '../lib/sudoku';

    export default {
        setup() {
            provideGame(Symbol.for('sudoku'), sudoku);
        },
        components: { Block },
    };
</script>
