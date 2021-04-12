// form
var formRegister = document.getElementById ('formRegister');
var inputs = document.querySelectorAll('.input');
var fields = {
    name: false,
    email:false,
    password: false,
    rPassword: false,
}
// fullName
document.getElementById('fullName').addEventListener('blur', nameValidation);
function nameValidation(){
    var fName = /^[a-zA-ZáéíóúÑñ]+(?:\s[a-zA-ZáéíóúÑñ]+)+$/
    var fullName = document.querySelector('#fullName');
    var fullNameValue = document.querySelector('#fullName').value;
    var fullNameAlert = document.getElementById('nameErrorAlert');
    if(fullNameValue.match(fName)) {
        fullName.style.border = '3px solid green';
        fullNameAlert.style.display = 'none';
        fields['name'] = true;

    }else{
        fullName.style.border = '3px solid red';
        fullNameAlert.style.display = 'block';
        fields['name'] = false;
    }
}
document.getElementById('fullName').addEventListener('onfocus', cleanName);
function cleanName () {
    document.getElementById('nameErrorAlert').className = 'fullNameAlert';
    }
// email
document.getElementById('email').addEventListener('blur', emailValidation);
function emailValidation(){
    var eMail = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9._+-]+\.[a-zA-Z]+$/
    var email = document.querySelector('#email');
    var emailValue = document.querySelector('#email').value;
    var emailAlert = document.getElementById('emailErrorAlert');
    if(emailValue.match(eMail)) {
        email.style.border = '3px solid green';
        emailAlert.style.display = 'none';
        fields['email'] = true;
    }else{
        email.style.border = '3px solid red';
        emailAlert.style.display = 'block';
        fields['name'] = false;
    }
}
document.getElementById('email').addEventListener('onfocus', clearEmail);
function clearEmail(){
}
//password
document.getElementById('password').addEventListener('blur', passwordValidation);
function passwordValidation(){
    var passWord = /(^[a-zA-Z0-9]{8,})$/
    var password = document.querySelector('#password');
    var passwordValue = document.querySelector('#password').value;
    var passwordAlert = document.getElementById('passErrorAlert');
    if(passwordValue.match(passWord)) {
        password.style.border = '3px solid green';
        passwordAlert.style.display = 'none';
        fields['password'] = true;
    }else{
        password.style.border = '3px solid red';
        passwordAlert.style.display = 'block';
        fields['password'] = false;
    }
}
document.getElementById('password').addEventListener('onfocus', clearPassword);
function clearPassword(){
}
//Repeat password
document.getElementById('repeatPassword').addEventListener('blur', repeatPasswordValidation);
function repeatPasswordValidation(){
    var repeatPassword = document.querySelector('#repeatPassword');
    var repeatPasswordValue = document.querySelector('#repeatPassword').value;
    var repeatPasswordAlert = document.getElementById('rPassErrorAlert');
    if(repeatPasswordValue == password.value) {
        repeatPassword.style.border = '3px solid green';
        repeatPasswordAlert.style.display = 'none';
        fields['rPassword'] = true;
    }else{
        repeatPassword.style.border = '3px solid red';
        repeatPasswordAlert.style.display = 'block';
        fields['rPassword'] = false;
    }
}
document.getElementById('repeatPassword').addEventListener('onfocus', clearRepeatPassword);
function clearRepeatPassword(){
}
formRegister.addEventListener('submit', function(e) {
    e.preventDefault ();
    var button = document.getElementById('signIn');
    button.addEventListener('click', validations);
    var validations = document.getElementById('validationFuntions');
    if (fields ['name'] && fields ['email'] && fields ['password'] && fields ['rPassword']) {
    validations.style.display = 'flex';
    validations.innerHTML = 'Registration process successful. Your users data is:' + " " + fullName.value + " " + email.value + " " + password.value;
    fetch('https://jsonplaceholder.typicode.com/users?email=${email.value}')
    .then(response => response.json())
    .then(data => console.log(data));
    } else {
    validations.style.display = 'flex';
    validations.innerHTML = 'Registration process failed. Please check your data and try again'
    }
})