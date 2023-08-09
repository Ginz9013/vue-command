<!-- 父層 -->
<script>
import Child from "../components/Child.vue";
export default {
    components: {
        Child
    },
    data() {
        return {
            cardInfo: [
                {
                    title: "標題1",
                    text: 111111111
                },
                {
                    title: "標題2",
                    text: 222222222222
                },
                {
                    title: "標題3",
                    text: 3333333333333
                }
            ]
        }
    }
}
</script>
<template>
    <h2>Props</h2>
    <div class="child-area">
        <Child
            v-for="info in cardInfo"
            :title="info.title"
            :text="info.text"
        />
    </div>
</template>

<style lang="scss" scoped>
.child-area {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>