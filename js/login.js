
var validationTests = document.getElementsByClassName('validationFuntions');
var test = 'Validation results:';

var loginForm = function () {
    if (document.querySelector('#formContainer')){
        validationTests.display = 'flex';
        validationTests.innerHTML = 'test' + "" + 'Existing Form';
    }
    else {
        validationTests.display = 'flex';
        validationTests.innerHTML = 'test' + "" + 'Existing Form';
    }
}

loginForm ();
var amountOfFields = function() {
    var fields = document.querySelectorAll('input');
    var fieldsQuantity = fields.length;
    if (fieldsQuantity = 2){
        validationTests.display = 'flex';
        validationTests.innerHTML = 'test' + "" + 'fields quantity ok';
    }
    else {
        validationTests.display = 'flex';
        validationTests.innerHTML ='test' + "" + 'wrong quantity of fields';
    }
}

amountOfFields()
var requiredFields = function(){
    var inputs = document.querySelectorAll('input').requiered;
    if (inputs = true){
        validationTests.display = 'flex';
        validationTests.innerHTML = 'test' + "" + 'Required Fields';
    }
    else {
        validationTests.display = 'flex';
        validationTests.innerHTML = 'test' + "" + 'Required attributes missing';
    }
}
requiredFields();

var labels = function(){
    var inputs =document.querySelectorAll('input').name;
    var labels = document.querySelectorAll('label').for;
    if (inputs === labels){
        validationTests.display = 'flex';
        validationTests.innerHTML = 'test' + "" + 'Inputs with associated lables';
    }
    else {
        validationTests.display = 'flex';
        validationTests.innerHTML = 'test' + "" + 'missing labels';
    }
}
labels ();

var validAnch = function (){
    var anchor = document.getElementsByClassName('submit').href;
    var validAnchor = "register.html";
    if (anchor = validAnch) {
        validationTests.display = 'flex';
        validationTests.innerHTML = 'test' + "" + 'valid anchor';
    }
    else {
        validationTests.display = 'flex';
        validationTests.innerHTML = 'test' + "" + 'wrong anchor';
    }
}
validAnch ();

var btnsVerification = function (){
    var submit = document.querySelector('.submit').nodeValue;
    var submitValue = 'login';
    if (submit = submitValue) {
        validationTests.display = 'flex';
        validationTests.innerHTML = 'test' + "" + 'Right Button';
    }
    else {
        validationTests.display = 'flex';
        validationTests.innerHTML = 'test' + "" + 'Wrong Button';
    }
}

btnsVerification ();

var lastVerif = function () {
    if (( loginForm = true) && (amountOfFields = true) && (requiredFields = true) &&
    (validAnch = true) && (btnsVerification = true)) {
        validationTests.display = 'flex';
        validationTests.textContent = 'test' + "" + 'test validations successful';
    }
}
lastVerif();

