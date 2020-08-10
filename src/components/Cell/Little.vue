<template lang="html">
    <div class="w-full h-full flex flex-wrap">
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
    import { isReactive } from 'vue';
    export default {
        props: {
            values: { required: true },
        },
        setup(props) {
            console.log(isReactive(props.values));
        },
    };
</script>
