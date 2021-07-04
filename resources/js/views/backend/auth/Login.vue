<template>
    <v-app>
        <v-col cols="12" md="5" class="mx-auto">
            <v-card class="pa-3" style="margin-top: 8em;">
                <form @submit.prevent="loginSubmit">
                    <v-card-title class="text-h6 font-weight-regular justify-space-between">
                        <span>Login your account</span>
                    </v-card-title>
                    <v-card-text>
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
                        <v-btn type="submit" color="error">Login</v-btn>
                        <v-spacer></v-spacer>
                        <router-link :to="{name:'signup'}">Create an account</router-link>
                    </v-card-actions>
                </form>
            </v-card>
        </v-col>
        <v-snackbar
            v-model="info"
        >
            {{ message }}

            <template v-slot:action="{ attrs }">
                <v-btn
                    color="pink"
                    text
                    v-bind="attrs"
                    @click="info = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-app>
</template>

<script>
    export default {
        name: "Login",
        data: () => ({
            info: false,
            message: '',
            data: {}
        }),
        methods: {
            loginSubmit() {
                if (this.data.email != '' && this.data.password != '') {
                    axios.post('/login', this.data).then(res => {
                        if (res.status === 200) {
                            this.message = 'Login Success!'
                            this.info = true;
                            setTimeout(() => {
                                this.$router.push({name: 'dashboard'})
                            }, 2000)
                        }
                    })
                    .catch(error => {
                        if (error) {
                            this.message = 'Creadential not match'
                            this.info = true;
                        }
                    })
                }else{
                    this.message = 'Email and Passowrd is required!'
                    this.info = true;
                }
            }
        }
    }
</script>

<style scoped>

</style>
