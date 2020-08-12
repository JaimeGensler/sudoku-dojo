<template lang="html">
    <div class="h-full bg-white px-4 py-2 lg:py-4 space-y-2 divide-y">
        <div>
            <h2 class="font-bold text-xl border-b border-gray-700 w-full mb-1">
                About & Settings
            </h2>
            <Instructions />
        </div>
        <div
            class="pt-2 space-x-2 space-y-0 lg:space-x-0 lg:space-y-4 flex lg:block"
        >
            <div class="w-3/5 lg:w-full">
                <KeyHelp />
            </div>
            <div class="space-y-2 w-2/5 lg:w-full">
                <InputMode />
                <NumPad />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Instructions from './Instructions.vue';
import KeyHelp from './KeyHelp.vue';
import InputMode from './InputMode.vue';
import NumPad from './NumPad.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        Instructions,
        KeyHelp,
        InputMode,
        NumPad,
    },
});
</script>
