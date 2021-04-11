var formRegister = document.getElementById ('formRegister');
var inputs = document.querySelectorAll('.input');
var fullName = document.querySelector ('#fullName');
var fullNameAlert = document.getElementsByClassName('fullNameAlert');
var email = document.querySelector('#email');
var emailAlert = document.getElementsByClassName('emailAlert');
var password = document.querySelector('#password');
var passwordAlert = document.getElementsByClassName('passwordAlert');
var repeatPassword = document.querySelector('#repeatPassword');
var repeatPasswordAlert = document.getElementsByClassName('repeatPassAlert');
var regExp = {
    fName: /^[a-zA-ZáéíóúÑñ]+(?:\s[a-zA-ZáéíóúÑñ]+)+$/;
    eMail: /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9._+-]+\.[a-zA-Z]+$/;
    passWord: /(^[a-zA-Z0-9]{8,})$/;
}
var fields = {
    fullName: false;
    email: false;
    password: false;
    rPassword: false;
}
var formValidation = function(e) {
    switch (e.target.name) {
        case "nameAndLastName":
            if (regExp.fName.test(e.target.value)) {
            fullName.style.border = '3px solid green';
            fields [fullName] = true;
            } else {
            fullNameAlert.style.display= 'block';
            fields [fullName] = false;
            }
        break;
        case "email":
            if (regExp.eMail.test(e.target.value)) {
            fullName.style.border = '3px solid green';
            fields [email] = true;
            } else {
            emailAlert.style.display= 'block';
            fields [email] = false;
            }
        break;
    }
        case "passwordVerif":
            if (regExp.passWord.test(e.target.value)) {
            fullName.style.border = '3px solid green';
            fields [password] = true;
            } else {
            passwordAlert.style.display= 'block';
            fields [password] = false;
            }
        break;
    }
        case "rPassword":
            if (e.target.value == password.value) {
            fullName.style.border = '3px solid green';
            fields [rPassword] = true;
            } else {
            repeatPasswordAlert.style.display= 'block';
            fields [rPassword] = false;
    }
}

var focusForm = function (e) {
    switch (e.target.name) {
        case "nameAndLastName":
            fullName.style.color = 'black';
        break;
        case "email":
            email.style.color = 'black';
        break;
        case "passwordVerif":
            password.style.color = 'black';
        break;
        case "rPassword":
            repeatPassword.style.color = 'black';
    }
}
inputs.forEach(function (input) {
input.addEventListener('blur', formValidation);
input.addEventListener('focus', focusForm);
});

formRegister.addEventListener('submit', function(e) {
    e.preventDefault ();
    var button = document.getElementById('signIn');
    button.addEventListener('click', validations);
    var validations = document.getElementsByClassName('validationFuntions');
    if (fields ['fullname'] && fields ['email'] && fields ['password'] && fields [repeatPassword]) {
    validations.style.display = 'block';
    validations.innerHTML = 'Registration process successful. Your users data is:' + "" 
    + fullName.value + email.value + password+value;
    } else {
    validations.style.display = 'block';
    validations.innerHTML = 'Registration process failed. Please check your data and try again'
    }
})
async function getEmail(){
    fetch('https://jsonplaceholder.typicode.com/users?email=${email.value}')
    .then(function(response){
        return response.json();
    })
    .then(data => console.log(data))
    .catch()
};
button.onclick = function() {
    getEmail();
};