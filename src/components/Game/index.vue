<template lang="html">
    <pre tabindex="0" class="grid grid-cols-3">
        <Block v-for="n in 9" :block-index="n" :key="n" />
    </pre>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Block from './Block.vue';

// This is kind of silly but Tailwind's purge options weren't cooperating so here we are
const twcssDoNotPurgeList = [
    'bg-blue-200',
    'text-blue-700',
    'bg-purple-200',
    'text-purple-700',
    'bg-red-200',
    'text-red-700',
    'bg-blue-700',
    'text-blue-100',
    'bg-purple-700',
    'text-purple-100',
    'bg-red-700',
    'text-red-100',

    'border-l-0',
    'border-r-0',
    'border-blue-800',
    'text-blue-800',
    'bg-blue-200',
    'border-l',
    'border-r',
    'border-t',
    'border-b',
];
export default defineComponent({
    components: { Block },
});
</script>
