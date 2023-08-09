<!-- 父層 -->
<script>
import Child from "../components/Child.vue";
export default {
    components: {
        Child
    },
    methods: {
        getInfo(params) {
            console.log("GETINFO:")
            console.log("接收到資訊了");
            console.log(params);
        }
    }
}
</script>
<template>
    <h2>Emit</h2>
    <div class="wrap">
        <Child
        :title="'Emit練習'" :text="'子元件傳父元件'"
        v-on:event="getInfo"
        />
    </div>
</template>

<style lang="scss" scoped>
.wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>