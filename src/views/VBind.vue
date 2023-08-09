<script>
export default {
    data() {
        return {
            imgUrl: "https://miro.medium.com/v2/resize:fit:630/1*MBb7iatu9etCcQQGxUXpbg.jpeg",
            isRed: false,
            isBold: false,
            styleArr: []
        }
    }
}
</script>
<template>
    <h2>V-bind</h2>
    <!-- V-model => 標籤 值 -->
    <!-- V-bind 綁HTML標籤 [屬性] -->

    <h3>img v-bind:scr</h3>
    <img :src="imgUrl" alt="">

    <h3>class {}</h3>
    <div>
        <input type="checkbox" id="red" value="true" v-model="isRed">
        <label for="red">Red</label>
    </div>
    <div>
        <input type="checkbox" id="bold" value="true" v-model="isBold">
        <label for="bold">Bold</label>
    </div>
    <p
        :class="{
        // key:class value:判斷式(值)
            red: isRed,
            bold: isBold
        }"
    >Lorem ipsum dolor sit amet.</p>

    <h3>class []</h3>
    <div>
        <input type="checkbox" name="style" v-model="styleArr" value="red" id="red2">
        <label for="red2">Red</label>

        <input type="checkbox" name="style" v-model="styleArr" value="bold" id="dolb2">
        <label for="dolb2">Bold</label>

        <input type="checkbox" name="style" v-model="styleArr" value="large" id="large2">
        <label for="large2">large</label>
    </div>
    <p :class="styleArr">Lorem ipsum dolor sit amet.</p>

</template>

<style lang="scss" scoped>
.red {
    color: red;
}

.bold {
    font-weight: bold;
}

.large {
    font-size: 6rem;
}
</style>