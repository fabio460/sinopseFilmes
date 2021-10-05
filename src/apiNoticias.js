
const apiManchetes = {
  get:async (endpoint)=>{
    let req = await fetch(`https://newsapi.org/v2/everything?q=${endpoint}&apiKey=9abace8756a1460a8c878e789e08a049`);
    let json =await req.json();
    return json.articles;
  },
  teste:async ()=>{
    let req = await fetch(`https://laravel-api-teste3.herokuapp.com/api/tarefa`);
    let json =await req.json();
    return json;  
   
  }
}
export default apiManchetes;