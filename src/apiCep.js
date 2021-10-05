import React, {  useState } from 'react';
import EnderecoCompleto from './enderecos';
function BuscarCep(){
    const [campo,setCampo]=useState('');
    const [uf,setUf]=useState('rj');
    const [cidade,setCidade]=useState('rio de janeiro');
    const [rua,setRua]=useState('');
    const [Enderecos,setEnderecos]=useState([]);
    const [cep,setCep]=useState([]);

    const buscoRndereco = ()=>{
    fetch(`https://viacep.com.br/ws/${campo}/json/`)
        .then(res=>res.json())
        //.then(resp=>console.log(resp))
        .then(item=>{
            document.querySelector('.rua').innerHTML='Rua: '+item.logradouro;
            document.querySelector('.bairro').innerHTML='Bairro: '+ item.bairro;
            if(item.complemento){
              document.querySelector('.complemento').innerHTML='Complemento: '+item.complemento;
            }else{document.querySelector('.complemento').innerHTML=''}
            document.querySelector('.localidade').innerHTML='Cidade: '+item.localidade;
            document.querySelector('.ddd').innerHTML='ddd: '+item.ddd;
            document.querySelector('.uf').innerHTML='UF: '+item.uf;
            setCep(item)
        })
        
        .catch(res=>alert('cep invalido'));
    }
    
    const buscaCep = ()=>{
        
        fetch(`https://viacep.com.br/ws/${uf}/${cidade}/${rua}/json/`)
          .then(res=>res.json())
          .then(item=>{ 
            setEnderecos(item);
          })
          .catch(res=>{
            alert('endereço invalido');
          });
          
    }
   //{Enderecos.map((item)=>{return <EnderecoCompleto cep={item.cep} logradouro={item.logradouro} localidade={item.localidade} bairro={item.bairro}/>})}
    return<>
        <div className='mainCep'>
            <input type='text' id='cep' onChange={(e)=>{setCampo(e.target.value.replace("-",""))}}/>
            <button onClick={buscoRndereco}>buscar</button>
            <div className='rua'></div>
            <div className='bairro'></div>
            <div className='complemento'></div>
            <div className='localidade'></div>
            <div className='ddd'></div>
            <div className='uf'></div>
        </div>

        <input type='text' placeholder='uf' value={uf} onChange={(e)=>{setUf(e.target.value)}}/>
        <input type='text' placeholder='cidade' value={cidade} onChange={(e)=>{setCidade(e.target.value)}}/>
        <input type='text' placeholder='rua' value={rua} onChange={(e)=>{setRua(e.target.value)}}/>
        <button onClick={buscaCep}>buscar Cep</button>
        {Enderecos.map((item)=>{return <EnderecoCompleto cep={item.cep} logradouro={item.logradouro} localidade={item.localidade} bairro={item.bairro}/>})}
        
    </>
}
export default BuscarCep;