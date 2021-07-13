import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', component:()=>import('./../components/layouts/FrontendLayout'),
        children:[
            { path: '/',name:'home', component:()=>import('./../views/frontend/Home') },
            { path: '/code/:slug',name:'code', component:()=>import('./../views/frontend/CodeViewer') },
        ]
    },
]
const router = new VueRouter({
    routes,
    mode:'history'
})
export  default router
