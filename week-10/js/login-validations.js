var formLogin = document.getElementById ('formLogin');
var inputs = document.querySelectorAll('.input');
var email = document.querySelector('#email');
var emailAlert = document.getElementsByClassName('emailAlert');
var password = document.querySelector('#password');
var passwordAlert = document.getElementsByClassName('passwordAlert');
var regExp = {
    eMail: /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9._+-]+\.[a-zA-Z]+$/;
    passWord: /(^[a-zA-Z0-9]{8,})$/;
}
var fields = {
    email: false;
    password: false;
}
var formValidation = function(e) {
    switch (e.target.name) {
        case "eM":
            if (regExp.eMail.test(e.target.value)) {
            email.style.border = '3px solid green';
            fields [email] = true;
            } else {
            emailAlert.style.display= 'block';
            fields [email] = false;
            }
        break;
        case "pW":
            if (regExp.passWord.test(e.target.value)) {
            password.style.border = '3px solid green';
            fields [password] = true;
            } else {
            passwordAlert.style.display= 'block';
            fields [password] = false;
            }
    }
}
var focusForm = function (e) {
    switch (e.target.name) {
        case 'eM':
            email.style.color = 'black';
        break;
        case 'pW':
            password.style.color = "black";
    }
}
inputs.forEach(function (input) {
    input.addEventListener('blur', formValidation);
    input.addEventListener('focus', focusForm);
});
formLogin.addEventListener('submit', function(e) {
    e.preventDefault ();
var button = document.getElementsByClassName('submit');
button.addEventListener('click', validations);
var validations = document.getElementsByClassName('validationFuntions');
if (fields ['email'] && fields ['password']) {
    validations.style.display = 'block';
    validations.innerHTML = 'Your login data is:' + "" + email.value + pass+value;
} else {
    validations.style.display = 'block';
    validations.innerHTML = 'Email or Password values are wrong. Please try again'
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