<template lang="html">
    <Victory v-if="!state.isActive" />

    <header>
        <h1 class="font-julius text-5xl text-center text-gray-800 mt-6 mb-4">
            Sudoku Dojo
        </h1>
    </header>
    <main class="flex items-stretch justify-center">
        <section class="shadow-lg">
            <Game />
        </section>
        <section class="shadow-lg">
            <Sidebar />
        </section>
    </main>
</template>

<script lang="ts">
import Game from './Game/index.vue';
import Victory from './Game/Victory.vue';
import Sidebar from './Sidebar/index.vue';
import { provideGame } from './utils/provideGame';
import sudoku from '../lib/sudoku';
import { ref } from 'vue';

export default {
    setup() {
        const [state] = provideGame(Symbol.for('sudoku-dojo:game'), sudoku);
        return { state };
    },
    components: { Game, Sidebar, Victory },
};
</script>
