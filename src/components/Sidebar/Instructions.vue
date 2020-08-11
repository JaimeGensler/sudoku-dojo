<template lang="html">
    <div>
        <p class="text-sm">
            Play a classic game of Sudoku! This project is an experiment in
            custom state management, and so this puzzle is the only one
            available for now. Find keybindings listed below.
        </p>
    </div>

    <table class="text-xs">
        <tr class="border-b">
            <td>1 - 9</td>
            <td>Input a number with the current mode</td>
        </tr>
        <tr class="border-b">
            <td>! - (</td>
            <td>Input a number with the alternative mode</td>
        </tr>
        <tr class="border-b">
            <td>0, BS, Del</td>
            <td>Clear cell value (does not clear candidates)</td>
        </tr>
        <tr class="border-b">
            <td>WASD, Arrows</td>
            <td>Move selected cell</td>
        </tr>
        <tr class="border-b">
            <td>n</td>
            <td>Switch input mode</td>
        </tr>
        <tr>
            <td>p</td>
            <td>Populate candidates given current board</td>
        </tr>
    </table>
</template>

<script lang="ts">
import NumPad from './NumPad.vue';
import InputMode from './InputMode.vue';
export default {
    components: { NumPad, InputMode },
};
</script>
