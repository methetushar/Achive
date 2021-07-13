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
                        <div class="message red--text">{{ validation.firstError('data.email') }}</div>
                        <v-text-field
                            label="Password"
                            v-model="data.password"
                            type="password"
                        ></v-text-field>
                        <div class="message red--text">{{ validation.firstError('data.password') }}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            type="submit"
                            class="ma-2"
                            :loading="loading"
                            :disabled="loading"
                            color="error"
                            @click="loader = 'loading'"
                        >
                            Login
                            <template v-slot:loader>
                                <span class="custom-loader">
                                  <v-icon light>mdi-cached</v-icon>
                                </span>
                            </template>
                        </v-btn>
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
    import Vue from 'vue';
    import SimpleVueValidation from 'simple-vue-validator';
    const Validator = SimpleVueValidation.Validator;
    Vue.use(SimpleVueValidation);
    export default {
        name: "Login",
        data: () => ({
            info: false,
            loading: false,
            message: '',
            data: {},
            errors: {}
        }),
        methods: {
            loginSubmit() {
                this.$validate()
                    .then(res => {
                        if (res) {
                            this.loading = true
                            axios.post('/login', this.data).then(res => {
                                setTimeout(()=>{
                                    this.loading =false
                                },1000)
                                if (res.status === 200) {
                                    this.message = 'Login Success!'
                                    this.info = true;
                                    setTimeout(() => {
                                        this.$router.push({name: 'dashboard'})
                                    }, 2000)
                                }
                            }).catch(error => {
                                if (error) {
                                    this.message = 'Creadential not match'
                                    this.info = true;
                                }
                            })
                        }
                    });
            }
        },
        validators: {
            'data.email': function(value = null) {
                return Validator.value(value).required('Email is required!').email();
            },
            'data.password': function(value = null) {
                return Validator.value(value).required('Password is required!').minLength(6);
            }
        }
    }
</script>

<style>
    .custom-loader {
        animation: loader 1s infinite;
        display: flex;
    }
    @-moz-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @-webkit-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @-o-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
