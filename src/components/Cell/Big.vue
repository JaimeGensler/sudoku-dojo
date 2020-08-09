<template lang="html">
    <span v-if="value !== 0">{{ String(value) }}</span>
</template>

<script lang="ts">
    export default {
        props: {
            value: { type: Number, required: true },
        },
    };
</script>
