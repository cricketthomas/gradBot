// calls to html rivescript
/* I LOVE Jquery!!!!!!*/

function main() {
    submit.onclick = chat;
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
    console.log(parsedMsg);
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

console.log("Improvements or suggestions about this chatbot are appreciated, please email thomas iv at umd edu");




/* 
//jquery functions to wrap http://api.jquery.com/wrapall/
function wrapperFunc() {
    let wrapper = "<div class='wrapper'></div>";
    $("div.inner").wrapAll(wrapper);
}

//trigger enter
$("#chatInput").on('keyup', function (e) {
    if (e.keyCode == 13) {
        chat();
    }
});

console.log("Improvements or suggestions about this chatbot are appreciated, please email thomas iv at umd edu");



//playground for new methods. 
//Write a function that prints stringified json. 
let cleanJson = JSON.stringify(messagesJson);
for (let x = 0; x < userMessagesArray.length, x++;) {}


// does this print the json more readable?
for (var key in messagesJson) {
    if (messagesJson.hasOwnProperty(key)) {
        var val = messagesJson[key];
        console.log(val);
    }
}

function divJson() {
    Object.keys(messagesJson).forEach(function (key) {
        for (x in messagesJson) {
            console.log("user: " + messagesJson[key]);
        }
    });
    Object.keys(replyJson).forEach(function (key) {
        console.log("bot: " + replyJson[key]);
    })



    //this function converts messages to JSON or literal?
function msgJSON_OLD() {
    for (let i = 0; i < userMessagesArray.length && i < botMessagesArray.length; i++) {
        messagesJson["user" + (i + 1)] = userMessagesArray[i];
        messagesJson["bot" + (i + 1)] = botMessagesArray[i];
        count++;
    }
    //messagesJson = JSON.stringify(messagesJson);
    var msg = "Message " + JSON.stringify(messagesJson, undefined, 3);
    test.innerHTML = msg; //maybe print it as json?
    console.log(msg);
}

} 
function newMessage() {
    var table = document.getElementById("conversation");
    var botRow = document.getElementById("botRow");
    var row = table.insertRow(-1);
    var q = row.insertCell(0);
    var a = row.insertCell(1);
    a.innerHTML = parsedMsg.bot.slice(-1)[0];
    q.innerHTML = parsedMsg.user.slice(-1)[0];
}


*/