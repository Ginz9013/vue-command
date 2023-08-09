<script>
import { RouterView } from "vue-router";
import HeaderView from "./components/Header.vue";

export default {
  components: {
    // Js 語法糖
    HeaderView,
  }
}
</script>

<template>
  <HeaderView />
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  margin-bottom: 16rem;
}
</style>
