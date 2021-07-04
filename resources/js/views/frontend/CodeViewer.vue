<template>
    <v-container>
        <v-card height="500" replace flat>
            <v-card-title class="text-h5 text--accent-2" >
                <v-icon>mdi-xml</v-icon> &nbsp; Example Code
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text >
                <v-icon>mdi-pound</v-icon>
                <span class="red--text">{{ textFormater($route.params.slug)}}</span>
                <codemirror style="height: 500px" v-model="datas.code" :options="cmOption" />
            </v-card-text>
        </v-card>
    </v-container>
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
            }
        },

        created() {
            axios.get('/get-code/'+this.$route.params.slug).then(res => {this.datas = res.data})
        }
    }
</script>

<style scoped lang="scss">
    .CodeMirror {
        height: 500px !important;
    }
</style>
