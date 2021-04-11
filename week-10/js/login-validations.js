var formLogin = document.getElementById ('formLogin');
var inputs = document.querySelectorAll('.input');
var email = document.querySelector('#email');
var emailAlert = document.getElementsByClassName('emailAlert');
var password = document.querySelector('#password');
var passwordAlert = document.getElementsByClassName('passwordAlert');

var regExp = {
    email: /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9._+-]+\.[a-zA-Z]+$/;
    password: /(^[a-zA-Z0-9]{8,})$/;
}

var fields = {
    email: false;
    password: false;
}

var formValidation = function(e) {
    switch (e.target.name) {
        case "eMail":
            if (regExp.email.test(e.target.value)) {
            email.style.border = '3px solid green';
            fields [email] = true;
            } else {
            emailAlert.style.display= 'block';
            fields [email] = false;
            }
        break;
        case "passw":
            if (regExp.password.test(e.target.value)) {
            password.style.border = '3px solid green';
            fields [password] = true;
            } else {
            passwordAlert.style.display= 'block';
            fields [password] = false;
            }
        break;
    }
}

var focusForm = function (e) {
    switch (e.target.name) {
        case 'eMail':
            email.style.color = 'black';
        break;
        case 'passw':
            password.style.color = "black";
        break;
    }
}


inputs.forEach(function (input) {
    input.addEventListener('blur', formValidation);
    input.addEventListener('focus', focusForm);
});

formLogin.addEventListener('submit', function(e) {
    e.preventDefault ();
})

var button = document.getElementsByClassName('submit');
button.addEventListener('click', validations)

var validations = document.getElementsByClassName('validationFuntions');
if (fields ['email'] && fields ['password']) {
    validations.style.display = 'block';
    validations.textContent = 'Your login data is:' + "" + email.value + pass+value;
} else {
    validations.style.display = 'block';
    validations.textContent = 'Email or Password values are wrong. Please try again'
})



