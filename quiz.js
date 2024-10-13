function checkAnswer() {
  const correctAnswer = "4";
  
  const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
  
  if (selectedAnswer) {
      const userAnswer = selectedAnswer.value;
      
      const feedbackElement = document.getElementById("feedback");
      if (userAnswer === correctAnswer) {
          feedbackElement.textContent = "Correct! Well done.";
      } else {
          feedbackElement.textContent = "That's incorrect. Try again!";
      }
  } else {
      document.getElementById("feedback").textContent = "Please select an answer before submitting.";
  }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer); // Invoke checkAnswer on click
