var getStartedButton = document.querySelector("#btn-get-started");
var quizSection = document.querySelector("#quiz-section");
var submitQuizButton = document.querySelector("#btn-submit-quiz");

getStartedButton.addEventListener("click", getStartedButtonHandler);

function getStartedButtonHandler() {
  getStartedButton.style.display = "none";
  quizSection.style.display = "block";
  submitQuizButton.style.display = "block";
}