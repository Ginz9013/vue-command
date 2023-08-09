<script>
export default {
    data() {
        return {
            img64: null
        }
    },
    methods: {
        getFile(e) {
            console.log("抓到圖片了");
            const file = e.target.files[0];

            const reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onload = (e) => {
                console.log(e.target.result);
                this.img64 = e.target.result;
            }
        }
    }
}
</script>
<template>
    <h2>File Reader</h2>
    <input type="file" @change="getFile">
    <br>
    <img :src="img64" alt="pic">
</template>

<style lang="scss" scoped>
    
</style>