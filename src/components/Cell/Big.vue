<template lang="html">
    <span v-if="shouldRender">{{ String(value) }}</span>
</template>

<script lang="ts">
    export default {
        props: {
            value: { type: Number, required: true },
        },
        setup(props) {
            const shouldRender = props.value !== 0;
            return { shouldRender };
        },
    };
</script>
