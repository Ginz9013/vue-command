<script>
import { mapActions } from "pinia";
import indexStore from "../store/indexStore";
export default {
    data() {
        return {
            text: "Hello World!",
            isTrue: false
        }
    },
    methods: {
        ...mapActions(indexStore, ["setLocation"])
    },
    mounted() {
        this.setLocation(2);
    }
}
</script>

<template>
    <h2>V-Text</h2>
    <!--  純值 / 能接受一個表達式 -->
    <!-- 如果 isTrue 為真(true) 我想要P 顯示 text 的內容 -->
    <!-- 如果 isTrue 為假(false) 我想要P 顯示 loading... 的內容 -->
    <p>{{ text }}</p>
    <p>{{ isTrue ? text : "loading..." }}</p>
    <p v-text="text"></p>
</template>

<style lang="">
</style>