
import './App.css';
import React, { useEffect, useState } from 'react';
import Imagem from './imagem';
import ApiGame from './apiGames';
//import ApiGame from './apiGames';
//import ApiGame from './apiGames';

 
 function  App() {
  const [lista,setLista]=useState([]);
  const [busca,setBusca]=useState();
  useEffect( () => {    
   async function carregar(){
      var obj =[];
      for(let i = 300; i <= 340;i++){
        let item =await ApiGame.get(i);
        obj.push(item) 
      }
      setLista(obj)
      
    }
    carregar();
  }, []);
  
  const recentes =async ()=>{
    let item =await ApiGame.recentes()
    console.log(item.results)
    setLista(item.results)
  }
  const popular =async ()=>{
    let item =await ApiGame.popular()
    setLista(item.results)
    console.log(item.results)

  }
  const proximos =async ()=>{
    let item =await ApiGame.proximos()
    setLista(item.results)
    console.log(item.results)

  }
  const maisVotados =async ()=>{
    let item =await ApiGame.maisVotados()
    setLista(item.results)
    console.log(item.results)

  }
  const buscar = async()=>{
    let item =await ApiGame.buscar(busca)
    setLista(item.results)
    console.log(item.results)
  }
  return (
    <>
     <header>
        <div  onClick={proximos}>proximos</div>
        <div onClick={maisVotados}>popular</div>
        <div onClick={recentes}>recentes</div>
        <div onClick={popular}>maisVotados</div>
        <div>
          <input type='text' value={busca} onChange={(e)=>{setBusca(e.target.value)}}/>
          <button onClick={buscar}>buscar</button>
        </div>
     </header>
      <div className='imagens'>
          
          {lista.map((e,key)=>{
              return <Imagem key={key} image={e.poster_path} titulo={e.original_title} name={e.name} original_name={e.original_name} id={e.id} item={e.production_companies}/>
          })}
      </div>
    </>
  );
}

export default App;
