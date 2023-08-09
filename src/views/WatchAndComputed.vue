<script>
export default {
    data() {
        return {
            point: 0,
            ntd: 0
        }
    },
    methods: {
        pointPlus() {
            this.point += 1;
        }
    },
    // 監控 data 裡面的變數
    watch: {
        point() {
            this.ntd = this.point *10;
        }
    },
    // 處理過後的(只能用在輸出上的)變數
    // 想要做一些換算，處理之後
    // 顯示在畫面上的臨時變數
    computed: {
        jpy() {
            return this.ntd * 4.52;
        }
    }
}
</script>
<template>
    <h2>Watch & Computed</h2>
    <p>分數: {{ point }}</p>
    <p>台幣: {{ ntd }}</p>
    <p>日圓: {{ jpy }}</p>
    <div class="cookie" @click="pointPlus">
        <div class="choco choco1"></div>
        <div class="choco choco2"></div>
        <div class="choco choco3"></div>
    </div>
</template>

<style lang="scss" scoped>
.cookie {
    width: 100px;
    height: 100px;
    background-color: #9f8c6f;
    border-radius: 50px;
    position: relative;
    cursor: pointer;
    transition: 0.3s;
    margin: 0 auto;

    &:hover {
        scale: 1.05;
    }

    &:active {
        scale: 0.95;
    }

    .choco {
        width: 16px;
        height: 16px;
        background-color: #3c2e2a;
        border-radius: 8px;
        position: absolute;
    }

    .choco1 {
        top: 20px;
        left: 40px;
    }

    .choco2 {
        top: 60px;
        left: 20px;
    }

    .choco3 {
        top: 50px;
        left: 70px;
    }
}
</style>