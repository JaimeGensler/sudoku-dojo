<template lang="html">
    <span
        class="flex items-center justify-center w-full h-full font-bold text-2xl bg-gray-300"
        :class="colors"
    >
        {{ value }}
    </span>
</template>

<script lang="ts">
import { computed } from 'vue';

export default {
    props: {
        value: { type: Number, required: true },
        color: { type: String, required: true },
    },
    setup(props) {
        const colors = computed(() =>
            props.color
                ? `bg-${props.color}-700 text-${props.color}-100`
                : null,
        );
        return { colors };
    },
};
</script>
