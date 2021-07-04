import Vue from 'vue'
import Vuetify from 'vuetify'
import '@mdi/font/css/materialdesignicons.min.css';
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {}

export default new Vuetify({
    opts,
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
})
