var users=[];//contain the chats of all the users
var massages=[]; //structs of name and the massage he sended and the data and the image.
/*
שלבי עבודה:
ליצור בגאווה סקריפט מערך, 
ואז לקחת את החלקים המוכנים מהקוד, 
ופשוט לכתוב שם את הגישה דרך המערך במקום את השמות עצמם.
*/
var massage = {
    name: "roni",
    massageStr: "hi asdfads adsfadf asdfasdf",
    date: "13/04/2022",
    clock:"21:00",
}
massages.push(massage);
var massage = {
    name: "me",
    massageStr: "hi",
    date: "13/04/2022",
    clock:"21:00",
}
massages.push(massage);
var massage = {
    name: "roni",
    massageStr: "hi",
    date: "13/04/2022",
    clock:"21:00",
}
massages.push(massage);

user = {
    name:"roni",
    Image: "fun talking.jpg",
    userChat: massages
}
users.push(user);
user = {
    name:"roni",
    Image: "fun talking.jpg",
    userChat: massages
}
users.push(user);


window.onload = function(){
    document.getElementById('output').innerHTML = user.userChat[0].massageStr;
    document.getElementById('last massage').innerHTML = user.userChat[0].massageStr;
    document.getElementById('image').src = user.Image;
    document.getElementById('name').innerHTML = user.name;



};
