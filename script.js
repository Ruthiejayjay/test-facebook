var database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "Sally",
        password: "123"
    },
    {
        username: "Ingrid",
        password: "777"
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

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    } 
    return false;
}

 function signIn(username, password) {

      if(isUserValid(username, password)) {
          console.log(newsFeed);
      } else {
          alert("Sorry, wrong username and password");
      }
 }

signIn(userNamePrompt, passWordPrompt);