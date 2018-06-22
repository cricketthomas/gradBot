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



botMessagesArray = [];
userMessagesArray = [];
messagesJson = {};


function chat() {
    // add a do while loop so they cant hit it while blank or only make the button visible then.
    let userInput = chatInput.value.trim();
    let reply = bot.reply("local-user", userInput);
    let userOutput = document.getElementById("userOutput");
    let botReply = document.getElementById("botReply");
    //console.log("You: " + userInput);
    let promiseReply = Promise.resolve(reply);
    promiseReply.then(function (value) {
        //console.log("bot: " + value);
        botMessagesArray.push(value);
        botReply.innerHTML = botMessagesArray;
        msgJSON();

    });
    userMessagesArray.push(userInput);
    userOutput.innerHTML = userMessagesArray;
    document.getElementById("chatInput").value = ""; //removing entries after button is clicked
} //chat function braces
//}while (chatInput !== null);

//this function converts messages to JSON
function msgJSON() {
    for (let i = 0; i < userMessagesArray.length && i < botMessagesArray.length; i++) {
        messagesJson["user " + (i + 1)] = userMessagesArray[i];
        messagesJson["bot " + (i + 1)] = botMessagesArray[i];
    }
    console.log(messagesJson);

}