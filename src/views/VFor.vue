<script>
import { mapActions } from "pinia";
import indexStore from "../store/indexStore";
export default {
    data() {
        return {
            arr: ["Nini", "John", "Tim", "Max"],
            arr2: [
                {
                    name: "Nini",
                    tel: 8869554486,
                    address: "新北市淡水區...."
                },
                { 
                    name: "John",
                    tel: 8869876542,
                    address: "台北市內湖區"
                },
                {
                    name: "Tim",
                    tel: 8869123456,
                    address: "台南市永康區"
                },
                {
                    name: "Max",
                    tel: 8869555446,
                    address: "高雄市左營區"
                }
            ]
        }
    },
    methods: {
        ...mapActions(indexStore, ["setLocation"])
    },
    mounted() {
        this.setLocation(3);

        this.arr.forEach((item, index, arr) => {

        })
    }
}
</script>
<template>
    <div>
        <h2>V-for</h2>

        <!-- arr: ["Nini", "John", "Tim", "Max"] -->
        <ul>
            <li v-for="(item, index) in arr" :key="index">{{ (index+1) + " " + item }}</li>
        </ul>

        <ul v-for="item in arr2">
            <li>name: {{ item.name }}</li>
            <li>tel: {{ item.tel }}</li>
            <li>address: {{ item.address }}</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
ul {
    padding: 0;
}

li {
    list-style: none;
}
    
</style>