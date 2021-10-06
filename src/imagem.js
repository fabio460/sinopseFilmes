import React from "react";

function Imagem({image,titulo,id,name,objeto}){
    
    const pegarObjeto = (e)=>{
     document.querySelector('.modal').style.display='flex';
     let imagemCompleta = 'https://image.tmdb.org/t/p/w500'+objeto.backdrop_path;
     let fotoModal = document.querySelector('.modalBody');
     document.querySelector('.sinopse').innerHTML=objeto.overview;
     document.querySelector('.tituloModal').innerHTML='<h1>'+objeto.title+'</h1>';
     document.querySelector('.dataModal').innerHTML='Data de lançamento: '+objeto.release_date;
     fotoModal.style.backgroundImage=`url(${imagemCompleta})`;
     console.log(objeto)
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