<script>
export default {
    data() {
        return {
            text: null
        }
    },
    methods: {
        submit() {
            // 切換網址(路由)
            // this.$router.push("/router-props");

            this.$router.push({
                name: "RouterProps",
                params: {
                //  自訂名稱: 要帶出去的值
                    propText: this.text
                }
            });
        }
    }
}
</script>
<template>
    <div>
        <h2>Router Push</h2>
        <input type="text" v-model="text">
        <button type="button" @click="submit">
            To Props Page
        </button>
    </div>
</template>

<style lang="scss" scoped>
    
</style>