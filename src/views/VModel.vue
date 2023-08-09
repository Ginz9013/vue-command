<script>
// Pinia 方法
import { mapActions } from "pinia";
// 自己的 Pinia 資料庫(Store)
import indexStore from "../store/indexStore.js";
export default {
// ES6 語法糖
// Vue 規則
  data() {
    return {
      // let text = "v-model"
      text: "",
      // null 空
      num: null,
      lazyText: "",
      trimText: "",
      meal: [],
      radioMeal: null
    }
  },
  methods: {
    ...mapActions(indexStore, ["setLocation"])
  },
  mounted() {
    this.setLocation(1);
  }
}
</script>

<template>
  <h1>V-model</h1>
  <!-- v-text -->
  <p>{{ text }}</p>
  <input type="text" v-model="text">

  <h2>V-model.number</h2>
  <p>{{ num }}</p>
  <input type="number" v-model.number="num">
  
  <h2>V-model.lazy</h2>
  <p>{{ lazyText }}</p>
  <input type="text" v-model.lazy="lazyText">

  <h2>V-model.trim</h2>
  <p>{{ trimText }}</p>
  <input type="text" v-model.trim="trimText">

  <!-- 多選 -->
  <h2>Checkbox</h2>
  <div>
    <input type="checkbox" name="meal" value="早餐" v-model="meal" id="breakfast">
    <label for="breakfast">早餐</label>

    <input type="checkbox" name="meal" value="中餐" v-model="meal" id="lunch">
    <label for="lunch">中餐</label>

    <input type="checkbox" name="meal" value="晚餐" v-model="meal" id="dinner">
    <label for="dinner">晚餐</label>
  </div>
  <p>{{ meal }}</p>

  <!-- 單選 -->
  <h2>Radio</h2>
  <div>
    <input type="radio" id="breakfast2" name="radioMeal" value="早餐" v-model="radioMeal">
    <label for="breakfast2">早餐</label>

    <input type="radio" id="lunch2" name="radioMeal" value="中餐" v-model="radioMeal">
    <label for="lunch2">中餐</label>

    <input type="radio" id="dinner2" name="radioMeal" value="晚餐" v-model="radioMeal">
    <label for="dinner2">晚餐</label>
  </div>
</template>
