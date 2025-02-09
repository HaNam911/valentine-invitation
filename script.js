// When the user clicks "Submit", check for a name and show the availability question.
document.getElementById("submitName").addEventListener("click", function() {
  var nameInput = document.getElementById("nameInput");
  var name = nameInput.value.trim();
  if (name === "") {
    alert("Please enter your name!");
    return;
  }
  
  // Hide the name input and submit button
  nameInput.style.display = "none";
  document.getElementById("submitName").style.display = "none";
  
  // Personalize and show the question
  var questionText = document.getElementById("questionText");
  questionText.textContent = name + ", are you free on Valentine's Day?";
  document.getElementById("question").style.display = "block";
  
  // Start playing the background music (triggered by user interaction).
  var bgMusic = document.getElementById("bgMusic");
  bgMusic.play().catch(function(error) {
    console.log("Playback prevented:", error);
  });
});

// If "Yes" is clicked in Stage 1, proceed to Stage 2.
document.getElementById("yesBtn").addEventListener("click", function() {
  document.getElementById("stage1").style.display = "none";
  document.getElementById("stage2").style.display = "block";
});

// When the "Yes" button in Stage 2 is clicked, show a final message.
document.getElementById("finalYesBtn").addEventListener("click", function() {
  alert("Yay! I'm so excited!");
});

// Make the "No" button move away when hovered over.
var noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", function() {
  var container = document.getElementById("question");
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var btnWidth = noBtn.offsetWidth;
  var btnHeight = noBtn.offsetHeight;
  var maxLeft = containerWidth - btnWidth;
  var maxTop = containerHeight - btnHeight;
  var randomLeft = Math.floor(Math.random() * maxLeft);
  var randomTop = Math.floor(Math.random() * maxTop);
  noBtn.style.left = randomLeft + "px";
  noBtn.style.top = randomTop + "px";
});
