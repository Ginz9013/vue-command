<!-- 子層 -->
<script>
export default {
    // 接收父層的變數(值)
    // 做了一個接口
    // 單向數據流:只能接收使用，不能修改
    props:["title", "text"],
    // Proxy 物件
    data() {
        return {
            infoText: "",
            num: 0,
            emitText: null
        }
    },
    // 方法 methods
    methods: {
        push() {
            // console.log(this.emitText);

           
            console.log("PUSH:")
            console.log(this.emitText)
            // 方法
            // 1. 觸發事件的方法名稱(字串)
            // 2. 要帶的值
            this.$emit("event", this.emitText)
        }
    },
    // mounted() {
    //     console.log(this.num);
    // }
}
</script>

<template>
    <div class="wrap">
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
        <!-- 出錯 -->
        <!-- <input type="text" v-model="text"> -->
        <input type="text" v-model="emitText">
        <button type="button" @click="push">Push</button>
    </div>
</template>

<style lang="scss" scoped>
.wrap {
    border: 2px solid black;
    width: 300px;
    margin: 1rem 0;
}
</style>