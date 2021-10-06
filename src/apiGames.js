const apiKey='c67c46d798a0c30ed3e1f1e53bd6e0f2';
const base = 'https://api.themoviedb.org/3';
const ApiGame =  {
   get:async (endpoins)=> {
       let fet =await fetch(`${base}/movie/${endpoins}?api_key=${apiKey}`);
       let json =await fet.json();
       return json;
   },
   passandoAgora:async ()=>{
    let req =await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=c67c46d798a0c30ed3e1f1e53bd6e0f2&language=pt-BR&page=1`)
    let j = await req.json();
    return j
   },
   popular:async ()=>{
    let req =await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c67c46d798a0c30ed3e1f1e53bd6e0f2&language=pt-BR&page=1`)
    let j = await req.json();
    return j
   },
   tv:async ()=>{
    let req =await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=c67c46d798a0c30ed3e1f1e53bd6e0f2&language=pt-BR&sort_by=popularity.asc&page=1&include_null_first_air_dates=false&with_watch_monetization_types=free`)
    let j = await req.json();
    return j
   },
   maisVotados:async ()=>{
    let req =await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=c67c46d798a0c30ed3e1f1e53bd6e0f2&language=pt-BR&page=1`)
    let j = await req.json();
    return j
   },
    proximos:async ()=>{
    let req =await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=c67c46d798a0c30ed3e1f1e53bd6e0f2&language=pt-BR&page=1`)
    let j = await req.json();
    return j
   },
   buscar:async (endpoint)=>{
    let req =await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c67c46d798a0c30ed3e1f1e53bd6e0f2&query=${endpoint}`)
    let j = await req.json();
    return j
   },
};
export default ApiGame;