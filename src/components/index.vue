<template lang="html">
    <header>
        <h1 class="font-julius text-5xl text-center text-gray-800">Sudoku Dojo</h1>
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
import Sidebar from './Sidebar/index.vue';
import { provideGame } from './utils/provideGame';
import sudoku from '../lib/sudoku';

export default {
    setup() {
        provideGame(Symbol.for('sudoku-dojo:game'), sudoku);
    },
    components: { Game, Sidebar },
};
</script>
