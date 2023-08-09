// 狀態資料庫
import { defineStore } from "pinia";

// 兩個參數 1.資料庫名稱 2.資料庫內容
export default defineStore("indexStatus", {
    // data
    state: () => ({
        location: 10,
    }),
    // computed
    // 沒有this
    getters: {
        // 本身可以當成一個變數
        locationInfo: (state) => `現在的位置是: ${state.location}`
    },
    // methods
    // 有this
    actions: {
        getLocation() {
            console.log(this.location);
        },
        setLocation(num) {
            this.location = num;
        }
    }
});