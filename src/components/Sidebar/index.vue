<template lang="html">
    <div
        class="h-full w-64 bg-white p-4 border-gray-800 border-t-2 border-r-2 border-b-2 space-y-4"
    >
        <h2 class="font-bold text-xl border-b border-gray-700">
            About & Settings
        </h2>
        <Instructions />
        <NumPad />
        <InputMode />
    </div>
</template>

<script lang="ts">
import NumPad from './NumPad.vue';
import InputMode from './InputMode.vue';
import Instructions from './Instructions.vue';
export default {
    components: { NumPad, InputMode, Instructions },
};
</script>
