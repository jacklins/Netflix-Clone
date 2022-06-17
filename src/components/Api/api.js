// Requisições

const APIKEY = "3dcb79cfc4db95f101924379ba43437c";
const APIBASE = "https://api.themoviedb.org/3";

const basicFetch = async ( endpoint) => {
    const req = await fetch(`${APIBASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicFetch(`/discover/tv?with_networks=213&language=pt-BR&api_key=${APIKEY}`)
            },

            {
                slug: 'trending',
                title: 'Recomendados',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${APIKEY}`)
            }
,
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${APIKEY}`)
            },

            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${APIKEY}`)
            },

            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${APIKEY}`)
            },

            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${APIKEY}`)
            },

             {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${APIKEY}`)
            },

            {
                slug: 'documentary',
                title: 'Documentário',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${APIKEY}`)
            },
        ];
    },
    getMovieInfo: async(movieId, type) =>{
        let info = {};

        if(movieId){
            switch(type){
                case 'movie':
                    info= await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${APIKEY}`);
                    break;
                    
                case 'tv':
                    info= await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${APIKEY}`);
                    break;

                    default: info=null;
                    break;
            }
        }
        return info;
    }
}