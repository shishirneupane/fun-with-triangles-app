var lengths = document.querySelectorAll("input");
var checkButton = document.querySelector("#check-button");
var outputText = document.querySelector("#output-text");

checkButton.addEventListener("click", checkButtonHandler);


function checkButtonHandler() {

  var base = Number.parseFloat(lengths[0].value);
  var height = Number.parseFloat(lengths[1].value);

  // user input validations for "empty inputs or not" and "positive input lengths or not"
  if ((lengths[0].value !== "") && (lengths[1].value !== "")) {

    if ((Math.sign(base) === 1) && (Math.sign(height) === 1)) {

      outputText.style.display = "none";
      var area = calculateArea(base, height);
      console.log("Area of the triangle is", area);
      outputText.style.display = "block";
      outputText.style.fontSize = "2rem";
      outputText.innerText = `✅ Area of the triangle is: ${area} cm² ✅`;
      outputText.style.width = "65%";
    
    }
    
    else if ((Math.sign(base) === -1) || (Math.sign(height) === -1)) {
      showOutputText("Base and Height of a triangle can't be negative. Please enter positive lengths in both fields.");
    }
    
    else if ((Math.sign(base) === 0) || (Math.sign(height) === 0)) {
      showOutputText("Base and Height of a triangle can't be zero. Please enter positive lengths in both fields.");
    }
  
  }

  else if ((lengths[0].value === "") && (lengths[1].value === "")) {
    showOutputText("Enter length of both base and height given above. None should be empty.");
  }

  else if ((lengths[0].value === "") || (lengths[1].value === "")) {
    showOutputText("One out of two lengths is missing. Please enter length of both base and height.");
  }

}


function calculateArea(base, height) {

  var area = (base * height) / 2;
  return area.toFixed(2);

}


function showOutputText(msg) {
  
  outputText.style.display = "block";
  outputText.style.width = "40%";
  outputText.style.lineHeight = "2.5rem";
  outputText.style.fontSize = "1.6rem";
  outputText.innerText = msg;

}