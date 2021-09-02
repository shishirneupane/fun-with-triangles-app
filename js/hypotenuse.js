var sides = document.querySelectorAll("input");
var checkButton = document.querySelector("#check-button");
var outputText = document.querySelector("#output-text");

checkButton.addEventListener("click", checkButtonHandler);


function checkButtonHandler() {

  var side1 = Number.parseFloat(sides[0].value);
  var side2 = Number.parseFloat(sides[1].value);

  // user input validations for "empty inputs or not" and "positive input sides or not"
  if ((sides[0].value !== "") && (sides[1].value !== "")) {

    if ((Math.sign(side1) === 1) && (Math.sign(side2) === 1)) {

      outputText.style.display = "none";
      var hypoLength = calculateHypotenuse(side1, side2);
      console.log("The length of the hypotenuse is", hypoLength);
      outputText.style.display = "block";
      outputText.style.fontSize = "2rem";
      outputText.innerText = `✅ The length of hypotenuse is: ${hypoLength} cm ✅`;
    
    }
    
    else if ((Math.sign(side1) === -1) || (Math.sign(side2) === -1)) {
      showOutputText("Length of sides can't be negatives. Please enter positive lengths in both fields.");
    }
    
    else if ((Math.sign(side1) === 0) || (Math.sign(side2) === 0)) {
      showOutputText("Length of sides can't be zeroes. Please enter positive lengths in both fields.");
    }
  
  }

  else if ((sides[0].value === "") && (sides[1].value === "")) {
    showOutputText("Enter length of both sides given above. None should be empty.");
  }

  else if ((sides[0].value === "") || (sides[1].value === "")) {
    showOutputText("One out of two lengths is missing. Please enter length of both sides.");
  }

}


function calculateHypotenuse(side1, side2) {

  var hypoLength = Math.sqrt(side1 ** 2 + side2 ** 2);
  return hypoLength.toFixed(2);

}


function showOutputText(msg) {
  
  outputText.style.display = "block";
  outputText.style.fontSize = "1.6rem";
  outputText.innerText = msg;

}