function validateCPF(cpf) {
    if (cpf.length !== 11) {
        const objValidate = {
            valido: false,
            texto: "CPF deve ter 11 dígitos"
        };
        return objValidate;
    } else {
        const objValidate = {
            valido: true,
            texto: ""
        };
        return objValidate;
    }
}

function validatePassword(password) {
    if (password.length < 4 || password.length > 10) {
        const objValidate = {
            valido: false,
            texto: "A senha deve ter de 4 a 10 dígitos"
        };
        return objValidate;
    } else {
        const objValidate = {
            valido: true,
            texto: ""
        };
        return objValidate;
    }
}

export {validateCPF, validatePassword};