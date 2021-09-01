var angles = document.querySelectorAll("input");
var checkButton = document.querySelector("#check-button");
var outputText = document.querySelector("#output-text");

checkButton.addEventListener("click", checkButtonHandler);


function checkButtonHandler() {

  var angle1 = Number.parseFloat(angles[0].value);
  var angle2 = Number.parseFloat(angles[1].value);
  var angle3 = Number.parseFloat(angles[2].value);

  // user input validations for "empty inputs or not" and "positive input angles or not"
  if ((angles[0].value !== "") && (angles[1].value !== "") && (angles[2].value !== "")) {

    if ((Math.sign(angle1) === 1) && (Math.sign(angle2) === 1) && (Math.sign(angle3) === 1)) {
      outputText.style.display = "none";
      isTriangle(angle1, angle2, angle3);
    }
    
    else if ((Math.sign(angle1) === -1) || (Math.sign(angle2) === -1) || (Math.sign(angle3) === -1)) {
      showOutputText("Angles can't be negatives. Please enter positive angles in all fields.");
    }
    
    else if ((Math.sign(angle1) === 0) || (Math.sign(angle2) === 0) || (Math.sign(angle3) === 0)) {
      showOutputText("Angles can't be zeroes. Please enter positive angles in all fields.");
    }
  
  }

  else if ((angles[0].value === "") && (angles[1].value === "") && (angles[2].value === "")) {
    showOutputText("Enter all the three angles given above. None should be empty.");
  }

  else if ((angles[0].value === "") || (angles[1].value === "") || (angles[2].value === "")) {
    showOutputText("At least one out of three angles is missing. Please enter all angles.");
  }

}


function isTriangle(angle1, angle2, angle3) {

  if (calculateSumOfAngles(angle1, angle2, angle3)) {
    
    console.log("These angles form a triangle.");
    showOutputText("✅ Yes, these angles form a triangle. ✅");
    outputText.style.width = "40%";

  }
  
  else {

    console.log("These angles do not form a triangle.");
    showOutputText("❌ No, these angles do not form a triangle. ❌");
    outputText.style.width = "40%";
  
  }

}


function calculateSumOfAngles(angle1, angle2, angle3) {
  
  var sumOfAngles = angle1 + angle2 + angle3;
  
  return sumOfAngles === 180;

}


function showOutputText(msg) {

  outputText.style.display = "block";
  outputText.innerText = msg;
  outputText.style.width = "60%";

}