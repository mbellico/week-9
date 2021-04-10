var registerForm = document.getElementById ('formContainer');
var inputs = document.querySelectorAll('.input');
var email = document.querySelector('#email');
var emailAlert = document.getElementsByClassName('emailAlert');
var password = document.querySelector('#password');
var passwordAlert = document.getElementsByClassName('passwordAlert');

var regExp = {
    email: /^[a-zA-Z0-9._-]@[a-zA-Z0-9._-]\.[a-zA-Z]$/,
    password: /(^[a-zA-Z0-9]{8,})+$/,
}

var fields = {
    email: false;
    password: false;
}

var formValidation = function(e) {
    switch (e.target.name) {
        case "email":
            if (regExp.eMail.test(e.target.value)) {
            email.style.border = '3px. solid green';
            fields [email] = true;
            } else {
            emailAlert.style.display= 'block';
            fields [email] = false;
            }
        break;
    }
        case "password":
            if (regExp.pass.test(e.target.value)) {
            password.style.border = '3px. solid green';
            fields [password] = true;
            } else {
            passwordAlert.style.display= 'block';S
            fields [password] = false;
            }
        break;
    }
}

inputs.forEach(function (inputs) {
addEventListener('blur', validateForm);
input.addEventListener('focus', focusForm);
)};

formValidation.addEventListener('submit', function(e) {
    e.preventDefault ();
}
