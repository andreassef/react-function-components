import { Step, Stepper, StepLabel, Typography } from "@material-ui/core";
import React, { Fragment, useState, useEffect } from "react";

import Form from "./Form";
import FormDelivery from "./FormDelivery";
import Login from "./Login";

function MainForm({sendForm}) {
    const [currentComponent, setCurrentComponent] = useState(0);
    const [data, setData] = useState({});

    useEffect(()=> {
        console.log(data)
        if(currentComponent === forms.length - 1) {
            sendForm(data);
        }
    })
    const forms = [
        <Login sendForm={handleDatas} />,
        <Form sendForm={handleDatas} />,
        <FormDelivery sendForm={handleDatas} />,
        <Typography variant="h5">Obrigado pelo cadastro</Typography>
    ]

    function handleDatas(datas) {
        setData({...data, ...datas});
        //console.log('Dados do form principal: ' + data);
        nextStep();
    }

    function nextStep() {
        setCurrentComponent(currentComponent + 1);
    }

    // removemos  switch case para trabalharmos com vetores com o objetivo de deixa o código mais legível
    // function drawComponent(current) {
    //     switch(current) {
    //         case 0:
    //             return <Login sendForm={nextStep} />
    //         case 1:
    //             return <Form sendForm={nextStep} handleCpfValidate={handleCpfValidate} />
    //         case 2:
    //             return <FormDelivery sendForm={sendForm}/>
    //         default:
    //             return <Typography>Error</Typography>
    //     }
    // }

    return(
        <Fragment>
            <Stepper activeStep={currentComponent}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            {forms[currentComponent]}
        </Fragment>
    )
}

export default MainForm;