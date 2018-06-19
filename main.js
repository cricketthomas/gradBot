// calls to html rivescript
/* Ideas for accomplishing this. For the chat bot like look and exeperience, i could append each reply 
into a list then text align each element on the right of left side of the screen or using two columns, 
i could append one item into one column at a differnet row and increment per reply. Or i could push everything into a div and just print each one conseicutively and color coat every other one a different color. 


//console.log("Improvements or suggestions about this chatbot are appreciated, please email thomas iv at umd edu");

Maybe
else if (i == 0) {
                console.log("You: " + value);
            }

*/

function main() {
    submit.onclick = chat;
    bot = new RiveScript();
    bot.loadFile("grad.rive", botReady, botError);

    function botReady() {
        console.log("Chatbot Status: OK");
        bot.sortReplies();
    }

    function botError(error) {
        console.log("Chatbot Status: " + error);
    }
}

messagesArray = [];


function chat() {
    let userInput = chatInput.value.trim();
    let reply = bot.reply("local-user", userInput);
    messagesArray.push(userInput);


    var promiseReply = Promise.resolve(reply);
    promiseReply.then(function (value) {
        //console.log(userInput, value);
        //
        for (let i = 0; i < messagesArray.length; i++) {
            if (i % 2) {
                console.log("You: " + userInput);
            } else {
                console.log("bot: " + value);
            }
        }
        messagesArray.push(value);
        let output = document.getElementById("output");
        output.innerHTML = messagesArray;

    });

    //alert(messagesArray.length);
} //chat brace




//  if(i%2===0)