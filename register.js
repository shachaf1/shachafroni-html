var users = [];

function register() {
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
    //isEmpty(user, passwordValidation);
    //validationPassword(user, passwordValidation);
    //validPassword(user);
    isOk(user,passwordValidation);
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