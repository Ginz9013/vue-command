<script>
export default {
    inject: ["text"]
}
</script>
<template>
    <div class="wrap">
        <h3>ComB</h3>
        <p>{{ text }}</p>
    </div>
</template>

<style lang="scss" scoped>
.wrap {
    border: 2px solid black;
    width: 400px;
    height: 400px;
    margin: 0 auto;
}
</style>