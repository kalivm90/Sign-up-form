/* TODO */
document.addEventListener("DOMContentLoaded", () => {
    let password = document.querySelector("#password");
    let confirmPassword = document.querySelector("#confirm-password");
    let submit = document.querySelector("#submit");
    let error = document.querySelector("#error");

    submit.onclick = e => checkPassword();

    function checkPassword() {
        console.log("hello")
        if(password.value != confirmPassword.value) {
            confirmPassword.setCustomValidity("Passwords Don't Match");
            confirmPassword.classList.add("addValidation");
            password.classList.add("addValidation");
            error.textContent = "*Passwords do not match";
        } else {
            confirmPassword.setCustomValidity('');
            confirmPassword.classList.remove("addValidation");
            password.classList.remove("addValidation");
            error.textContent = "";
        }
    }
    // password.onchange = checkPassword;
    confirmPassword.onkeyup = checkPassword;
})