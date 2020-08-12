<template lang="html">
    <div class="flex flex-wrap h-full w-full" :class="colors">
        <span
            class="w-1/3 h-third text-xs flex items-center justify-center"
            v-for="n in 9"
            :key="n"
        >
            {{ values.includes(n) ? n : null }}
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        values: { required: true },
        colors: { required: true },
    },
});
</script>
