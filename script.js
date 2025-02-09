// Play background music when the "Play Music" button is clicked
document.getElementById("playMusicBtn").addEventListener("click", function() {
  var bgMusic = document.getElementById("bgMusic");
  bgMusic.play().catch(function(error) {
    console.log("Playback prevented:", error);
  });
});

// When "Ja" is clicked in Stage 1, hide Stage 1 and show Stage 2
document.getElementById("yesBtn").addEventListener("click", function() {
  document.getElementById("stage1").style.display = "none";
  document.getElementById("stage2").style.display = "block";
});

// Function to move the "Nee" button to a random position anywhere on the screen
function moveNoButton() {
  var noBtn = document.getElementById("noBtn");
  var screenWidth = window.innerWidth - noBtn.offsetWidth;
  var screenHeight = window.innerHeight - noBtn.offsetHeight;
  var randomLeft = Math.floor(Math.random() * screenWidth);
  var randomTop = Math.floor(Math.random() * screenHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = randomLeft + "px";
  noBtn.style.top = randomTop + "px";
}
var noBtn = document.getElementById("noBtn");
// Add both mouseover and touchstart events for desktop and mobile devices
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// When the final "Ja" is clicked in Stage 2, display the final message
document.getElementById("finalYesBtn").addEventListener("click", function() {
  // Optionally hide the finalYes button after click
  document.getElementById("finalYesBtn").style.display = "none";
  // Display final message on the page
  var finalMessage = document.getElementById("finalMessage");
  finalMessage.innerText = "Hihi ik ken je will choose ja:))";
  finalMessage.style.display = "block";
});

// Create floating emojis (cat, dog, heart) that move gently around the screen
function createFloatingEmoji(emoji) {
  var span = document.createElement("span");
  span.className = "floating-emoji";
  span.innerText = emoji;
  // Set a random starting position within the viewport
  span.style.left = Math.random() * 100 + "vw";
  span.style.top = Math.random() * 100 + "vh";
  // Randomize animation duration and delay for variety
  span.style.animationDuration = (4 + Math.random() * 4) + "s";
  span.style.animationDelay = Math.random() * 5 + "s";
  document.body.appendChild(span);
}

var emojis = ["🐱", "🐶", "❤️"];
// Create 10 floating emoji elements (cycling through the emoji list)
for (var i = 0; i < 10; i++) {
  createFloatingEmoji(emojis[i % emojis.length]);
}
