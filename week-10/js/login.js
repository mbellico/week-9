var validationTests = document.getElementsByClassName('validationFuntions');
var test = 'Validation results:';
var loginForm = function () {
    if (document.querySelector('#formContainer')){
        console.log(test + 'Existing forms');
        validationTests.display = 'block';
        validationTests.innerHTML = 'test' + "" + 'Wrong ButtonExisting form';
    } else {
        console.log(test + 'non-existing form');
        validationTests.display = 'block';
        validationTests.innerHTML = 'test' + "" + 'non-existing form';
    }
}
loginForm ();
var amountOfFields = function() {
    var fields = document.querySelectorAll('input');
    var fieldsQuantity = fields.length;
    if (fieldsQuantity = 2){
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
    var anchor = document.getElementsByClassName('submit').href;
    var validAnchor = "register.html";
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
    var submitValue = 'login';
    if (submit = submitValue) {
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
        validationTests.textContent = 'test' + 'test validations unsuccessfull';
    }
}
lastVerif();