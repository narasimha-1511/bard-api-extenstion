var sendBtn = document.getElementById("send-button"); // this is send buttom

// Add event listener to the send button
sendBtn.addEventListener("click", clickFunc);

function clickFunc() {
  var userInput = document.getElementById("user-input");
  // Add user's message to the
  var userMessage = document.createElement("p");
  userMessage.classList.add("user-message");
  userMessage.textContent = userInput.value;
  chatbox.appendChild(userMessage);

  //get the vesion of the bot neeeded to be used
  var version = document.getElementById("default").checked;

  if (version) {
    var botMessage = defaultChat();
  } else {
    var botMessage = TeluguChat();
  }

  // Clear the user input field
  userInput.value = "";

  // Scroll to the bottom of the chatbox
  chatbox.scrollTop = chatbox.scrollHeight;
}

function defaultChat() {
  var userInput = document.getElementById("user-input");
  var chatbox = document.getElementById("chatbox");
  var botMessage = document.createElement("p");

  const prompt = userInput.value;
  console.log(prompt);
  chrome.runtime.sendMessage(
    { message: "textToTextPrompt", prompt: prompt },
    function (response) {
      botMessage.classList.add("bot-message");
      var pre = document.createElement("pre");
      pre.textContent = response;
      botMessage.appendChild(pre);
      chatbox.appendChild(botMessage);
    }
  );
}

function TeluguChat() {
  var userInput = document.getElementById("user-input");
  var chatbox = document.getElementById("chatbox");
  var botMessage = document.createElement("p");

  const prompt = userInput.value;
  console.log(prompt);
  chrome.runtime.sendMessage(
    { message: "teluguTextToTextPrompt", prompt: prompt },
    function (response) {
      botMessage.classList.add("bot-message");
      var pre = document.createElement("pre");
      pre.textContent = response;
      botMessage.appendChild(pre);
      chatbox.appendChild(botMessage);
    }
  );
}
