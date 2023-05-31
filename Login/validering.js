//her validerer vi på login siden

// Here we validate on the login page

let email = document.forms['form']['email'];
let password = document.forms['form']['password'];

let email_error = document.getElementById('email_error');
let pass_error = document.getElementById('pass_error');

email.addEventListener('input', email_Verify);
password.addEventListener('input', pass_Verify);

function validated() {
    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }

    if (password.value.length < 6) {
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }

    return true; // Added return statement for successful validation
}

function email_Verify() {
    if (email.value.length >= 8) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
    }

    validated(); // Call validated() to perform overall validation
}

function pass_Verify() {
    if (password.value.length >= 6) {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
    }

    validated(); // Call validated() to perform overall validation
}
