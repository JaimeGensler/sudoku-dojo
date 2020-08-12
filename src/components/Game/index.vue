<template lang="html">
    <pre tabindex="0" class="grid grid-cols-3">
        <Block v-for="n in 9" :block-index="n" :key="n" />
    </pre>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Block from './Block.vue';

export default defineComponent({
    components: { Block },
});
</script>
