<template lang="html">
    <span
        class="flex text-xl items-center justify-center w-full h-full"
        :class="colors"
    >
        {{ value !== 0 ? String(value) : null }}
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
