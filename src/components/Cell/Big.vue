<template lang="html">
    <span
        class="flex text-xl items-center justify-center w-full h-full"
        :class="colors"
        v-if="shouldRender"
    >
        {{ String(value) }}
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
        const shouldRender = computed(() => props.value !== 0);
        const colorGetter = () => {
            // This is entirely silly but I'm too tired to think of a better solution
            return {
                [`bg-${props.color}-300`]: true,
                [`text-${props.color}-800`]: true,
            };
        };
        const colors = computed(colorGetter);
        return { shouldRender, colors };
    },
};
</script>
