<template lang="html">
    <pre
        tabindex="0"
        class="flex flex-wrap mx-auto my-0 border border-gray-800 game-board"
    >
        <Block v-for="n in 9" :blockIndex="n" :key="n" />
    </pre>
</template>

<script lang="ts">
    import Block from './Block.vue';
    import { provideGame } from './utils/provideGame';
    import { easySudoku } from '../lib/old/utils/dummyBoard';

    export default {
        setup() {
            provideGame(Symbol.for('sudoku'), {
                state: easySudoku,
            });
        },
        components: { Block },
    };
</script>
