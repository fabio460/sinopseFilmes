import React from "react";

function Imagem({foto,title,id}){
    return<>
      <div className='fotos'>
            <img src={foto} alt=''/>
            <div>foto:{id}</div>
            <h5> {title}</h5>
            
      </div>
    </>
}
export default Imagem;