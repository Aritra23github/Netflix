
export const validateForm = ( email, password ) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    let errorMessage = {
        emailMsg: "",
        passwordMsg: "",
    };

    if (!isPasswordValid) errorMessage.passwordMsg = "Password is not valid";
    if (!isEmailValid) errorMessage.emailMsg = "Email is not valid";

    return errorMessage;
}