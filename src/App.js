
import './App.css';
import React, { useEffect, useState } from 'react';
import Imagem from './imagem';
import ApiGame from './apiGames';
import lupa from './lupa.png'

 
 function  App() {
  const [lista,setLista]=useState([]);
  const [busca,setBusca]=useState();
  useEffect( () => {    
   async function carregar(){
      let item =await ApiGame.popular()
      setLista(item.results)
    }
    carregar();
  }, []);
  
  const tv =async ()=>{
    let item =await ApiGame.tv()
    console.log(item.results)
    setLista(item.results)
  }
  const passandoAgora =async ()=>{
    let item =await ApiGame.passandoAgora()
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
    if(busca){
      let item =await ApiGame.buscar(busca)
      setLista(item.results)
      console.log(item.results)
    }
  }
  return (
    <>
     <header>
        <div className='listaMenu'>
            <div onClick={proximos}>Proximos</div>
            <div onClick={maisVotados}>Popular</div>
            <div onClick={tv}>TVs</div>
            <div onClick={passandoAgora}>PassandoAgora</div>
        </div>
        <div className='form'>
          <input type='text' value={busca} onChange={(e)=>{setBusca(e.target.value)}}/>
          <div className='lupa' onClick={buscar}><img src={lupa} alt=''/></div>
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
