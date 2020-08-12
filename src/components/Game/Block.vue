<template lang="html">
    <div class="grid grid-cols-3 border border-gray-800 w-auto">
        <Cell
            v-for="n in 9"
            :block-index="blockIndex"
            :block-sub-index="n"
            :key="n"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cell from './Cell/index.vue';

export default defineComponent({
    props: {
        blockIndex: { type: Number, required: true },
    },
    components: { Cell },
});
</script>
