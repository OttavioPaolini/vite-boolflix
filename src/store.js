import{ reactive } from "vue";

export const store = reactive({
    apiMovieURL: "https://api.themoviedb.org/3/search/movie",
    apiSeriesURL: "https://api.themoviedb.org/3/search/tv",
    apiKey: "46d819489dd1e0d4bf1ece62c8046fcd",
    searchKey:"",
    loading: false,
    movies:[],
    series:[],
})