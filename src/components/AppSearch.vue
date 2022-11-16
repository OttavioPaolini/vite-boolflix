<script>
import { store } from '../store';
export default{
    name: "AppSearch",
    data(){
        return{
            store
        }
    }
}

</script>


<template>
    <div>    
        <input @keyup.enter="$emit('searching')" type="search" v-model="store.searchKey">
        <button @click="$emit('searching')"> cerca</button>
    </div>
</template>


<style>

</style>