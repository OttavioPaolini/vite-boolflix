<script >
import axios from 'axios';

import AppSearch from './components/AppSearch.vue';
import AppMain from './components/AppMain.vue';
import {store} from './store'


export default {
    components: {
        AppSearch,
        AppMain,
    },

    data(){
        return {
            store
        }
    },
    methods: {
        findResearch(){
            this.movieSearch()
            this.serieSearch()
        },
        movieSearch(){
            axios
            .get(`${this.store.apiMovieURL}?api_key=${this.store.apiKey}&query=${this.store.searchKey}`).then((resp) =>{
               
                this.store.movies = resp.data.results;
                console.log(this.store.movies,"film");
      })
    },
        serieSearch(){
            axios
            .get(`${this.store.apiSeriesURL}?api_key=${this.store.apiKey}&query=${this.store.searchKey}`).then((resp)=>{
                
                this.store.series = resp.data.results;
                console.log(this.store.series, "serie");
            })
        }
        }
}
   
</script>

<template>
<AppSearch @searching = "findResearch"/>
<AppMain />
</template>

<style lang="scss">
@use "./style/general.scss" as *;

</style>
