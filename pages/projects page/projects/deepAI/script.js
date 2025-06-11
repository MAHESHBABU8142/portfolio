// Gemini API integration for DeepAI UI

  const API_KEY = ''; // Replace with your Gemini API key

const userInput = document.querySelector("footer input");
const sendBtn = document.querySelector("footer #send-icon");
const resultDiv = document.querySelector("#result p");

// Utility: Show loading dots while waiting for response
function showLoading() {
    resultDiv.innerHTML += `<span class="loading"> <span class="dot">.</span><span class="dot">.</span><span class="dot">.</span></span>`;
}
function hideLoading() {
    const loading = resultDiv.querySelector('.loading');
    if (loading) loading.remove();
}

// Add user or bot message to chat area
function addMessage(text, sender) {
    const msg = document.createElement('div');
    msg.className = sender === 'user' ? 'user-msg' : 'bot-msg';
    msg.textContent = text;
    resultDiv.appendChild(msg);
    resultDiv.scrollTop = resultDiv.scrollHeight;
}

// Send message to Gemini API and display response
async function sendMessage() {
    const prompt = userInput.value.trim();
    if (!prompt) return;

    addMessage(prompt, 'user');
    userInput.value = '';
    userInput.disabled = true;
    sendBtn.disabled = true;
    showLoading();

    try {
        const payload = {
            contents: [
                {
                    role: "user",
                    parts: [{ text: prompt }]
                }
            ]
        };
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        hideLoading();

        if (!response.ok) {
            let errorMsg = 'Unknown error';
            try {
                const errorData = await response.json();
                errorMsg = errorData.error?.message || errorMsg;
            } catch {}
            addMessage(`API Error: ${response.status} - ${errorMsg}`, 'bot');
            return;
        }

        const result = await response.json();
        if (
            result.candidates &&
            result.candidates.length > 0 &&
            result.candidates[0].content &&
            result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0
        ) {
            const text = result.candidates[0].content.parts[0].text;
            addMessage(text, 'bot');
        } else {
            addMessage("Sorry, I couldn't generate a response. Please try again.", 'bot');
        }
    } catch (error) {
        hideLoading();
        addMessage(`Oops! Something went wrong: ${error.message}`, 'bot');
    } finally {
        userInput.disabled = false;
        sendBtn.disabled = false;
        userInput.focus();
    }
}

// Send on button click or Enter key
sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});

// Optional: Basic styles for chat bubbles (add to styles.css if you want)
const style = document.createElement('style');
style.textContent = `
.user-msg {
    background: #2d2d4d;
    color: #fff;
    margin: 0.5em 0 0.5em auto;
    padding: 0.5em 1em;
    border-radius: 1em 1em 0.2em 1em;
    max-width: 80%;
    text-align: right;
    display: inline-block;
}
.bot-msg {
    background: #1a1a2e;
    color: #b3e5fc;
    margin: 0.5em auto 0.5em 0;
    padding: 0.5em 1em;
    border-radius: 1em 1em 1em 0.2em;
    max-width: 80%;
    text-align: left;
    display: inline-block;
}
.loading .dot {
    animation: blink 1s infinite alternate;
    font-size: 1.5em;
    color: #b388ff;
}
.loading .dot:nth-child(2) { animation-delay: 0.2s; }
.loading .dot:nth-child(3) { animation-delay: 0.4s; }
@keyframes blink { to { opacity: 0.2; } }
`;
document.head.appendChild(style);
