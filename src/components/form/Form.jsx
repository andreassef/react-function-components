import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function Form({handleCpfValidate}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}});

    return(
        <form
            onSubmit={(event) => {
                event.preventDefault();
                console.log(nome, sobrenome, novidades);
            }}
        >
            <TextField 
                onChange={(event) => {
                    setNome(event.target.value)
                }} 
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
                onBlur={(event) => {
                    const isValid = handleCpfValidate(cpf);
                    setErros({cpf: isValid});
                }}
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

            <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
        </form>
    )
}

export default Form;