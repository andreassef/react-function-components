import React, { useState } from 'react';

function useErros(validations) {
    const initalState = createInitialState(validations);
    const [erros, setErros] = useState(initalState);

    function inputValidate(event) {
        const { name, value } = event.target;
        const newState = { ...erros };
        newState[name] = validations[name](value);
        setErros(newState);
    }

    return [erros, inputValidate];
}

function createInitialState(validations) {
    const initialState = {};
    for(let index in validations) {
        initialState[index]= {valido: true, texto: ""};
    };
    return initialState;
}

export default useErros;