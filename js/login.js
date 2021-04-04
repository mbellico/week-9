var validationTests = document.getElementsByClassName('validationFuntions');
var test = 'Validation results:';

var loginForm = function () {
    if (document.querySelector('#formContainer')){
        validationTests.append(test + "" + 'Existing Form');   
    }
    else {
        validationTests.append(test + "" + 'Existing Form');
    }
}

loginForm ();
var amountOfFields = function() {
    var fields = document.querySelectorAll('input');
    var fieldsQuantity = fields.length;
    if (fieldsQuantity = 2){
        validationTests.append(test + "" + 'fields quantity ok');
    }
    else {
        validationTests.append(test + "" + 'wrong quantity of fields');
    }
}

amountOfFields()
var requiredFields = function(){
    var inputs = document.querySelectorAll('input').requiered;
    if (inputs = true){
        validationTests.append(test + "" + 'Required Fields');
    }
    else {
        validationTests.append(test + "" + 'Required attributes missing');
    }
}
requiredFields();

var labels = function(){
    var inputs =document.querySelectorAll('input').name;
    var labels = document.querySelectorAll('label').for;
    if (inputs === labels){
        validationTests.append(test + "" + 'Inputs with associated lables');
    }
    else {
        validationTests.append(test + "" + 'missing labels');
    }
}
labels ();

var validAnch = function (){
    var anchor = document.getElementsByClassName('submit').href;
    var validAnchor = "register.html";
    if (anchor = validAnch) {
        validationTests.append(test + "" + 'valid anchor');
    }
    else {
        validationTests.append(test + "" + 'wrong anchor');
    }
}
validAnch ();

var btnsVerification = function (){
    var submit = document.querySelector('.submit').nodeValue;
    var submitValue = 'login';
    if (submit = submitValue) {
        validationTests.append(test + "" + 'Right Button');
    }
    else {
        validationTests.append(test + "" + 'Wrong Button');
    }
}

btnsVerification ();

var lastVerif = function () {
    if (( loginForm = true) && (amountOfFields = true)) && (requiredFields = true) &&
    (validAnch = true) && (btnsVerification = true)) {
        validationTests.textContent = test + "" + 'test validations successful';
    }
}
lastVerif();

