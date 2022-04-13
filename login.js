
var user1 = {
    email: "roni@gmail.com",
    password: "12341234",
    image: "fun talking.jpg",
    nickname: "roni1"
};
var user2 = {
    email: "shachaf@gmail.com",
    password: "12341234",
    image: "fun talking.jpg",
    nickname: "shachaf1"
};
users = [user1,user2];
var check = document.getElementById("login");
//The logic when the Register button was entered.
check.onclick = function() {

    var password = document.getElementById("password").value;
    var nickname = document.getElementById("nickname").value;
    usernum = -1;
    for(let i=0;i<users.length;i++) {
        if(nickname == users[i].nickname && password == users[i].password) {
            usernum = i;
        }
    }
    if(usernum == -1) {
        alert("incorect nickname or password");
        return;
    }
    window.location.assign("chat.html");
    return false;
a}