<template lang="html">
    <div class="w-full h-full flex flex-wrap" :class="colors">
        <span
            class="h-third w-1/3 text-xs flex items-center justify-center"
            v-for="n in 9"
            :key="n"
        >
            {{ values.includes(n) ? n : null }}
        </span>
    </div>
</template>

<script lang="ts">
import { isReactive, computed } from 'vue';
export default {
    props: {
        values: { required: true },
        color: { type: String, required: true },
    },
    setup(props) {
        const colors = computed(() =>
            props.color
                ? `bg-${props.color}-200 text-${props.color}-700`
                : null,
        );

        return { colors };
    },
};
</script>
