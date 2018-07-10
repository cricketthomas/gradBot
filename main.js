// calls to html rivescript
/* I LOVE Jquery!!!!!!*/

function main() {
    submit.onclick = chat;
    guide.onclick = guideBtn;
    bot = new RiveScript();
    bot.loadFile("grad.rive", botReady, botError);
    $("#chatInput").on('keyup', function (chatEvent) {
        if (chatEvent.keyCode == 13) {
            chat();
        }
    }); //https://api.jquery.com/keyup/
}

function botReady() {
    console.log("Chatbot Status: OK");
    bot.sortReplies();
    //pseudo();
}

function botError(error) {
    console.log("Chatbot Status: " + error);
}

//https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp

let botMessagesArray = [];
let userMessagesArray = [];
let messagesJson = {};

function chat() {
    // add a do while loop so they cant hit it while blank or only make the button visible then.
    let userInput = chatInput.value.trim();
    let reply = bot.reply("local-user", userInput);
    //console.log("You: " + userInput);
    let promiseReply = Promise.resolve(reply);
    promiseReply.then(function (value) {
        //console.log("bot: " + value);
        botMessagesArray.push(value);
        msgJSON();
    });
    userMessagesArray.push(userInput);
    document.getElementById("chatInput").value = ""; //removing entries after button is clicked
}

let count = 0;
//this seperates each one into a json format better than i previously had. 
function msgJSON() {
    let message = ['user', 'bot'];
    let messages = [userMessagesArray, botMessagesArray];

    function arrMerge(key, value) {
        let object = {};
        for (let i = 0; i < key.length; i++) {
            object[key[i]] = value[i];
            count++;
        }
        return object;
    }
    let messagesCombination = arrMerge(message, messages);
    let json = JSON.stringify(messagesCombination);
    parsedMsg = JSON.parse(json)
    console.table(parsedMsg);
    console.log(parsedMsg.user)
    console.log(parsedMsg.bot)
    addElement();
}

function addElement() {
    botDiv = document.createElement("div");
    botDiv.classList.add("innerBot");
    userDiv = document.createElement("div");
    userDiv.classList.add("innerUser");
    let newContentBot = document.createTextNode(parsedMsg.bot.slice(-1)[0]);
    let newContentUser = document.createTextNode(parsedMsg.user.slice(-1)[0]);
    botDiv.appendChild(newContentBot);
    userDiv.appendChild(newContentUser);
    $('.wrapper').append($(userDiv));
    $('.wrapper').append($("<br /><br />"));
    $('.wrapper').append($(botDiv));
    //setTimeout(botReply, 500);
    $('.wrapper').append($("<br /><br />"));
    $(".wrapper").scrollTop($(".wrapper")[0].scrollHeight);
}

function botReply() {
    $('.wrapper').append($(botDiv));
    $('.wrapper').append($("<br>"));
}

console.log("Improvements or suggestions about this chatbot are appreciated, please email acthomasiv at  gmail");

function guideBtn() {
    document.getElementById("chatInput").value = "help";
    chat();
}