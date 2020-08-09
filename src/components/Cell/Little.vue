<template lang="html">
    <div>
        <span v-for="n in 9" :key="n">
            {{ candidates.includes(n) ? n : null }}
        </span>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            candidates: { type: Array, required: true },
        },
    };
</script>
