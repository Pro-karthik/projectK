let wow = document.getElementById("appointment-form");
let page = document.getElementById("appointment");
let gone = document.getElementById("gone");

function lol(a){
  wow.action = a;
}

function sendMessage() {
  var userInput = document.getElementById("user-input").value;
  if (userInput.trim() === "") {
      return;
  }

  var chatBox = document.getElementById("chat-box");
  var userMessage = document.createElement("div");
  userMessage.className = "user-message";
  userMessage.classList.add("user-msg");
  userMessage.textContent =  userInput;
  chatBox.appendChild(userMessage);

  // Simulate bot response (replace this with actual bot logic)
  var botResponse = document.createElement("div");
  botResponse.className = "bot-message";

  botResponse.textContent = "Hi! I'm a chatbot. You said: " + userInput;
  botResponse.classList.add("bot-msg");
  chatBox.appendChild(botResponse);

  // Scroll to the bottom of the chat box
  chatBox.scrollTop = chatBox.scrollHeight;

  // Clear the input field
  document.getElementById("user-input").value = "";
}
