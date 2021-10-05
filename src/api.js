

const api = {
    get:async ()=> {
        
        let req =await fetch('https://jsonplaceholder.typicode.com/photos')
        let json = await req.json()  
        return json
       // return await fetch('https://jsonplaceholder.typicode.com/photos')
       //   .then(re=> re.json())
          
    },
    inserir:(titulo,descricao)=>{
        let formdata = new FormData();
        formdata.append('nome',titulo);
        formdata.append('tarefa',descricao);
        fetch('https://laravel-api-teste3.herokuapp.com/api/tarefa',{
            method:'POST',
            body:formdata
        })
        .then(res=>{console.log(res)})
    },
    deletar:(id)=>{
        fetch('https://laravel-api-teste3.herokuapp.com/api/tarefa/'+id,{
            method:'DELETE'
        })
        .then()
    },

    filmes:async ()=>{
       await fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
            "x-rapidapi-key": "f6d844931d994dd77f644b7862b3a579"
        }
        })
        .then(response => {
            console.log(response.json());
            
        })
        .catch(err => {
            console.error(err);
        });
    }


};
export default api;
