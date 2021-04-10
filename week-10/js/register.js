var validationTests = document.getElementsByClassName('validationFuntions');
var test = 'Validation results:';
var registerForm = function () {
    if (document.querySelector('#formContainer')){
        console.log(test + 'Existing forms');
        validationTests.display = 'block';
        validationTests.innerHTML = 'test' + "" + 'Wrong ButtonExisting form';
    } else {
        validationTests.display = 'block';
        console.log(test + 'non-existing form');
        validationTests.innerHTML = 'test' + "" + 'non-existing form';
    }
}
registerForm ();
var amountOfFields = function() {
    var fields = document.querySelectorAll('input');
    var fieldsQuantity = fields.length;
    if (fieldsQuantity = 4){
        console.log(test + 'The amount of fields is correct');
        validationTests.display = 'block';
        validationTests.innerHTML = 'test' + "" + 'The amount of fields is correct';
    } else {
        console.log(test + 'wrong quantity of fields');
        validationTests.display = 'block';
        validationTests.innerHTML = 'test' + "" + 'Wrong quantity of fields';
    }
}
amountOfFields()
var requiredFields = function(){
    var inputs = document.querySelectorAll('input').requiered;
    if (inputs = true){
        console.log(test + 'all required fields were found')
        validationTests.display = 'block';
        validationTests.innerHTML = 'test' + "" + 'all required fields were found';
    } else {
        console.log(test + 'Required attributes missing');
        validationTests.display = 'block';
        validationTests.innerHTML = 'test' + "" + 'Required attributes missing';
    }
}
requiredFields();
var labels = function(){
    var inputs =document.querySelectorAll('input').name;
    var labels = document.querySelectorAll('label').for;
    if (inputs === labels){
        console.log(test + 'Inputs with associated labels');
        validationTests.display = 'block';
        validationTests.innerHTML = 'test' + "" + 'Inputs with associated labels';
    } else {
        console.log(test + 'missing labels');
        validationTests.display = 'block';
        validationTests.innerHTML = 'test' + "" + 'Missing Labels';
    }
}
labels ();
var validAnch = function (){
    var anchor = document.getElementsByClassName('toLogin').href;
    var validAnchor = "login.html";
    if (anchor = validAnchor) {
        console.log(test + 'valid anchor');
        validationTests.display = 'block';
        validationTests.innerHTML = 'test' + "" + 'Valid anchor';
    } else {
        console.log(test + 'wrong anchor');
        validationTests.display = 'block';
        validationTests.innerHTML = 'test' + "" + 'Wrong anchor';
    }
}
validAnch ();
var btnsVerification = function (){
    var submit = document.querySelector('.submit').nodeValue;
    var resetKey = 'reset';
    var signInKey = 'Sign in';
    if ((submit = resetKey) && (submit = signInKey)){
        console.log(test + 'Right Button');
        validationTests.display = 'block';
        validationTests.innerHTML = 'test' + "" + 'Right Button';
    } else {
        console.log(test + 'wrong button');
        validationTests.display = 'block';
        validationTests.innerHTML = 'test' + "" + 'Wrong Button';
    }
}
btnsVerification ();
var lastVerif = function () {
    if (( loginForm = true) && (amountOfFields = true) && (requiredFields = true) &&
    (validAnch = true) && (btnsVerification = true)) {
        validationTests.display = 'block';
        validationTests.style = 'green';
        validationTests.textContent = 'test' + "" + 'every validation has passed';
    } else {
        validationTests.display = 'block';
        validationTests.style = 'red';
        validationTests.textContent = 'Test' + 'test validations unsuccessfull';
    }
}
lastVerif();