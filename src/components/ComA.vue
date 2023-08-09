<script>
import ComB from "./ComB.vue";
export default {
    components: {
        ComB
    }
}
</script>
<template>
    <div class="wrap">
        <h3>ComA</h3>
        <ComB />
    </div>
</template>

<style lang="scss" scoped>
.wrap {
    border: 2px solid black;
    width: 600px;
    height: 600px;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
}
    
</style>