import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import ValidatorsRegister from "../../contexts/ValidatorsRegister";
import useErros from '../../hooks/useErros';

function Form({sendForm}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const validators = useContext(ValidatorsRegister);
    const [erros, inputValidate] = useErros(validators);

    function isValidToSend() {
        for(let keys in erros) {
            if (!erros[keys].valido) {
                return false;
            }
        }
        return true;
    }

    return(
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if(isValidToSend()) {
                    sendForm({nome, sobrenome, cpf, promocoes, novidades});
                }
            }}
        >
            <TextField 
                onChange={(event) => {
                    setNome(event.target.value)
                }}
                name="nome" 
                id="nome" 
                label="Nome" 
                variant="outlined" 
                margin="normal" 
                fullWidth
            />

            <TextField 
                onChange={(event) => {
                    setSobrenome(event.target.value)
                }}
                name="sobrenome" 
                id="sobrenome" 
                label="Sobrenome" 
                variant="outlined" 
                margin="normal" 
                fullWidth
            />
            
            <TextField 
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                onBlur={inputValidate}
                name="cpf"
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf" 
                label="CPF" 
                variant="outlined" 
                margin="normal" 
                fullWidth
            />

            <FormControlLabel
                label="Promoções" 
                control={<Switch onChange={(event) => {
                    setPromocoes(event.target.checked)
                }} 
                name="promocoes" 
                checked={promocoes} 
                color="primary" />} 
            />

            <FormControlLabel 
                label="Novidades" 
                control={<Switch 
                onChange={(event) => {
                    setNovidades(event.target.checked)
                }}
                name="novidades" 
                checked={novidades} 
                color="primary" />} 
            />

            <Button variant="contained" color="primary" type="submit">Próximo</Button>
        </form>
    )
}

export default Form;