// calls to html rivescript
/* Ideas for accomplishing this. For the chat bot like look and exeperience, i could append each reply 
into a list then text align each element on the right of left side of the screen or using two columns, 
i could append one item into one column at a differnet row and increment per reply. Or i could add div elements one after the other or into an array than print div by div.
//console.log("Improvements or suggestions about this chatbot are appreciated, please email thomas iv at umd edu");


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

returnReplyArray = [];

function chat() {
    let userInput = chatInput.value.trim();
    //reply.innerHTML = userInput;
    let reply = bot.reply("local-user", userInput);
    console.log(reply);
    
    var promiseReply = Promise.resolve(reply);
    promiseReply.then(function (value) {
        console.log(value);
        let output = document.getElementById("output");
        returnReplyArray.push(value);
        output.innerHTML = returnReplyArray;

        // expected output: Array [1, 2, 3]
    });

}