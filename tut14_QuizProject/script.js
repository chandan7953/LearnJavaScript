const questionContainer = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const timerElement = document.getElementById("time");
const container = document.getElementById("quiz-container");

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let totalTime = 60;
let sec = totalTime;

// Fetch questions from the API
fetch("https://opentdb.com/api.php?amount=10&type=multiple")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    questions = data.results;
    displayQuestion(currentQuestionIndex);
    startTimer();
  });

// for timing
function startTimer() {
  //sec = totalTime;
  timerElement.innerHTML = sec;
  sec--;
  if (sec <= 0) {
    sec = totalTime;
    clearInterval(timer);
    displayQuestion(currentQuestionIndex);
    currentQuestionIndex++;
  }
}

function shuffledArray(answers) {
  minIndex = 0;
  maxIndex = 3;

  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (maxIndex - minIndex) + minIndex);
    [answers[i], answers[j]] = [answers[j], answers[i]];
    // console.log(`j -> ${j}  arr -> ${answers}`);
  }

  // console.log("Shuffled Answers:", answers);
}

// Display a question
function displayQuestion(index) {
  sec = totalTime;

  clearInterval(timer);
  startTimer();
  timer = setInterval(startTimer, 1000);
  const question = questions[index];
  questionContainer.textContent = question.question;
  answersContainer.innerHTML = "";
  const answers = [...question.incorrect_answers, question.correct_answer];
  shuffledArray(answers);
  answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.onclick = () => selectAnswer(answer, question.correct_answer);
    answersContainer.appendChild(button);
  });
}

// Handle answer selection
function selectAnswer(answer, correctAnswer) {
  if (answer === correctAnswer) score++;
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
  } else {
    endQuiz();
  }
}

// Navigate to the next question
nextButton.onclick = () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
  }
};

// Navigate to the previous question
prevButton.onclick = () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion(currentQuestionIndex);
  }
};

// End the quiz
const scored = document.getElementById("score");
const preScore = document.getElementById("preScore");
function endQuiz() {
  clearInterval(timer);
  container.style.display = "none";
  scored.style.display = "block";
  preScore.style.display = "block";
  scored.innerHTML = `Quiz ended! Your score is ${score}`;
  saveScoreToSessionStorage(score);
  displayHighestScore();
}

function saveScoreToSessionStorage(score) {
  // Retrieve the highest score from local storage or initialize to 0
  const highestScore = sessionStorage.getItem("highestScore") || 0;

  // Compare the current score with the highest score and update if necessary
  if (score > highestScore) {
    sessionStorage.setItem("highestScore", score);
  }
}
function displayHighestScore() {
  const highestScore = sessionStorage.getItem("highestScore") || 0;

  // Display the highest score in the "highestScoreDiv"
  preScore.innerHTML = `Highest Score: ${highestScore}`;
}
