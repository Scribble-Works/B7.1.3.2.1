// Fraction operation problems
const problems = [
    {
        problem: "2/3 + 1/4",
        steps: [
            "Find the least common denominator (LCD) of 3 and 4",
            "LCD = 12",
            "Convert fractions: 2/3 = 8/12, 1/4 = 3/12",
            "Add numerators: 8/12 + 3/12 = 11/12"
        ],
        options: [
            "Add the denominators: 3 + 4 = 7",
            "Find the least common denominator (LCD) of 3 and 4",
            "Multiply the fractions: 2/3 × 1/4 = 2/12",
            "Subtract the numerators: 2 - 1 = 1"
        ],
        correct: 1
    },
    {
        problem: "3 1/2 - 1 3/4",
        steps: [
            "Convert mixed numbers to improper fractions",
            "3 1/2 = 7/2, 1 3/4 = 7/4",
            "Find LCD of 2 and 4",
            "LCD = 4",
            "Convert fractions: 7/2 = 14/4, 7/4 = 7/4",
            "Subtract numerators: 14/4 - 7/4 = 7/4",
            "Convert back to mixed number: 7/4 = 1 3/4"
        ],
        options: [
            "Subtract whole numbers and fractions separately",
            "Convert mixed numbers to improper fractions",
            "Add the fractions together",
            "Multiply the denominators"
        ],
        correct: 1
    },
    {
        problem: "5/6 - 1/3",
        steps: [
            "Find the least common denominator (LCD) of 6 and 3",
            "LCD = 6",
            "Convert fractions: 5/6 stays 5/6, 1/3 = 2/6",
            "Subtract numerators: 5/6 - 2/6 = 3/6",
            "Simplify: 3/6 = 1/2"
        ],
        options: [
            "Subtract denominators: 6 - 3 = 3",
            "Find the least common denominator (LCD) of 6 and 3",
            "Add the fractions: 5/6 + 1/3 = 7/6",
            "Multiply numerators: 5 × 1 = 5"
        ],
        correct: 1
    },
    {
        problem: "1 2/5 + 3/10",
        steps: [
            "Convert mixed number to improper fraction",
            "1 2/5 = 7/5",
            "Find LCD of 5 and 10",
            "LCD = 10",
            "Convert fractions: 7/5 = 14/10, 3/10 stays 3/10",
            "Add numerators: 14/10 + 3/10 = 17/10",
            "Convert back to mixed number: 17/10 = 1 7/10"
        ],
        options: [
            "Add whole numbers first",
            "Convert mixed number to improper fraction",
            "Subtract the fractions",
            "Find the greatest common factor"
        ],
        correct: 1
    },
    {
        problem: "4/5 - 2/3",
        steps: [
            "Find the least common denominator (LCD) of 5 and 3",
            "LCD = 15",
            "Convert fractions: 4/5 = 12/15, 2/3 = 10/15",
            "Subtract numerators: 12/15 - 10/15 = 2/15"
        ],
        options: [
            "Divide the fractions",
            "Find the least common denominator (LCD) of 5 and 3",
            "Add the denominators",
            "Multiply the numerators"
        ],
        correct: 1
    },
    {
        problem: "2 1/3 + 1 1/2",
        steps: [
            "Convert mixed numbers to improper fractions",
            "2 1/3 = 7/3, 1 1/2 = 3/2",
            "Find LCD of 3 and 2",
            "LCD = 6",
            "Convert fractions: 7/3 = 14/6, 3/2 = 9/6",
            "Add numerators: 14/6 + 9/6 = 23/6",
            "Convert back to mixed number: 23/6 = 3 5/6"
        ],
        options: [
            "Add whole numbers: 2 + 1 = 3",
            "Convert mixed numbers to improper fractions",
            "Subtract the fractions",
            "Find the average"
        ],
        correct: 1
    },
    {
        problem: "7/8 - 1/4",
        steps: [
            "Find the least common denominator (LCD) of 8 and 4",
            "LCD = 8",
            "Convert fractions: 7/8 stays 7/8, 1/4 = 2/8",
            "Subtract numerators: 7/8 - 2/8 = 5/8"
        ],
        options: [
            "Subtract denominators: 8 - 4 = 4",
            "Find the least common denominator (LCD) of 8 and 4",
            "Add the fractions",
            "Multiply by reciprocal"
        ],
        correct: 1
    },
    {
        problem: "3 3/4 - 1 1/2",
        steps: [
            "Convert mixed numbers to improper fractions",
            "3 3/4 = 15/4, 1 1/2 = 3/2",
            "Find LCD of 4 and 2",
            "LCD = 4",
            "Convert fractions: 15/4 stays 15/4, 3/2 = 6/4",
            "Subtract numerators: 15/4 - 6/4 = 9/4",
            "Convert back to mixed number: 9/4 = 2 1/4"
        ],
        options: [
            "Subtract whole numbers and fractions separately",
            "Convert mixed numbers to improper fractions",
            "Add the numbers together",
            "Divide the fractions"
        ],
        correct: 1
    },
    {
        problem: "1/6 + 2/3",
        steps: [
            "Find the least common denominator (LCD) of 6 and 3",
            "LCD = 6",
            "Convert fractions: 1/6 stays 1/6, 2/3 = 4/6",
            "Add numerators: 1/6 + 4/6 = 5/6"
        ],
        options: [
            "Add denominators: 6 + 3 = 9",
            "Find the least common denominator (LCD) of 6 and 3",
            "Subtract the fractions",
            "Multiply denominators"
        ],
        correct: 1
    },
    {
        problem: "2 2/3 + 1 1/4",
        steps: [
            "Convert mixed numbers to improper fractions",
            "2 2/3 = 8/3, 1 1/4 = 5/4",
            "Find LCD of 3 and 4",
            "LCD = 12",
            "Convert fractions: 8/3 = 32/12, 5/4 = 15/12",
            "Add numerators: 32/12 + 15/12 = 47/12",
            "Convert back to mixed number: 47/12 = 3 11/12"
        ],
        options: [
            "Add whole numbers: 2 + 1 = 3",
            "Convert mixed numbers to improper fractions",
            "Find common numerator",
            "Subtract the fractions"
        ],
        correct: 1
    }
];

// DOM elements
const startScreen = document.getElementById('start-screen');
const processScreen = document.getElementById('process-screen');
const gameOverScreen = document.getElementById('game-over-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const problemText = document.getElementById('problem-text');
const problemCount = document.getElementById('problem-count');
const stepsDisplay = document.getElementById('steps-display');
const optionsContainer = document.getElementById('options-container');
const scoreElement = document.getElementById('score');
const feedbackMessage = document.getElementById('feedback-message');
const correctSound = document.getElementById('correctSound');
const incorrectSound = document.getElementById('incorrectSound');

// Game state
let currentProblemIndex = 0;
let score = 0;
let selectedAnswer = null;

// Initialize game
function initGame() {
    currentProblemIndex = 0;
    score = 0;
    showStartScreen();
}

// Show start screen
function showStartScreen() {
    startScreen.classList.remove('hidden');
    processScreen.classList.add('hidden');
    gameOverScreen.classList.add('hidden');
}

// Start the activity
function startActivity() {
    startScreen.classList.add('hidden');
    processScreen.classList.remove('hidden');
    loadProblem();
}

// Load current problem
function loadProblem() {
    selectedAnswer = null;
    const current = problems[currentProblemIndex];
    problemText.textContent = current.problem;
    problemCount.textContent = currentProblemIndex + 1;
    
    // Display steps
    displaySteps(current.steps);
    
    // Display options
    displayOptions(current.options);
}

// Display steps
function displaySteps(steps) {
    stepsDisplay.innerHTML = '';
    steps.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'step';
        stepElement.innerHTML = `<span class="step-number">${index + 1}.</span> ${step}`;
        stepsDisplay.appendChild(stepElement);
    });
}

// Display options
function displayOptions(options) {
    optionsContainer.innerHTML = '';
    options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.textContent = option;
        optionBtn.addEventListener('click', () => selectAnswer(index, options.length));
        optionsContainer.appendChild(optionBtn);
    });
}

// Play sound safely
function playSound(audioElement) {
    audioElement.currentTime = 0;
    audioElement.play().catch(e => console.log("Audio play prevented:", e));
}

// Handle answer selection
function selectAnswer(choiceIndex, totalOptions) {
    if (selectedAnswer !== null) return;
    selectedAnswer = choiceIndex;
    
    // Highlight selected button
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons[choiceIndex].classList.add('selected');
    
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);
    
    // Check answer
    const current = problems[currentProblemIndex];
    const isCorrect = choiceIndex === current.correct;
    
    if (isCorrect) {
        score++;
        playSound(correctSound);
    } else {
        playSound(incorrectSound);
    }
    
    // Move to next problem or end activity
    setTimeout(() => {
        currentProblemIndex++;
        if (currentProblemIndex < problems.length) {
            loadProblem();
        } else {
            endActivity();
        }
    }, 2000);
}

// End the activity
function endActivity() {
    processScreen.classList.add('hidden');
    gameOverScreen.classList.remove('hidden');
    
    scoreElement.textContent = score;
    
    let feedback = '';
    let feedbackClass = '';
    
    if (score >= 9) {
        feedback = "Excellent! You understand fraction operations thoroughly!";
        feedbackClass = 'excellent';
    } else if (score >= 7) {
        feedback = "Great job! You grasp the key concepts of fraction operations!";
        feedbackClass = 'good';
    } else if (score >= 5) {
        feedback = "Good effort! Review the fraction operation processes to improve.";
        feedbackClass = 'practice';
    } else {
        feedback = "Keep practicing! Understanding fraction operations takes time and practice.";
        feedbackClass = 'practice';
    }
    
    feedbackMessage.textContent = feedback;
    feedbackMessage.className = `feedback ${feedbackClass}`;
}

// Event listeners
startBtn.addEventListener('click', startActivity);
restartBtn.addEventListener('click', initGame);

// Initialize the game
initGame();