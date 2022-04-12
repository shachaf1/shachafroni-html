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
    isEmpty(user, passwordValidation);
    validationPassword(user, passwordValidation);
    if (validPassword(password)) {
        users.push(user);
    }
}
function validationPassword(user, passwordValidation) {
    if(user.password != passwordValidation) {
        window.alert("error: the validation password isn't correlative");
    }
}
function validPassword(password) {
    var passw=  /^[A-Za-z0-9]\w{7,14}$/;
    if(password.value.match(passw)){
        window.alert("error: the password need to contain letters and numbers");
    }

}
function validEmail(password) {

}
function isEmpty(user, passwordValidation) {
    if (user.nickname == "" || passwordValidation =="" || user.nickname == "" || user.image == "" || user.password == "" || user.email == "") {
        window.alert("error: must insert all the fields");
    }
}