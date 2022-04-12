
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
var check1 = document.getElementById("login");
//The logic when the Register button was entered.
check1.onclick = function() {
    window.alert("nickname");

    var nickname = document.getElementById("nickname").value;
    var password = document.getElementById("password").value;
    usernum = -1;
    for(let i=0;i<users.length;i++) {
        if(nickname == users[i].nickname && password == users[i].password) {
            usernum = i;
        }
    }
    if(usernum == -1) {
        alert("incorect");
    }
    allert("correct");
}