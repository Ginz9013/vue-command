<script>
export default {
    data() {
        return {
            car: false,
            car2: false,
            house: 0,
        }
    },
}
</script>
<template>
    <h2>V-if & V-show</h2>

    <div>
        <input type="checkbox" id="car" value="true" v-model="car">
        <label for="car">有車</label>
    </div>
    <p>car: {{ car }}</p>
    <p v-if="car">小明有車</p>
    <p v-else>小明沒車</p>

    <!-- 空一行 -->
    <br>

    <h2>v-else-if</h2>
    <!-- 下拉選單 -->
    <select name="house" id="house" v-model.number="house">
        <option value="0">沒房</option>
        <option value="1">好窄</option>
        <option value="2">豪宅</option>
    </select>

    <h4>小明:</h4>
    <p v-if="house === 0">沒房</p>
    <p v-else-if="house === 1">好窄</p>
    <p v-else>豪宅</p>

    <br>

    <h2>v-show</h2>
    <div>
        <input type="checkbox" name="car2" id="car2" value="true" v-model="car2">
        <label for="car2">有車</label>
    </div>

    <p v-show="car2">小明有車</p>

    
</template>

<style lang="scss" scoped>
    
</style>