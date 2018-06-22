// calls to html rivescript
/* Ideas for accomplishing this. For the chat bot like look and exeperience, i could append each reply 
into a list then text align each element on the right of left side of the screen or using two columns, 
i could append one item into one column at a differnet row and increment per reply. Or i could push everything into a div and just print each one conseicutively and color coat every other one a different color. 


//console.log("Improvements or suggestions about this chatbot are appreciated, please email thomas iv at umd edu");
*/

function main() {
    submit.onclick = chat;
    bot = new RiveScript();
    bot.loadFile("grad.rive", botReady, botError);

}

function botReady() {
    console.log("Chatbot Status: OK");
    bot.sortReplies();
    //pseudo();
}

function botError(error) {
    console.log("Chatbot Status: " + error);
}



let botMessagesArray = [];
let userMessagesArray = [];
let messagesJson = {};

function chat() {
    // add a do while loop so they cant hit it while blank or only make the button visible then.
    let userInput = chatInput.value.trim();
    let reply = bot.reply("local-user", userInput);
    let userOutput = document.getElementById("userOutput");
    let botReply = document.getElementById("botReply");
    let test = document.getElementById('test');

    //console.log("You: " + userInput);
    let promiseReply = Promise.resolve(reply);
    promiseReply.then(function (value) {
        //console.log("bot: " + value);
        botMessagesArray.push(value);
        //botReply.innerHTML = botMessagesArray;
        msgJSON();
    });
    userMessagesArray.push(userInput);
    //userOutput.innerHTML = userMessagesArray;
    document.getElementById("chatInput").value = ""; //removing entries after button is clicked
}




let count = 0;
//this function converts messages to JSON or literal?
function msgJSON() {
    for (let i = 0; i < userMessagesArray.length && i < botMessagesArray.length; i++) {
        messagesJson["user" + (i + 1)] = userMessagesArray[i];
        messagesJson["bot" + (i + 1)] = botMessagesArray[i];
        count++;
    }
    //messagesJson = JSON.stringify(messagesJson);
    console.log(JSON.stringify(messagesJson));
    test.innerHTML = JSON.stringify(messagesJson); //maybe print it as json?
}



//Write a function that prints stringified json. 
let cleanJson = JSON.stringify(messagesJson);
for (let x = 0; x < userMessagesArray.length, x++;) {


}



for (var key in cleanJson) {
  if (cleanJson.hasOwnProperty(key)) {
    var val = cleanJson[key];
    console.log(val);
  }
}














/*
function divJson() {
    Object.keys(messagesJson).forEach(function (key) {
        for (x in messagesJson) {


            console.log("user: " + messagesJson[key]);
        }
    });
    Object.keys(replyJson).forEach(function (key) {
        console.log("bot: " + replyJson[key]);
    })
} */