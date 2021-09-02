var getStartedButton = document.querySelector("#btn-get-started");
var quizSection = document.querySelector("#quiz-section");
var quizForm = document.querySelector("#quiz-form");
var submitQuizButton = document.querySelector("#btn-submit-quiz");
var outputText = document.querySelector("#output-text");

// array of correct answers
const correctAnswers = [
  '35°', 'Obtuse triangle', 'Isosceles triangle', '1/2 × bh', 'Acute triangle', 'Right angled triangle', 'One obtuse angle', '687.5 cm²'
];

getStartedButton.addEventListener("click", getStartedButtonHandler);

submitQuizButton.addEventListener("click", submitQuizButtonHandler);


function getStartedButtonHandler() {
  getStartedButton.style.display = "none";
  quizSection.style.display = "block";
  submitQuizButton.style.display = "block";
}


function submitQuizButtonHandler() {

  let score = 0;
  let index = 0;

  const formResults = new FormData(quizForm);

  console.log("Initial Score:", score);
  
  for (let value of formResults.values()) {
    console.log("User Input:", value);

    if (value === correctAnswers[index]) {
      console.log(value, "is the correct answer ✅");
      score++;
    }
    
    else {
      console.log(value, "is not the correct answer ❌");
      console.log("The correct answer is:", correctAnswers[index]);
    }
    
    console.log("Current Score:", score);
    index++;
  }

  console.log("Final Score:", score);
  
  if (score !== 0) {
    showOutputText(`You answered ${score} out of ${correctAnswers.length} questions correctly. ✅`);
  }
  
  else {
    showOutputText(`You answered ${score} out of ${correctAnswers.length} questions correctly. ❌`);
  }

}


function showOutputText(msg) {
  outputText.style.display = "block";
  outputText.innerText = msg;
}