import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/',name:'home', component:()=>import('./../components/layouts/FrontendLayout'),
        children:[
            { path: '/code/:slug',name:'code', component:()=>import('./../views/frontend/CodeViewer') },
        ]
    },
]
const router = new VueRouter({
    routes,
    mode:'history'
})
export  default router
