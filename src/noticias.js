import React, {  useState }  from "react";
import apiManchetes from "./apiNoticias";
import Noticia from "./noticia";
function Noticias(){
    const [list,setLista]=useState([]);
    const [texto,setTexto]=useState();
    const listar =async ()=>{
        const l = await apiManchetes.get(texto);
        setLista(l);
       
    }
    
    console.log(list);
    return <>
        <input type='text' value={texto} onChange={(e)=>{setTexto(e.target.value)}}/>
        <button onClick={listar}>pesquisar</button>
        {list.map((item)=>{
           return <Noticia title={item.title} urlToImage={item.urlToImage}/>
        })}
    </>
}
export default Noticias;