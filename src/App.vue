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

            axios
            .get(`${this.store.apiMovieURL}?api_key=${this.store.apiKey}&query=${this.store.searchKey}`).then((resp) =>{
                console.log(resp.data.results);
                this.store.movies = resp.data.results;
                console.log(this.store.movies);

            })
        }
    }
}
   
</script>

<template>
<AppSearch @searching = "findResearch"/>
<AppMain />
</template>

<style >

</style>
