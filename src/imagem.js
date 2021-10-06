import React from "react";

function Imagem({image,titulo,id,name,objeto}){
    
    const pegarObjeto = (e)=>{
     document.querySelector('.modal').style.display='flex';
     
     let fotoModal = document.querySelector('.fotoModal');
     let img = document.createElement('img');
     img.setAttribute('src','https://image.tmdb.org/t/p/w500'+objeto.backdrop_path);
     document.querySelector('.sinopse').innerHTML=objeto.overview;
     fotoModal.appendChild(img)
     
     
    }
    return<>
      <div onClick={pegarObjeto} className='fotos'>
            <img src={'https://image.tmdb.org/t/p/w500'+image} alt=''/>
            <h5> {titulo}</h5>
            <h5>{name}</h5>
      </div>
    </>
}
export default Imagem;