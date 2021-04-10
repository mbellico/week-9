var registerForm = document.getElementById ('formContainer');
var inputs = document.querySelectorAll('.input');
var fName = document.querySelector ('#fullName');
var fullNameAlert = document.getElementsByClassName('fullNameAlert');
var email = document.querySelector('#email');
var emailAlert = document.getElementsByClassName('emailAlert');
var password = document.querySelector('#password');
var passwordAlert = document.getElementsByClassName('passwordAlert');
var rPassword = document.querySelector('#repeatPassword');
var rPasswordAlert = document.getElementsByClassName('repeatPassAlert');

var regExp = {
    fullName: /^[a-zA-ZáéíóúÑñ\s]+$/,
    eMail: /^[a-zA-Z0-9._-]@[a-zA-Z0-9._-]\.[a-zA-Z]$/,
    pass: /(^[a-zA-Z0-9]{8,})+$/,
}

var fields = {
    fullName: false;
    email: false;
    password: false;
    rPassword: false;
}

var formValidation = function(e) {
    switch (e.target.name) {
        case "fullName":
            if (regExp.fullName.test(e.target.value)) {
            fName.style.color = 'green';
            fields [fullName] = true;
            } else {
            fullNameAlert.style.display= 'block';
            fields [fullName] = false;
            }
        break;
        case "email":
            if (regExp.eMail.test(e.target.value)) {
            password.style.color = 'green';
            fields [email] = true;
            } else {
            emailAlert.style.display= 'block';
            fields [email] = false;
            }
        break;
    }
        case "password":
            if (regExp.pass.test(e.target.value)) {
            password.style.color = 'green';
            fields [password] = true;
            } else {
            passwordAlert.style.display= 'block';
            fields [password] = false;
            }
        break;
    }
        case "rPassword":
            if (e.target.value == password.value) {
            rPassword.style.color = 'green';
            fields [rPassword] = true;
            } else {
            rPasswordAlert.style.display= 'block';
            fields [rPsassword] = false;
        }
        break;
}

inputs.forEach(function (input) {
addEventListener('blur', validateForm);
input.addEventListener('focus', focusForm);
)};

form.addEventListener('submit', function(e) {
    e.preventDefault ();
}
