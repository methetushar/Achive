<template>
    <v-container class="py-8 px-6" fluid>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title class="text-h5">
                       <v-icon>mdi-format-list-checks</v-icon>  Archive list
                    </v-card-title>
                    <v-row >
                        <v-col
                            v-for="(archive,index)  in archives"
                            :key="index"
                            cols="12"
                            sm="4"
                            class="pa-5">
                            <v-card class="pa-3" outlined tile>
                                <h3>{{archive.title}}</h3>
                                <v-divider></v-divider>
                                <br>
                                <language type="text/html">
                                    <code>
                                        {{archive.code.substring(0,50)+".." }}
                                    </code>
                                </language>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Archives",
        data(){
            return{
                archives:{}
            }
        },
        created() {
            axios.get('/get-archive').then(res => {this.archives = res.data})
        }
    }
</script>

<style scoped>

</style>
