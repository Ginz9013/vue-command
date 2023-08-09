<script>
import ComA from "../components/ComA.vue";
export default {
    components: {
        ComA
    },
    provide() {
        return {
        //  key : value
            text: "外層的資料"
        }
    }
}
</script>
<template>
    <h2>Provide & Inject</h2>
    <div class="container">
        <ComA />
    </div>
</template>

<style lang="scss" scoped>
    .container {
        display: flex;
        justify-content: center;
    }
</style>