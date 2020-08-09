<template lang="html">
    <span class="font-bold text-xl">{{ value }}</span>
</template>

<script lang="ts">
    export default {
        props: {
            value: { type: Number, required: true },
        },
    };
</script>
