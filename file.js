// ===============================
// QUIZ QUESTIONS ARRAY
// ===============================
const quizQuestions = [
  {
    question: "What is the capital of France?",
    answer: "paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: "jupiter"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answer: "shakespeare"
  },
  {
    question: "What is the chemical symbol for water?",
    answer: "h2o"
  },
  {
    question: "What is 5 + 7?",
    answer: "12"
  }
];

// ===============================
// FUNCTION TO RUN QUIZ
// ===============================
function runQuiz() {
  let score = 0; // score counter

  // Loop through each question
  for (let i = 0; i < quizQuestions.length; i++) {
    let userAnswer = prompt(quizQuestions[i].question);

    // If user clicks cancel
    if (userAnswer === null) {
      alert("Quiz cancelled!");
      return;
    }

    // Normalize input
    userAnswer = userAnswer.toLowerCase().trim();

    // Check answer
    if (userAnswer === quizQuestions[i].answer) {
      alert("Correct! 🎉");
      score++;
    } else {
      alert(`Wrong ❌. The correct answer is: ${quizQuestions[i].answer}`);
    }
  }

  // Final score
  alert(`Quiz Completed!\nYour final score: ${score} / ${quizQuestions.length}`);
}

// ===============================
// RUN THE QUIZ
// ===============================
runQuiz();