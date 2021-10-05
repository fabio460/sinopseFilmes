import React from "react";
function Treinar(){
    
    const [texto,setTexto]=useState([])
    
    var arr =[
      {nome:'fabio',idade:39},
      {nome:'ana', idade:40}
    ]   
    useEffect(async ()=>{
      let ap= await api.get();
      let obj = ap[Symbol.iterator]();
        setTexto(obj);
  
        
    },[])
    const click =()=>{
      console.log(texto.next().value.url);
      let img= document.createElement('img');
      document.getElementById('users').appendChild(img);
      img.setAttribute('src',texto.next().value.thumbnailUrl);
    }
    return<>
        <button onClick={click}>clicar aqui</button>
      <div id='users' className="meuApp">
         
      </div>
    </>
}
export default Treinar;