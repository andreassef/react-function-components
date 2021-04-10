import React, { Fragment } from "react";

import Form from "./Form";
import FormDelivery from "./FormDelivery";
import Login from "./Login";

function MainForm({handleCpfValidate}) {

    return(
        <Fragment>
            <Form handleCpfValidate={handleCpfValidate} />
            <Login />
            <FormDelivery />
        </Fragment>
    )
}

export default MainForm;