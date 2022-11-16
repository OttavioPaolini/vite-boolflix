<script>
export default {
    name: "AppFlyer",
    props: {
        item: Object
    },
    data(){
        return {
            flags: ['de', 'en', 'fr','it']
        }
    },
    methods: {
        getImgUrl(imgName){
            return new URL (`../assets/img/${imgName}.png`, import.meta.url).href;
        }
    }
}
</script>


<template>
<div>
    <h3>Titolo: {{ item.title }}</h3>
    <h3>Titolo originale: {{item.original_title}}</h3>
    <div>
        <p>Voto: {{ item.vote_average }}</p>

    </div>
    <div>
        <img v-if="flags.includes(item.original_language)" :src="getImgUrl(item.original_language)" alt="">
        <p v-else>Lingua: {{item.original_language}}</p>
    </div>
</div>

</template>

<style>

</style>