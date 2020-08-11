<template lang="html">
    <div>
        <p class="text-md">
            Play a classic game of Sudoku! This project is an experiment in
            custom state management, and so this puzzle is the only one
            available for now.
        </p>
    </div>
</template>

<script lang="ts">
import NumPad from './NumPad.vue';
import InputMode from './InputMode.vue';
export default {
    components: { NumPad, InputMode },
};
</script>
