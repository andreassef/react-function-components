import React from 'react';

const ValidatorsRegister = React.createContext({
    cpf: noValidations,
    senha: noValidations,
    nome: noValidations
});

function noValidations(datas) {
    console.log(datas);
    return {valido:true, texto: ""}
}

export default ValidatorsRegister;