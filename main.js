// calls to html rivescript
/* Ideas for accomplishing this. For the chat bot like look and exeperience, i could append each reply 
into a list then text align each element on the right of left side of the screen or using two columns, 
i could append one item into one column at a differnet row and increment per reply. Or i could push everything into a div and just print each one conseicutively and color coat every other one a different color. 


//console.log("Improvements or suggestions about this chatbot are appreciated, please email thomas iv at umd edu");

Resources for next workday: 
https://stackoverflow.com/questions/5886144/create-divs-from-array-elements
https://stackoverflow.com/questions/9050345/selecting-last-element-in-javascript-array


Old loop. just saving. 
for (let i = 0; i < userMessagesArray.length; i++) {
        if (i % 2) {
            console.log("You: " + userInput);
        } else {
            var promiseReply = Promise.resolve(reply);
            promiseReply.then(function (value) {
                console.log("bot: " + value);
                botMessagesArray.push(value);
            });


        }
    }

*/

function main() {
    submit.onclick = chat;
    bot = new RiveScript();
    bot.loadFile("grad.rive", botReady, botError);
}

function botReady() {
    console.log("Chatbot Status: OK");
    bot.sortReplies();
}

function botError(error) {
    console.log("Chatbot Status: " + error);
}






botMessagesArray = [];
userMessagesArray = [];

function chat() {
    // add a do while loop so they cant hit it while blank or only make the button visible then.
    let userInput = chatInput.value.trim();
    let reply = bot.reply("local-user", userInput);
    let userOutput = document.getElementById("userOutput");
    let botReply = document.getElementById("botReply");
    console.log("You: " + userInput);
    let promiseReply = Promise.resolve(reply);
    promiseReply.then(function (value) {
        console.log("bot: " + value);
        botMessagesArray.push(value);
        botReply.innerHTML = botMessagesArray;
    });
    userMessagesArray.push(userInput);
    userOutput.innerHTML = userMessagesArray;
    //alert(messagesArray.length);
    document.getElementById("chatInput").value = ""; //removing entries after button is clicked
} //chat func

function test() { // where i left off. so here, youre trying to concat both arrays so that they can be combined staggered or combined with print one after the other in seperate divs. note above. 
    //You also remvoed the consolve log div. 
    //Mabybe make a function that creates a new div and prints the last array element each time. links in comments above. 
    var arrayConcatTest = userMessagesArray.concat(botMessagesArray);
    alert(arrayConcatTest.length);
    alert(arrayConcatTest);

}
//alert(arrayConcatTest.length);