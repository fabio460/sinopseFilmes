
const ApiGame =  {
   get:async (endpoins)=> {
       let fet =await fetch(`https://api.themoviedb.org/3/movie/${endpoins}?api_key=c67c46d798a0c30ed3e1f1e53bd6e0f2`);
       let json =await fet.json();
       return json;
   },
   noticia:async ()=>{
    fetch("https://community-hacker-news-v1.p.rapidapi.com/updates.json?print=pretty", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-hacker-news-v1.p.rapidapi.com",
            "x-rapidapi-key": "06fd7a4a17msh212607c1bb55bb1p1d92ebjsn2362ecf5e5d8"
        }
    })
    .then(response => {
       return response.json()
    })
    .catch(err => {
        console.error(err);
    });
   }
};
export default ApiGame;