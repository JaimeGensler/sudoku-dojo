<template lang="html">
    <table class="text-xs">
        <tr class="border-b">
            <td>1 - 9</td>
            <td>Input a number with the current mode</td>
        </tr>
        <tr class="border-b">
            <td>! - (</td>
            <td>Input a number with the alternative mode</td>
        </tr>
        <tr class="border-b">
            <td>0, BS, Del</td>
            <td>Clear cell value (does not clear candidates)</td>
        </tr>
        <tr class="border-b">
            <td>WASD, Arrows</td>
            <td>Move selected cell</td>
        </tr>
        <tr class="border-b">
            <td>n</td>
            <td>Switch input mode</td>
        </tr>
        <tr>
            <td>p</td>
            <td>Populate candidates given current board</td>
        </tr>
    </table>
</template>

<script lang="ts">
export default {};
</script>
