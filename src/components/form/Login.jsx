import { Button, TextField } from "@material-ui/core";
import React, { useState, useContext } from "react";
import ValidatorsRegister from "../../contexts/ValidatorsRegister";
import useErros from "../../hooks/useErros";

function Login({sendForm}) {
    const validators = useContext(ValidatorsRegister);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, inputValidate] = useErros(validators);

   



    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            if(erros.senha.valido){
                sendForm({email, senha});
            }
        }}>
            <TextField 
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value)
                }}
                name="email"
                id="email" 
                label="email" 
                type="email" 
                variant="outlined" 
                margin="normal" 
                fullWidth
                required />
            <TextField 
                value={senha}
                onChange={(event) => {
                    setSenha(event.target.value)
                }}
                onBlur={inputValidate}
                error = {!erros.senha.valido}
                helperText={erros.senha.texto}
                name="senha"
                id="senha" 
                label="senha" 
                type="password" 
                variant="outlined" 
                margin="normal" 
                fullWidth
                required />
            <Button 
                variant="contained" 
                color="primary" 
                type="submit"
            >
                Entrar
            </Button>
        </form>
    );
}

export default Login;