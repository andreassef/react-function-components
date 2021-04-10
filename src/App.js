import { Fragment } from "react";
import './App.css';
import Form from "./components/form/Form";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import MainForm from "./components/form/MainForm";

function App() {

  function handleSendForm(data) {
    console.log(data)
  }

  function validateCPF(cpf) {
    if(cpf.length !== 11) {
      const objValidate = {
        valido: false,
        texto: "CPF deve ter 11 dígitos"
      };
      return objValidate;
    }else {
      const objValidate = {
        valido: true,
        texto: ""
      };
      return objValidate; 
    }
  }

  return (
    <Container component="article" maxWidth="sm">
      <Typography align="center" variant="h3" component="h1">Formulário de cadastro</Typography>
      <MainForm sendForm={handleSendForm} handleCpfValidate={validateCPF} />
    </Container>
  );
}

export default App;
