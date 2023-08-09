<script>
export default {
    // 變數 / 資料
    data() {
        return {
            text: ""
        }
    },
    // 方法 methods
    methods: {
        // 語法糖
        call(str) {
            console.log("我被點擊了!" + str);
        }
    },
    // 生命週期 (原生JS寫程式碼的地方)
    beforeCreate() {
        // console.log("元件創造前");
    },
    created() {
        // console.log("元件創造後");
    },
    beforeMount() {
        // console.log("元件綁定前");
    },
    mounted() {
        // console.log("元件綁定後");
        // console.log(123);
    },
    // beforeUpdate() {

    // },
    // updated() {

    // }

}
</script>

<template>
    <div>
        <h1>V-on</h1>
        <!-- button.addEventLitsener("click", () => {}) -->
        <input type="text" v-model="text">
        <button type="button" @click="call(text)">Click</button>
    </div>
</template>

<style lang="scss" scoped>
    
</style>