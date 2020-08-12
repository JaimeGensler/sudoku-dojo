<template lang="html">
    <Victory v-if="!state.isActive" />

    <header>
        <h1
            class="font-julius text-4xl lg:text-5xl text-center text-gray-800 mt-4 mb-2"
        >
            Sudoku Dojo
        </h1>
    </header>
    <div class="container mx-auto">
        <main
            class="mx-auto flex items-center justify-center flex-col lg:items-stretch lg:flex-row"
        >
            <section class="border border-gray-800">
                <Game />
            </section>
            <section class="w-108 lg:h-auto lg:w-60" :class="borders">
                <Sidebar />
            </section>
        </main>
    </div>
</template>

<script lang="ts">
import Game from './Game/index.vue';
import Victory from './Game/Victory.vue';
import Sidebar from './Sidebar/index.vue';
import { provideGame } from './utils/provideGame';
import sudoku from '../lib/sudoku';
import { ref, defineComponent } from 'vue';

export default defineComponent({
    setup() {
        const [state] = provideGame(Symbol.for('sudoku-dojo:game'), sudoku);
        // This is just to keep it out of the way while tweaking classes
        const borders =
            'border-gray-800 border-b-2 border-r-2 border-t-0 border-l-2 lg:border-t-2 lg:border-l-0';
        return { state, borders };
    },
    components: { Game, Sidebar, Victory },
});
</script>
