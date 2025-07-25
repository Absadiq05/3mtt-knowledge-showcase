const chatForm = document.getElementById("chat-form");

const chatInput = document.getElementById("chat-input");

const chatMessages = document.getElementById("chat-messages");



// LLM Bot Client Configuration

class llmClient {

  constructor(apiUrl = 'http://localhost:8000') {

    this.apiUrl = apiUrl;

    this.conversationHistory = [];

    this.isOnline = false;

    this.checkConnection();

  }



  async checkConnection() {

    try {

      const response = await fetch(`${this.apiUrl}/health`);

      this.isOnline = response.ok;

    } catch (error) {

      console.log('LLM API offline, Try checking your server connection.', error);

      this.isOnline = false;

    }

  }



  async sendMessage(message) {

    if (!this.isOnline) {

      return null;

    }



    try {

      const requestData = {

        message: message,

        conversation_history: this.conversationHistory,

        max_tokens: 200,

        temperature: 0.3,

        model: 'gpt-3.5-turbo'

      };



      const response = await fetch(`${this.apiUrl}/chat`, {

        method: 'POST',

        headers: {

          'Content-Type': 'application/json',

        },

        body: JSON.stringify(requestData)

      });



      if (!response.ok) {

        throw new Error(`HTTP error! status: ${response.status}`);

      }



      const data = await response.json();



      // Update conversation history

      this.conversationHistory.push(

        { role: 'user', content: message },

        { role: 'assistant', content: data.response }

      );



      // Keep history manageable (last 10 exchanges)

      if (this.conversationHistory.length > 20) {

        this.conversationHistory = this.conversationHistory.slice(-20);

      }



      return data.response;

    } catch (error) {

      console.error('LLM API error:', error);

      this.isOnline = false;

      return null; // Trigger fallback

    }

  }



  clearHistory() {

    this.conversationHistory = [];

  }

}



// Initialize LLM client

const NutriBot = new llmClient();



function appendMessage(sender, message) {

  const messageDiv = document.createElement("div");

  messageDiv.classList.add(sender === "bot" ? "bot-message" : "user-message");

  messageDiv.innerHTML = message;

  chatMessages.appendChild(messageDiv);

  chatMessages.scrollTop = chatMessages.scrollHeight;

}



function showTypingIndicator() {

  const typingDiv = document.createElement("div");

  typingDiv.classList.add("bot-message");

  typingDiv.id = "typing-indicator";

  typingDiv.innerHTML = "🤖 <i>Thinking...</i>";

  chatMessages.appendChild(typingDiv);

  chatMessages.scrollTop = chatMessages.scrollHeight;

  return typingDiv;

}



function removeTypingIndicator() {

  const typingDiv = document.getElementById("typing-indicator");

  if (typingDiv) {

    typingDiv.remove();

  }

}



chatForm.addEventListener("submit", async (e) => {

  e.preventDefault();

  const userMessage = chatInput.value.trim();

  if (userMessage === "") return;



  appendMessage("user", `${userMessage}`);

  chatInput.value = "";



  // Show typing indicator

  const typingIndicator = showTypingIndicator();



  // Try LLM first, then fallback to local responses

  try {

    const llmResponse = await NutriBot.sendMessage(userMessage);

    

    removeTypingIndicator();

    

    if (llmResponse) {

      // Format LLM response with bot emoji

      appendMessage("bot", `🤖 ${llmResponse}`);

    } else {

      // Fallback to local medical responses

      setTimeout(() => {

        botReply(userMessage);

      }, 300);

    }

  } catch (error) {

    console.error('Chat error:', error);

    removeTypingIndicator();

    

    // Fallback to local responses

const chatForm = document.getElementById("chat-form");

const chatInput = document.getElementById("chat-input");

const chatMessages = document.getElementById("chat-messages");



// LLM Bot Client Configuration

class llmClient {

  constructor(apiUrl = 'http://localhost:8000') {

    this.apiUrl = apiUrl;

    this.conversationHistory = [];

    this.isOnline = false;

    this.checkConnection();

  }



  async checkConnection() {

    try {

      const response = await fetch(`${this.apiUrl}/health`);

      this.isOnline = response.ok;

    } catch (error) {

      console.log('LLM API offline, Try checking your server connection.', error);

      this.isOnline = false;

    }

  }



  async sendMessage(message) {

    if (!this.isOnline) {

      return null;

    }



    try {

      const requestData = {

        message: message,

        conversation_history: this.conversationHistory,

        max_tokens: 200,

        temperature: 0.3,

        model: 'gpt-3.5-turbo'

      };



      const response = await fetch(`${this.apiUrl}/chat`, {

        method: 'POST',

        headers: {

          'Content-Type': 'application/json',

        },

        body: JSON.stringify(requestData)

      });



      if (!response.ok) {

        throw new Error(`HTTP error! status: ${response.status}`);

      }



      const data = await response.json();



      // Update conversation history

      this.conversationHistory.push(

        { role: 'user', content: message },

        { role: 'assistant', content: data.response }

      );



      // Keep history manageable (last 10 exchanges)

      if (this.conversationHistory.length > 20) {

        this.conversationHistory = this.conversationHistory.slice(-20);

      }



      return data.response;

    } catch (error) {

      console.error('LLM API error:', error);

      this.isOnline = false;

      return null; // Trigger fallback

    }

  }



  clearHistory() {

    this.conversationHistory = [];

  }

}



// Initialize LLM client

const NutriBot = new llmClient();



function appendMessage(sender, message) {

  const messageDiv = document.createElement("div");

  messageDiv.classList.add(sender === "bot" ? "bot-message" : "user-message");

  messageDiv.innerHTML = message;

  chatMessages.appendChild(messageDiv);

  chatMessages.scrollTop = chatMessages.scrollHeight;

}



function showTypingIndicator() {

  const typingDiv = document.createElement("div");

  typingDiv.classList.add("bot-message");

  typingDiv.id = "typing-indicator";

  typingDiv.innerHTML = "🤖 <i>Thinking...</i>";

  chatMessages.appendChild(typingDiv);

  chatMessages.scrollTop = chatMessages.scrollHeight;

  return typingDiv;

}



function removeTypingIndicator() {

  const typingDiv = document.getElementById("typing-indicator");

  if (typingDiv) {

    typingDiv.remove();

  }

}



chatForm.addEventListener("submit", async (e) => {

  e.preventDefault();

  const userMessage = chatInput.value.trim();

  if (userMessage === "") return;



  appendMessage("user", `${userMessage}`);

  chatInput.value = "";



  // Show typing indicator

  const typingIndicator = showTypingIndicator();



  // Try LLM first, then fallback to local responses

  try {

    const llmResponse = await NutriBot.sendMessage(userMessage);

    

    removeTypingIndicator();

    

    if (llmResponse) {

      // Format LLM response with bot emoji

      appendMessage("bot", `🤖 ${llmResponse}`);

    } else {

      // Fallback to local medical responses

      setTimeout(() => {

        botReply(userMessage);

      }, 300);

    }

  } catch (error) {

    console.error('Chat error:', error);

    removeTypingIndicator();

    

    // Fallback to local responses

    setTimeout(() => {

      botReply(userMessage);

    }, 300);

  }

});





// Connection status indicator

function updateConnectionStatus() {

  const statusElement = document.getElementById('connection-status');

  if (statusElement) {

    if (NutriBot.isOnline) {

      statusElement.innerHTML = '🟢 AI Assistant Online';

      statusElement.className = 'status-online';

    } else {

      statusElement.innerHTML = '🟡 Local Mode (AI Offline)';

      statusElement.className = 'status-offline';

    }

  }

}



// Check connection periodically

setInterval(() => {

  NutriBot.checkConnection().then(() => {

    updateConnectionStatus();

  });

}, 30000); // Check every 30 seconds



// Initial status update

setTimeout(updateConnectionStatus, 1000);



// Your existing functions

function logout() {

  alert("You have been logged out.");

  window.location.href = "index.html";

}



function openSettings() {

  window.location.href = "settings.html";

}￼Enter    setTimeout(() => {

      botReply(userMessage);

    }, 300);

  }

});





// Connection status indicator

function updateConnectionStatus() {

  const statusElement = document.getElementById('connection-status');

  if (statusElement) {

    if (NutriBot.isOnline) {

      statusElement.innerHTML = '🟢 AI Assistant Online';

statusElement.className = 'status-online';

    } else {

      statusElement.innerHTML = '🟡 Local Mode (AI Offline)';

      statusElement.className = 'status-offline';

    }

  }

}



// Check connection periodically

setInterval(() => {

  NutriBot.checkConnection().then(() => {

    updateConnectionStatus();

  });

