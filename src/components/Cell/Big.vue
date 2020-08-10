<template lang="html">
    <span class="text-xl" v-if="shouldRender">{{ String(value) }}</span>
</template>

<script lang="ts">
    import { isReactive, computed } from 'vue';
    export default {
        props: {
            value: { type: Number, required: true },
        },
        setup(props) {
            const shouldRender = computed(() => props.value !== 0);
            return { shouldRender };
        },
    };
</script>
