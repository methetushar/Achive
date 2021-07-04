<template>
    <div class="">
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="text-h5 d-flex justify-content-center align-items-center">
                    <img style="width: 3.2em;" :src="$root.baseurl +'/images/logo.png'" alt="">
                    <h2 class="mt-4 light-blue--text">Snippets</h2>
                </v-list-item-title>
                <v-list-item-subtitle class="text-center">
                    For Development
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

        <v-list
            dense
            nav
        >
            <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                :to="item.to"
            >
                <v-list-item-icon>
                    <v-icon color="blue-lighten">{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
        data() {
            return {
                items: [
                    {title: 'Archives', icon: 'mdi-view-dashboard',to:'dashboard'},
                    {title: 'Add Archive', icon: 'mdi-playlist-plus',to: {name:'archive.create'}},
                    {title: 'Others', icon: 'mdi-help-box'},
                ],
            }
        }
    }
</script>

<style scoped>

</style>
