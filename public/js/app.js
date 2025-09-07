const canvas = document.getElementById('wheel');
const ctx = canvas.getContext('2d');
const spinBtn = document.getElementById('spin');
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const answerForm = document.getElementById('answer-form');
const submitAnswer = document.getElementById('submit-answer');
const playersDiv = document.getElementById('players');
const setupDiv = document.getElementById('setup');
const gameDiv = document.getElementById('game');
const startGameBtn = document.getElementById('start-game');
const endGameBtn = document.getElementById('end-game');
const playerCountInput = document.getElementById('player-count');

let players = [];
let currentPlayer = 0;
let angle = 0;
let spinSpeed = 0;
let spinning = false;
let usedQuestions = {}; // To track used questions per category

// Colors for wheel sections
const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'];

// Draw the wheel
function drawWheel() {
  const arc = Math.PI * 2 / categories.length;
  categories.forEach((cat, i) => {
    ctx.beginPath();
    ctx.fillStyle = colors[i];
    ctx.moveTo(200, 200);
    ctx.arc(200, 200, 200, angle + arc * i, angle + arc * (i + 1), false);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.save();
    ctx.translate(200, 200);
    ctx.rotate(angle + arc * i + arc / 2);
    ctx.fillText(cat, 100, 0);
    ctx.restore();
  });
  // Arrow
  ctx.beginPath();
  ctx.moveTo(200, 0);
  ctx.lineTo(190, 20);
  ctx.lineTo(210, 20);
  ctx.fillStyle = '#000';
  ctx.fill();
}

// Initialize used questions
categories.forEach(cat => {
  usedQuestions[cat] = [];
});

// Start game setup
startGameBtn.addEventListener('click', () => {
  const numPlayers = parseInt(playerCountInput.value);
  players = [];
  for (let i = 1; i <= numPlayers; i++) {
    const name = prompt(`Enter name for Player ${i}:`) || `Player ${i}`;
    players.push({ name, score: 0 });
  }
  setupDiv.style.display = 'none';
  gameDiv.style.display = 'block';
  endGameBtn.style.display = 'block';
  updatePlayersDisplay();
  drawWheel();
});

// Update players scores display
function updatePlayersDisplay() {
  playersDiv.innerHTML = players.map(p => `<span class="player-score">${p.name}: ${p.score}</span>`).join('');
}

// Spin the wheel
spinBtn.addEventListener('click', () => {
  if (spinning) return;
  spinning = true;
  spinSpeed = Math.random() * 10 + 10;
  spin();
});

function spin() {
  angle += spinSpeed * Math.PI / 180;
  spinSpeed *= 0.98;
  drawWheel();
  if (spinSpeed > 0.1) {
    requestAnimationFrame(spin);
  } else {
    spinning = false;
    const arc = Math.PI * 2 / categories.length;
    const index = Math.floor(((Math.PI * 2 - (angle % (Math.PI * 2))) % (Math.PI * 2)) / arc);
    const category = categories[index];
    showQuestion(category);
  }
}

// Show question
function showQuestion(category) {
  const availQuestions = questions[category].filter((_, i) => !usedQuestions[category].includes(i));
  if (availQuestions.length === 0) {
    alert(`No more questions in ${category}!`);
    nextPlayer();
    return;
  }
  const qIndex = Math.floor(Math.random() * availQuestions.length);
  const question = questions[category][qIndex];
  usedQuestions[category].push(qIndex);

  questionText.textContent = `${category}: ${question.question}`;
  answerForm.innerHTML = question.options.map((opt, i) => `
    <label>
      <input type="checkbox" name="answer" value="${i}">
      ${opt}
    </label><br>
  `).join('');
  questionContainer.style.display = 'block';
  spinBtn.style.display = 'none';

  // Store current question for checking
  window.currentQuestion = question;
}

// Submit answer
submitAnswer.addEventListener('click', () => {
  const selected = Array.from(answerForm.querySelectorAll('input:checked')).map(input => parseInt(input.value));
  const correct = window.currentQuestion.correct;
  const isCorrect = selected.sort().toString() === correct.sort().toString();
  if (isCorrect) {
    players[currentPlayer].score += 100;
    alert('Correct! +100 points');
  } else {
    alert('Incorrect!');
  }
  updatePlayersDisplay();
  questionContainer.style.display = 'none';
  spinBtn.style.display = 'block';
  nextPlayer();
  checkEndGame();
});

// Next player
function nextPlayer() {
  currentPlayer = (currentPlayer + 1) % players.length;
  alert(`Next turn: ${players[currentPlayer].name}`);
}

// Check if all questions are exhausted
function checkEndGame() {
  const allUsed = categories.every(cat => usedQuestions[cat].length === questions[cat].length);
  if (allUsed) {
    showWinner();
  }
}

// End game manually
endGameBtn.addEventListener('click', showWinner);

function showWinner() {
  const maxScore = Math.max(...players.map(p => p.score));
  const winners = players.filter(p => p.score === maxScore).map(p => p.name).join(', ');
  alert(`Game Over! Winner(s): ${winners} with ${maxScore} points.`);
  // Optionally reset or something
}