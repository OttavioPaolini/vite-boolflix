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
    <section class="movie">
        <h2>Film</h2>
        <AppFlyer v-for="movie in store.movies" :key="movie.id" :item="movie" />
    </section>
    <section class="series">
        <h2>Serie</h2>
        <AppFlyer v-for="serie in store.series" :key="serie.id" :item="serie" />
    </section>
</main>

</template>

<style>

</style>