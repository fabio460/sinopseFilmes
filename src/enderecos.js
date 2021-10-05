import React from "react";
function EnderecoCompleto({logradouro,cep,bairro,localidade}){
    return<>
       <h1>endereço</h1>
       <div className='cep'>{cep}</div>
       <div className='bairro'>{bairro}</div>
       <div className='localidade'>{localidade}</div>
       <div className='logradouro'>{logradouro}</div>
    </>
}
export default EnderecoCompleto;