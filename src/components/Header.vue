<script>
// vue-router 處理網址
import { RouterLink, RouterView } from 'vue-router';

// Pinia 方法
import { mapState, mapActions } from 'pinia';
// 自己的資料庫(預設匯入)
import indexStore from "../store/indexStore";

// a 連結

// 預設匯出
export default {
    data() {
        return {
            
        }
    },
    computed: {
        // 參數: 1.資料庫 2.要取用的 state / getters
        ...mapState(indexStore, ["location", "locationInfo"])
    },
    methods: {
        // 參數: 1.資料庫 2.要取用的 actions(methods)
        ...mapActions(indexStore, ["getLocation"])
    },
    mounted() {
        // console.log(this.location);
        // console.log(this.locationInfo)
        this.getLocation();
    }
    
}
</script>

<template>
    <header>
        <p>{{ locationInfo }}</p>
        <!--                  key:class / value: 判斷式 -->
        <RouterLink class="link" :class="{'local': location === 1}" to="/">V-model</RouterLink>
        <RouterLink class="link" :class="{'local': location === 2}" to="/v-text">V-text</RouterLink>
        <RouterLink class="link" :class="{'local': location === 3}" to="/v-for">V-for</RouterLink>
        <RouterLink class="link" :class="{'local': location === 4}" to="/v-if&v-show">V-if&V-show</RouterLink>
        <RouterLink class="link" :class="{'local': location === 5}" to="/v-bind">V-bind</RouterLink>
        <RouterLink class="link" :class="{'local': location === 6}" to="/v-on">V-on</RouterLink>
        <RouterLink class="link" :class="{'local': location === 7}" to="/props">Props</RouterLink>
        <RouterLink class="link" :class="{'local': location === 8}" to="/emit">Emit</RouterLink>
        <RouterLink class="link" :class="{'local': location === 9}" to="/provide&inject">Provide & Inject</RouterLink>
        <RouterLink class="link" :class="{'local': location === 10}" to="/watch&computed">Watch & Computed</RouterLink>
        <RouterLink class="link" :class="{'local': location === 11}" to="/vue-router">Vue Router</RouterLink>
        <RouterLink class="link" :class="{'local': location === 12}" to="/router-push">Router Push</RouterLink>
        <RouterLink class="link" :class="{'local': location === 13}" to="/file-reader">File Reader</RouterLink>
    </header>
</template>

<style lang="scss" scoped>
header {
    width: 100%;
    background-color: #41b782;
    font-size: 1.5rem;
    padding: 2rem 3rem;

    .link {
        margin: 0 0.5rem;
        text-decoration: none;
        color: white;
    }

    .local {
        background-color: #fff;
        color: #41b782;
        padding: 4px 8px;
        border-radius: 4px;
    }
}
</style>