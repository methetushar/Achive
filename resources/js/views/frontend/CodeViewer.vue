<template>
        <v-container fill-height>
            <v-layout align-center>
                <v-flex>
                    <h3 class="display-3 text-capitalize">{{ datas.title}}</h3>
                    <p class="subheading mt-3">{{datas.description}}</p>
                    <v-divider class="my-3"></v-divider>

                    <codemirror style="height: 500px" v-model="datas.code" :options="cmOption" />
                </v-flex>
            </v-layout>
        </v-container>
<!--    <v-container>-->
<!--        <v-card height="500" replace flat>-->
<!--            <v-card-title class="text-h5 text&#45;&#45;accent-2" >-->
<!--                <v-icon>mdi-xml</v-icon> &nbsp; Example Code-->
<!--            </v-card-title>-->
<!--            <v-divider></v-divider>-->
<!--            <v-card-text >-->
<!--                <v-icon>mdi-pound</v-icon>-->
<!--                <span class="red&#45;&#45;text">{{ textFormater($route.params.slug)}}</span>-->
<!--                <codemirror style="height: 500px" v-model="datas.code" :options="cmOption" />-->
<!--            </v-card-text>-->
<!--        </v-card>-->
<!--    </v-container>-->
</template>

<script>
    export default {
        name: "CodeViewer",
        data(){
            return{
                datas:{},
                cmOption: {
                    tabSize: 4,
                    styleActiveLine: true,
                    lineNumbers: true,
                    line: true,
                    mode: 'text/javascript',
                    lineWrapping: true,
                    theme: "monokai",
                    keyMap: "sublime",
                    matchBrackets: true,
                    foldGutter: true,
                }
            }
        },

        methods:{
            textFormater(text){
                let fText = text
                fText = fText.replace('-',' ');
                fText = fText.toLocaleLowerCase();
                return fText
            },
            getViewData(){
                this.$event.$emit('loading',true)
                axios.get('/get-code/'+this.$route.params.slug).then(res => {this.datas = res.data})
                setTimeout(() => {
                    this.$event.$emit('loading',false)
                },1000)
            }
        },
        watch: {
            $route: {
                handler: "getViewData",
                immediate: true,
            }
        },

        created() {

        }
    }
</script>

<style scoped lang="scss">
    .CodeMirror {
        height: 500px !important;
    }
</style>
