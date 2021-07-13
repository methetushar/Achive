<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="d-flex flex-row justify-space-between align-center">
                        <img :src="$root.baseurl + '/images/logo1.png'" style="width: 3em" alt="">
                        <h3>Codecamp App</h3>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-col cols="12" md="12">
                <v-text-field
                    @keyup="searchArchive"
                    v-model="searchdata"
                    label="Search"
                    placeholder="What are you like to see"
                    outlined
                    dense
                    append-icon="mdi-magnify"
                ></v-text-field>
            </v-col>
            <v-list nav dense>
                <v-list-item link to="/">
                    <v-list-item-icon>
                        <v-icon>mdi-home-circle-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item v-for="menu in menus" :key="menu.title" link :to="{name:'code',params:{slug:menu.slug}}"  >
                    <v-list-item-icon>
                        <v-icon>mdi-xml</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ menu.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app
            color="white"
            elevate-on-scroll>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>
            <v-main>
            <router-view></router-view>
        </v-main>
        <v-overlay :value="loading">
            <v-progress-circular
                indeterminate
                size="64"
            ></v-progress-circular>
        </v-overlay>
    </v-app>
</template>

<script>
    export default {
        name: "FrontendLayout",
        data(){
            return{
                loading:true,
                drawer:null,
                menus: [],
                searchdata:null,
            }
        },
        methods:{
            asyncData(){
                this.$event.$emit('loading',true)
                axios.get('/get-archive').then(res => {
                    this.menus = res.data
                    setTimeout(() => {
                        this.$event.$emit('loading',false)
                    },1000)
                })
            },
            async searchArchive(){
                await axios.get('/search-menus',{params:{key:this.searchdata}}).then(res => {
                    this.menus = res.data
                })
            }
        },
        created() {
            this.$event.$on('loading',playload => {
                this.loading = playload
            })

            this.asyncData();
        }
    }
</script>

<style scoped>

</style>
