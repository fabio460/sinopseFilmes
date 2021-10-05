
import './App.css';
import React, { useEffect, useState } from 'react';
import Imagem from './imagem';
import ApiGame from './apiGames';
//import ApiGame from './apiGames';
//import ApiGame from './apiGames';

 
 function  App() {
  const [lista,setLista]=useState([]);
  useEffect( () => {    
   async function carregar(){
      var obj =[];
      for(let i = 100; i <= 120;i++){
        let item =await ApiGame.get(i);
        obj.push(item) 
      }
      setLista(obj)
      console.log(obj)
    }
    carregar();
  }, []);
  console.log()
  return (
    <>
      <div className='imagens'>
          {lista.map((e,key)=>{
              return <Imagem key={key} image={e.poster_path} titulo={e.original_title} id={e.id} item={e.production_companies}/>
          })}
      </div>
    </>
  );
}

export default App;
