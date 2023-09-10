document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.getElementById("navbarToggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  document.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;


    if (navbarCollapse.classList.contains("show") && scrollPosition > 50) {
      navbarToggler.click();
    }
  });
});


// document.getElementsByClassName('review')[0].classList.add('active');
// let currentReview = 0;
// function nextReview() {
//   const reviews = document.getElementsByClassName('review');
//   const stars = document.getElementsByClassName('stars');
//   currentReview = (currentReview + 1) % reviews.length;
//   reviews[currentReview].classList.add('active');
// }

// setInterval(nextReview, 2000);
let currentReview = 0;
const reviews = document.getElementsByClassName('review');

function nextReview() {
  reviews[currentReview].classList.remove('active');
  currentReview = (currentReview + 1) % reviews.length;
  reviews[currentReview].classList.add('active');
}

setInterval(nextReview, 2000);



function closeChatWindow() {
  var chatWindow = document.getElementById("chatWindow");
  chatWindow.style.display = "none";
}

function addChatBubble(message) {
  var chatContent = document.getElementById("chatContent");
  var chatBubble = document.createElement("div");
  chatBubble.className = "chat-bubble";
  chatBubble.textContent = message;
  chatContent.appendChild(chatBubble);
  chatContent.scrollTop = chatContent.scrollHeight;
}

var userChoiceMade = false;

function addButtons() {
  var chatContent = document.getElementById("chatContent");
  var buttonsDiv = document.createElement("div");

  var yesButton = document.createElement("button");
  yesButton.textContent = "Yes";
  yesButton.className = "chat-button";
  yesButton.addEventListener("click", function() {
      handleUserChoice(true);
  });

  var noButton = document.createElement("button");
  noButton.textContent = "No";
  noButton.className = "chat-button";
  noButton.addEventListener("click", function() {
      handleUserChoice(false);
  });

  buttonsDiv.appendChild(yesButton);
  buttonsDiv.appendChild(noButton);
  chatContent.appendChild(buttonsDiv);
}

// Function to handle user choice
function handleUserChoice(choice) {
  if (!userChoiceMade) {
      var chatContent = document.getElementById("chatContent");
      var buttonsDiv = document.querySelector("#chatContent > div");
      buttonsDiv.style.display = "none";
      userChoiceMade = true;

      if (choice) {
          addChatBubble("Contact us on WhatsApp!");
          addWhatsAppButton();
      } else {
          addChatBubble("Thanks for selecting Anisys Technologies & Visit again...");
      }
  }
}

function addWhatsAppButton() {
  var chatContent = document.getElementById("chatContent");
  var whatsappButton = document.createElement("button");
  whatsappButton.textContent = "Contact us on WhatsApp";
  whatsappButton.className = "chat-button";
  whatsappButton.addEventListener("click", function() {
      window.open("https://api.whatsapp.com/send/?phone=919743106835&text&type=phone_number&app_absent=0", "_blank");
  });
  chatContent.appendChild(whatsappButton);
}

// Event listener to handle user clicks on the chat icon
var chatIcon = document.getElementById("chatIcon");
chatIcon.addEventListener("click", function () {
  var chatWindow = document.getElementById("chatWindow");
  if (chatWindow.style.display === "none") {
      chatWindow.style.display = "block";
      addChatBubble("Welcome to Anisys Technology!");
      setTimeout(function () {
          addChatBubble("Do you have any queries? ");
          addButtons();
      }, 1000);
  } else {
      chatWindow.style.display = "none";
  }
});

// Event listener to close the chatbot window when clicking the close icon
var closeIcon = document.getElementById("closeIcon");
closeIcon.addEventListener("click", closeChatWindow);