require('./bootstrap');
require('./helpers/plugins');
window.Vue = require('vue').default;
import vuetify from './vuetify'

import router from "./router/backend_routes";
Vue.component('backend-app', require('./views/app/BackendApp').default);
const app = new Vue({
    el: '#app',
    vuetify,
    router,
    data(){
        return{
            baseurl: laravel.url,
        }
    }
});
