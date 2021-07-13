require('./bootstrap');
require('./helpers/plugins');
window.Vue = require('vue').default;
import vuetify from './vuetify';


import router from "./router/frontend_routes";
Vue.component('frontend-app', require('./views/app/FrontendApp').default);

const eventBus = new Vue
Vue.prototype.$event = eventBus

const app = new Vue({
    el: '#app',
    vuetify,
    router,
    data(){
        return{
            baseurl:laravel.url,
        }
    }
});
