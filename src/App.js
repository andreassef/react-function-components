import { Fragment } from "react";
import './App.css';
import Form from "./components/form/Form";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import MainForm from "./components/form/MainForm";
import {validateCPF, validatePassword} from "./validators/validators";
import ValidatorsRegister from "./contexts/ValidatorsRegister";

function App() {

  function handleSendForm(data) {
    console.log(data)
  }

  return (
    <Container component="article" maxWidth="sm">
      <Typography align="center" variant="h3" component="h1">Formulário de cadastro</Typography>
      <ValidatorsRegister.Provider value={{cpf: validateCPF, senha: validatePassword}}>
        <MainForm sendForm={handleSendForm} />
      </ValidatorsRegister.Provider>
    </Container>
  );
}

export default App;
