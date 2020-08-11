<template lang="html">
    <span
        class="flex text-xl items-center justify-center w-full h-full"
        :class="colors"
    >
        {{ content }}
    </span>
</template>

<script lang="ts">
import { computed, ref } from 'vue';

export default {
    props: {
        value: { type: Number, required: true },
        color: { type: String, required: true },
    },
    setup(props) {
        const content = computed(() =>
            props.value !== 0 ? String(props.value) : null,
        );
        const colors = computed(() =>
            props.color
                ? `bg-${props.color}-200 text-${props.color}-700`
                : null,
        );
        return { content, colors };
    },
};
</script>
