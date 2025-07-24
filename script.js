document.addEventListener("DOMContentLoaded", () => {
    const chatOverlay = document.getElementById("chat-overlay");
    const openChatBtn = document.getElementById("open-chat-btn");
    const closeChatBtn = document.getElementById("close-chat-btn");
    const chatBody = document.getElementById("chat-body");
    const chatInput = document.getElementById("chat-input");
    const sendBtn = document.getElementById("send-btn");
    const footer = document.querySelector("footer");

    // Make sure chat is hidden initially
    chatOverlay.classList.add("hidden");

    const responses = {
        "name": "I'm Parantack from India!",
        "education": "I'm a CSE undergrad at Sister Nivedita University, graduating in 2026.",
        "skills": "I know HTML, CSS, JavaScript, Java, C, C++, Node.js, and more!",
        "projects": "Some of my projects include Rock Paper Scissors,Eventlitez App, Weather App, and Quiz App.",
        "contact": "You can contact me via LinkedIn, GitHub, Instagram, or Facebook. Scroll down to the contact section!",
        "dsa": "Yes, I'm mastering Data Structures and Algorithms in Java!",
        "frontend": "Yes! I'm a frontend developer currently learning full-stack development.",
        "default": "Sorry, I didn't get that. You can ask about my education, skills, or projects!"
    };

    openChatBtn.addEventListener("click", () => {
        chatOverlay.classList.remove("hidden");
    });

    closeChatBtn.addEventListener("click", () => {
        chatOverlay.classList.add("hidden");
    });

    sendBtn.addEventListener("click", sendMessage);
    chatInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") sendMessage();
    });
    window.addEventListener("scroll", () => {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (footerTop < windowHeight) {
            openChatBtn.classList.add("hidden"); // Hide if footer is visible
        } else {
            openChatBtn.classList.remove("hidden"); // Show otherwise
        }
    });

    function sendMessage() {
        const userMsg = chatInput.value.trim();
        if (userMsg === "") return;

        appendMessage("user", userMsg);

        const botReply = getBotResponse(userMsg.toLowerCase());
        setTimeout(() => {
            appendMessage("bot", botReply);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 500);

        chatInput.value = "";
    }

    function appendMessage(sender, text) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('chat-message', sender === 'user' ? 'user' : 'bot');
        msgDiv.textContent = text;
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function getBotResponse(message) {
        for (let key in responses) {
            if (message.includes(key)) {
                return responses[key];
            }
        }
        return responses["default"];
    }
});
