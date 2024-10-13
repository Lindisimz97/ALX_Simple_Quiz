function checkAnswer(userAnswer) {
  const correctAnswer = "4";
  if (userAnswer === correctAnswer) {
      console.log("Correct! Well done.");
  } else {
      console.log("Incorrect. Please try again.");
  }
}

document.getElementById("submit-answer").addEventListener("click", function() {
  const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
  

  if (selectedAnswer) {
      const userAnswer = selectedAnswer.value;
      checkAnswer(userAnswer);
  } else {
      console.log("Please select an answer before submitting.");
  }
});
