import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/admin/login',name:'signin', component:() => import('./../views/backend/auth/Login')},
    { path: '/admin/sign-up',name:'signup', component:() => import('./../views/backend/auth/Registration')},
    { path: '/admin/dashboard', component:() => import('./../components/layouts/BackendLayout'),
        children:[
            {path:'/admin/dashboard',name:'dashboard',component:() => import('../views/backend/archive/Archives')},
            {path:'/admin/archive-create',name:'archive.create',component:() => import('../views/backend/archive/AddArchive')}
        ]
    },
]
const router = new VueRouter({
    routes,
    mode:'history'
})
export  default router
