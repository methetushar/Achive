<template>
    <v-app>
        <v-col cols="12" md="5" class="mx-auto">
            <v-card class="pa-4" style="margin-top: 8em;">
                <form @submit.prevent="accountSubmit">
                    <v-card-title class="text-h6 font-weight-regular justify-space-between">
                        <span>Create a new account</span>
                    </v-card-title>
                    <v-card-text>
                        <v-text-field label="Name" type="text" v-model="data.name"></v-text-field>
                        <v-text-field
                            label="Email"
                            type="email"
                            v-model="data.email"
                        ></v-text-field>
                        <v-text-field
                            label="Password"
                            v-model="data.password"
                            type="password"
                        ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn type="submit" color="error">Create account</v-btn>
                        <v-spacer></v-spacer>
                        <router-link :to="{name:'signin'}">Sign in</router-link>
                    </v-card-actions>
                </form>
            </v-card>
        </v-col>
    </v-app>
</template>

<script>
    export default {
        name: "Registration",
        data: () => ({
            step: 1,
            data:{}
        }),
        methods:{
            accountSubmit(){
                axios.post('/registration',this.data).then(res => {
                    if (res === 200){
                        this.message = true;
                        setTimeout(()=>{
                            this.$router.push({name:'dashboard'})
                        },2000)
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
