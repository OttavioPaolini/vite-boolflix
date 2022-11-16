<script>
import { store } from "../store";
import AppFlyer from "./AppFlyer.vue";
export default {
    name: "AppMain",
    components: {
        AppFlyer
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
<main>
    <section>
        <h1>Film</h1>
        <AppFlyer v-for="movie in store.movies" :key="movie.id" :item="movie" />
    </section>
</main>

</template>

<style>

</style>