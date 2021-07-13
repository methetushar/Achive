<template>
    <v-container fill-height>
        <v-layout align-center>
            <v-flex>
                <h3 class="display-3">Welcome to Codecamp App</h3>

                <span class="subheading">Structural coding is a question-based code that acts as a labelling and index device, allowing researchers to quickly access data likely to be relevant to a particular analysis from a larger data set. It's used as a categorisation technique for further qualitative data analysis</span>

                <v-divider class="my-3"></v-divider>
                <v-col cols="12" md="12">
                    <img style="width: 100%;" class="" :src="$root.baseurl + '/images/Backend-Development.svg'" alt="">
                </v-col>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
