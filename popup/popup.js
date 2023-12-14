// Add event listener to the send button
document.getElementById("send-button").addEventListener("click", function () {
  var userInput = document.getElementById("user-input");
  var chatbox = document.getElementById("chatbox");

  // Add user's message to the chatbox
  var userMessage = document.createElement("p");
  userMessage.classList.add("user-message");
  userMessage.textContent = userInput.value;
  chatbox.appendChild(userMessage);

  // TODO: Add code to send the user's message to the chatbot and get the response
  // For demo purposes, we'll just add a bot message immediately
  var botMessage = document.createElement("p");
  const prompt = userInput.value;
  console.log(prompt);
  chrome.runtime.sendMessage(
    { message: "textToTextPrompt", prompt: prompt },
    function (response) {
      botMessage.classList.add("bot-message");
      botMessage.textContent = response;
    }
  );
  //   botMessage.classList.add("bot-message");
  //   botMessage.textContent = "I'm a bot, beep boop!";
  chatbox.appendChild(botMessage);

  // Clear the user input field
  userInput.value = "";

  // Scroll to the bottom of the chatbox
  chatbox.scrollTop = chatbox.scrollHeight;
});
