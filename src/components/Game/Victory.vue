<template lang="html">
    <transition name="fade">
        <div
            class="absolute w-screen h-screen bg-opacity-75 bg-black flex items-center justify-center"
            @click="handleClick"
        >
            <section class="bg-gray-100 py-8 px-16 rounded shadow-lg">
                <button />
                <h2 class="text-5xl font-bold text-center">Well done!</h2>
                <p class="w-64">
                    Congratulations, Sudoku Master. Click anywhere to return to
                    the puzzle. Thanks for playing!
                </p>
            </section>
        </div>
    </transition>
</template>

<script lang="ts">
import { SudokuState } from '../../lib/types';
import { consumeGame } from '../utils/consumeGame';

export default {
    setup() {
        const [state] = consumeGame<SudokuState>(
            Symbol.for('sudoku-dojo:game'),
        );
        const handleClick = () => (state.isActive = true);
        return { handleClick };
    },
};
</script>
