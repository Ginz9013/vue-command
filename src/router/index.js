// 路由表
import { createRouter, createWebHistory } from 'vue-router'
import VModel from "../views/VModel.vue";
import ComD from "../components/ComD.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 網址:首頁
      path: '/',
      // 名稱: home
      name: 'home',
      // 元件: Vmodel
      component: VModel
    },
    {
      path: "/v-text",
      name: "VText",
      component: () => import("../views/VText.vue")
    },
    {
      path: "/v-for",
      name: "VFor",
      component: () => import("../views/VFor.vue")
    },
    {
      path: "/v-if&v-show",
      name: "VIfAndVShow",
      component: () => import("../views/VIfAndVShow.vue")
    },
    {
      path: "/v-bind",
      name: "VBind",
      component: () => import("../views/VBind.vue")
    },
    {
      path: "/v-on",
      name: "VOn",
      component: () => import("../views/VOn.vue")
    },
    {
      path: "/props",
      name: "Props",
      component: () => import("../views/Props.vue")
    },
    {
      path: "/emit",
      name: "Emit",
      component: () => import("../views/Emit.vue")
    },
    {
      path: "/provide&inject",
      name: "ProvideAndInject",
      component: () => import("../views/ProvideAndInject.vue")
    },
    {
      path: "/watch&computed",
      name: "watchAndComputed",
      component: () => import("../views/watchAndComputed.vue")
    },
    {
      // localhost:5173/vue-router/com-c
      path: "/vue-router",
      name: "VueRouter",
      component: () => import("../views/VueRouter.vue"),
      // 子路由
      children: [
        {
          path: "com-c",
          component: () => import("../components/ComC.vue")
        },
        {
          path: "com-d",
          component: ComD
        }
      ]
    },
    {
      path: "/router-push",
      name: "RouterPush",
      component: () => import("../views/RouterPush.vue")
    },
    {
      path: "/router-props/:propText",
      name: "RouterProps",
      component: () => import("../views/RouterProps.vue"),
      props: true
    },
    {
      path: "/file-reader",
      name: "FileReader",
      component: () => import("../views/FileReader.vue")
    },
  ]
})

export default router
