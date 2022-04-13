var users = [];
var check = document.getElementById("register");
//The logic when the Register button was entered.
check.onclick = function() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var nickname = document.getElementById("nickname").value;
    var passwordValidation = document.getElementById("validation").value;
    var image = document.getElementById("image").value;
    
    var user = {
        email: email,
        password: password,
        image: image,
        nickname: nickname
    };
    if(isOk(user,passwordValidation)) {
        users.push(user);
        window.location.assign("login.html");
        return false;
    }
    return;

}
function isOk(user, passwordValidation) {
    if(!isEmpty(user, passwordValidation)) {
        window.alert("error: must insert all the fields");
        return false;
    }
    if(!validPassword(user)) {
        window.alert("password must contain only letters and numbers and 7-14 digits.");
        return false;
    }
    if(!validationPassword(user, passwordValidation)) {
        window.alert("error: the validation password isn't correlative");
        return false;
    }
    return true;
}
function validationPassword(user, passwordValidation) {
    if(user.password != passwordValidation) {
        return false;
    }
    return true;
}
function validPassword(user) {
    var passw=  /^[A-Za-z0-9]\w{7,14}$/;
    if(!user.password.match(passw)) 
    { 
        return false;
    }
    return true;
}
function isEmpty(user, passwordValidation) {
    if (user.nickname == "" || passwordValidation =="" || user.nickname == "" || user.image == "" || user.password == "" || user.email == "") {
        return false;
    }
    return true;
}