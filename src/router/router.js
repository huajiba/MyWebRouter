// 路由的配置
import { createRouter, createWebHistory} from "vue-router"
// 导入组件
import GuideVue from '../components/Guide.vue'
import ApiVue from '../components/API.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // 路由表
    routes:[
        {paht:'/',redirect:'/guide'},
        {path:'/guide',name:'Guide',component:GuideVue},
        {path:'/api',name:'API',component:ApiVue}
    ],
    linkExactActiveClass:'active'
});
export default router;