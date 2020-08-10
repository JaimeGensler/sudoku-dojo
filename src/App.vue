<template lang="html">
    <h1 class="font-julius text-5xl text-center text-gray-800">Sudoku Dojo</h1>
    <Game />
</template>

<script lang="ts">
import Game from './components/Game.vue';
export default {
    setup() {},
    components: {
        Game,
    },
};
</script>

<style lang="css" scoped>
.font-julius {
    font-family: 'Julius Sans One', sans-serif;
}
</style>
