import React from 'react';
import { Button, TextField } from "@material-ui/core";

function FormDelivery() {
    return (
        <form>
            <TextField
                id="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
            />

            <TextField
                id="endereco"
                label="Endereço"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                id="numero"
                label="Numero"
                type="number"
                variant="outlined"
                margin="normal"
            />

            <TextField
                id="estado"
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"
            />

            <TextField
                id="cidade"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
            />

            <Button variant="contained" color="primary" type="submit" fullWidth>Finalizar cadastro</Button>
        </form>
    );
}

export default FormDelivery;