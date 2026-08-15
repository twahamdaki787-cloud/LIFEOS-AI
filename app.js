function scrollToSection(id) {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth"
    });
  }
}


// AI ASSISTANT

function openAssistant() {
  scrollToSection("assistant");

  setTimeout(() => {
    const input = document.getElementById("userInput");

    if (input) {
      input.focus();
    }
  }, 500);
}


// SEND MESSAGE

function sendMessage() {

  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  const message = input.value.trim();

  if (message === "") {
    return;
  }


  // USER MESSAGE

  const userMessage = document.createElement("div");

  userMessage.className = "user-message";

  userMessage.textContent = message;

  chatBox.appendChild(userMessage);


  input.value = "";

  chatBox.scrollTop = chatBox.scrollHeight;


  // DEMO AI RESPONSE

  setTimeout(() => {

    const aiMessage = document.createElement("div");

    aiMessage.className = "ai-message";

    aiMessage.textContent =
      "Thanks for sharing that with me 👋 I'm LIFEOS AI. Soon I'll be able to give you personalized solutions, opportunities and action plans.";

    chatBox.appendChild(aiMessage);

    chatBox.scrollTop = chatBox.scrollHeight;

  }, 700);
}


// EARN

function openEarn() {

  alert(
    "💰 EARN\n\nLIFEOS will help you discover jobs, freelancing opportunities, business ideas and other ways to increase your income."
  );

}


// LEARN

function openLearn() {

  alert(
    "📚 LEARN\n\nLIFEOS will recommend useful skills, learning resources and personalized learning paths based on your goals."
  );

}


// SOLVE

function openSolve() {

  alert(
    "🛠️ SOLVE\n\nDescribe your problem and LIFEOS AI will help you break it down into practical steps."
  );

}


// OPPORTUNITIES

function openOpportunities() {

  alert(
    "🚀 OPPORTUNITIES\n\nLIFEOS will help you discover jobs, competitions, grants, scholarships, businesses and other opportunities."
  );

}


// PROFILE

function openProfile() {

  alert(
    "👤 PROFILE\n\nYour personalized LIFEOS profile will appear here."
  );

}


// HOME

function goHome() {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// ENTER KEY

document.addEventListener("DOMContentLoaded", function () {

  const input = document.getElementById("userInput");

  if (input) {

    input.addEventListener("keypress", function (event) {

      if (event.key === "Enter") {
        sendMessage();
      }

    });

  }

});
