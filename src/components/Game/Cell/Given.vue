<template lang="html">
    <span
        class="flex items-center justify-center w-full h-full font-bold text-2xl bg-gray-300"
        :class="colors"
    >
        {{ value }}
    </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        value: { type: Number, required: true },
        colors: { required: true },
    },
});
</script>
