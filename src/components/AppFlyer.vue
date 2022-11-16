<script>
export default {
    name: "AppFlyer",
    props: {
        item: Object
    },
    data(){
        return {
            flags: ['de', 'en', 'fr','it', 'ja']
        }
    },
    methods: {
        getImgUrl(imgName){
            return new URL (`../assets/img/${imgName}.png`, import.meta.url).href;
        },
        starsNmb() {
            return Math.ceil(this.item.vote_average / 2);
        }
    }
}
</script>


<template>
    <div>
        <img :src="`https://image.tmdb.org/t/p/w342${item.poster_path}`" alt="">
    </div>
    <div>
        <h3>Titolo: {{ item.title ? item.title : item.name }}</h3>
        <h3>Titolo originale: {{item.original_title ? item.original_title : item.original_name}}</h3>
        <div>            
            <i v-for="n in 5" :key="n" :class="n <= starsNmb ? 'fa-solid' : 'fa-regular'" class="fa-star"></i>
        </div>
        <div>
            <img class="flag" v-if="flags.includes(item.original_language)" :src="getImgUrl(item.original_language)" alt="">
            <p v-else>Lingua: {{item.original_language}}</p>
        </div>
    </div>


</template>

<style lang="scss" scoped>

.flag{
    width: 50px;
}

</style>