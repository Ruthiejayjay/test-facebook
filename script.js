var database = [
    {
        username: "andrei",
        password: "supersecret"
    }
];
var newsFeed = [
    {
        username: "Bobby",
        timeline: "I'm super tired"
    },
    {
        username: "Sally",
        timeline: "javaScript is soooo cooool!"
    }
];

var userNamePrompt = prompt("What's your username?");

var passWordPrompt = prompt("What's your password?");

function signIn(user, pass) {
    if(user === database[0].username &&
        pass === database[0].password){
            console.log(newsFeed);
        } else {
            alert("Alaye, commot here we no sabi you!");
        }
}

signIn(userNamePrompt, passWordPrompt);