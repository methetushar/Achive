<template>
    <div>
        <v-form @submit.prevent="submitArchive">
            <v-container fluid class="py-8 px-6">
                <v-card class="pa-5">
                    <v-card-title class="text-h5">
                        <v-icon>mdi-playlist-plus</v-icon>
                        Add New Archive
                    </v-card-title>
                    <v-row>
                        <v-col cols="12" md="8">
                            <v-text-field
                                v-model="data.title"
                                label="Title"
                                outlined
                                clearable
                                dense
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12">
                            <codemirror v-model="data.code" :options="cmOption" />
                        </v-col>
                        <v-col cols="12" md="12">
                            <v-textarea
                                outlined
                                name="input-7-2"
                                label="Description"
                                v-model="data.description"
                            ></v-textarea>
                            <p><span class="red--text">{{ errors}}</span></p>
                        </v-col>
                        <v-btn
                            class="ma-2"
                            color="info"
                            type="submit"
                        >
                            Submit
                        </v-btn>
                    </v-row>
                </v-card>
            </v-container>
        </v-form>
        <v-snackbar v-model="snackbar">
            Archive Created Successful!
            <template v-slot:action="{ attrs }">
                <v-btn
                    color="pink"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
    export default {
        name: "AddArchive",
        data() {
            return {
                loading: null,
                data: {title: null, code: null},
                errors: '',
                snackbar:false,
                cmOption: {
                    tabSize: 4,
                    styleActiveLine: true,
                    lineNumbers: true,
                    line: true,
                    mode: 'text/javascript',
                    lineWrapping: true,
                    theme: "monokai",
                }
            }
        },
        methods: {
            submitArchive() {
                if (this.data.title == null && this.data.code == null) {
                    this.errors = 'Those field is required!'
                } else {
                    axios.post('/store-archive', this.data).then(res => {
                        if (res.status === 200) {
                            this.snackbar = true
                            setTimeout(() => {
                                this.$router.push({name:'dashboard'})
                            },300)
                        }
                    })
                }
            }
        },

    }
</script>

<style scoped>

</style>
