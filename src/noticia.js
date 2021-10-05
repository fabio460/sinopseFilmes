import React from "react";

function Noticia({urlToImage,title,description,content,author}){
    return <>
        <div className='bloco_noticia'>
           <img src={urlToImage} alt=''/>
           <h1>{title}</h1>
           
        </div>
    </>
}
export default Noticia;