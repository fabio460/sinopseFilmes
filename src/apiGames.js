
const ApiGame =  {
   get:async ()=> {
       let fet =await fetch(`https://api.themoviedb.org/3/movie/100?api_key=c67c46d798a0c30ed3e1f1e53bd6e0f2`);
       let json =await fet.json();
       return json;
   }
};
export default ApiGame;