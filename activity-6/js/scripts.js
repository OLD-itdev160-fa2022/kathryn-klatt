//Array to store messages
var messages = [];

//Message Type lookup object, similar to enum.
var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

var data = [
    {
        type: messageType.out,
        user: 'Kathryn',
        message: 'Are you awake yet?'
    },
    {
        type: messageType.in,
        user: 'Corey',
        message: 'No. Sleep forever.'
    },
    {
        type: messageType.out,
        user: 'Kathryn',
        message: 'But the cats are hungry.'
    }
];

//Message constructor
function Message (type, user, message){
    this.type = type;
    this.user = user;
    this.message = message;
}

//Function creates and returns element for the input message
function createMessageElement(message){
    //Create text element for the message
    var messageText = document.createTextNode(
        message.user + ': '+message.message
    );
    //Create the element and add the message text
    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);
    //Add a class using the message type
    messageEl.className = message.type;

    return messageEl;
}

//Button click event handler to add new message
function addMessageHandler(event){
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messagesContainerEl = document.getElementById('message-container');

    //Determines message type and sets message variables accordingly
    switch(event.target.id){
        case 'send-button':
            user = 'Kathryn';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Corey';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
    }

    //Create new message
    if(messageInput.value != ''){
        //Constructs message and adds to array
        var message = new Message(type, user, messageInput.value);
        messages.push(message);
        //Create a message element
        var el = createMessageElement(message);
        //Add message element to DOM
        messagesContainerEl.appendChild(el);
        //Reset input
        messageInput.value='';
    }

}

//Load seed data from data array above
function loadSeedData(){
    for(var i=0; i < data.length; i++){
        var message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }

    //Load view with pre-loaded messages
    var messagesContainerEl = document.getElementById('message-container');
    for (var i = 0; i<messages.length; i++){
        var message = messages[i];
        var el = createMessageElement(message);
        messagesContainerEl.appendChild(el);
    }
}

var init = function () {
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    //load seed data from data array
    loadSeedData();
};

init();