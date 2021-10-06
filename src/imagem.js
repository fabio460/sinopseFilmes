import React from "react";

function Imagem({image,titulo,item,name}){
  
    return<>
      <div className='fotos'>
            <img src={'https://image.tmdb.org/t/p/w500'+image} alt=''/>
            <h5> {titulo}</h5>
            <h5>{name}</h5>
      </div>
    </>
}
export default Imagem;