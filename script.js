// Game Configuration
const MAX_QUESTIONS = 20;
let score = 0;
let questionNumber = 0;
let currentProblem = null;

// Benchmark Data (F: Fraction, D: Decimal, P: Percentage)
// Percentage values use the full, exact string for comparison where necessary.
const BENCHMARKS = [
    { F: "1/2", D: "0.5", P: "50%" },
    { F: "1/4", D: "0.25", P: "25%" },
    { F: "3/4", D: "0.75", P: "75%" },
    { F: "1/5", D: "0.2", P: "20%" },
    { F: "2/5", D: "0.4", P: "40%" },
    { F: "3/5", D: "0.6", P: "60%" },
    { F: "4/5", D: "0.8", P: "80%" },
    { F: "1/10", D: "0.1", P: "10%" },
    { F: "3/10", D: "0.3", P: "30%" },
    { F: "7/10", D: "0.7", P: "70%" },
    { F: "9/10", D: "0.9", P: "90%" },
    // Thirds - Special handling needed for display/comparison
    { F: "1/3", D: "0.333...", P: "33.3%" }, 
    { F: "2/3", D: "0.666...", P: "66.7%" },
];

const FORMATS = ["F", "D", "P"]; // Fraction, Decimal, Percentage

// Helper to shuffle arrays
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// --- DOM Elements ---
const problemDisplayEl = document.getElementById('conversion-problem');
const optionsContainer = document.getElementById('options-container');
const feedbackArea = document.getElementById('feedback-area');
const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const scoreTracker = document.getElementById('score-tracker');
const questionCounter = document.getElementById('question-counter');
const gameScreen = document.getElementById('game-screen');
const resultsScreen = document.getElementById('results-screen');
const finalScoreDisplay = document.getElementById('final-score-display');
const celebrationMessage = document.getElementById('celebration-message');

// --- Core Game Functions ---

/**
 * Generates distractors (incorrect options) that match the required format.
 */
function generateDistractors(correctFormat, correctAnswer) {
    const distractors = [];
    // Filter the full list of benchmarks to find options in the correct format
    const potentialDistractors = BENCHMARKS.filter(b => b[correctFormat] !== correctAnswer);
    
    // Shuffle and pick 3 unique distractors
    shuffle(potentialDistractors);
    
    for (let i = 0; i < 3 && i < potentialDistractors.length; i++) {
        distractors.push(potentialDistractors[i][correctFormat]);
    }
    return distractors;
}

/**
 * Handles the display of special repeating decimals/percentages.
 */
function formatDisplayValue(value) {
    if (value === "0.333...") return "0.33 (or 0.3̄)";
    if (value === "0.666...") return "0.67 (or 0.6̄)";
    if (value === "33.3%") return "33.3% or 33⅓%";
    if (value === "66.7%") return "66.7% or 66⅔%";
    return value;
}

function endGame() {
    gameScreen.style.display = 'none';
    resultsScreen.style.display = 'block';

    finalScoreDisplay.textContent = `${score} / ${MAX_QUESTIONS}`;

    const percentage = (score / MAX_QUESTIONS) * 100;
    let message = '';
    
    if (percentage >= 90) {
        message = "👑 Masterful! You know your conversions inside and out.";
    } else if (percentage >= 70) {
        message = "🌟 Excellent! Your recall is very strong.";
    } else if (percentage >= 50) {
        message = "👍 Good effort! Review the tenths and fifths to boost your score.";
    } else {
        message = "Keep practicing! Focus on the key benchmark equivalents.";
    }

    celebrationMessage.textContent = message;
}

/**
 * Loads a new conversion problem.
 */
function loadNewProblem() {
    if (questionNumber >= MAX_QUESTIONS) {
        endGame();
        return;
    }
    
    questionNumber++;
    questionCounter.textContent = questionNumber;

    // 1. Pick a random benchmark
    const benchmark = BENCHMARKS[Math.floor(Math.random() * BENCHMARKS.length)];
    
    // 2. Determine the source and target formats
    const sourceIndex = Math.floor(Math.random() * FORMATS.length);
    let targetIndex = Math.floor(Math.random() * FORMATS.length);
    // Ensure source and target are different
    while (sourceIndex === targetIndex) {
        targetIndex = Math.floor(Math.random() * FORMATS.length);
    }

    const sourceFormat = FORMATS[sourceIndex];
    const targetFormat = FORMATS[targetIndex];
    
    const sourceValue = benchmark[sourceFormat];
    const correctValue = benchmark[targetFormat];
    
    // 3. Display the problem
    problemDisplayEl.innerHTML = formatDisplayValue(sourceValue);
    
    // 4. Generate options
    const distractors = generateDistractors(targetFormat, correctValue);
    
    let options = [{ value: correctValue, display: formatDisplayValue(correctValue) }];
    
    distractors.forEach(d => {
        options.push({ value: d, display: formatDisplayValue(d) });
    });

    shuffle(options);
    optionsContainer.innerHTML = '';
    
    currentProblem = { correct: correctValue };
    
    // 5. Render options
    options.forEach(option => {
        const button = document.createElement('button');
        button.innerHTML = option.display;
        button.classList.add('option-button');
        button.setAttribute('data-value', option.value); 
        button.onclick = checkAnswer;
        optionsContainer.appendChild(button);
    });

    // Reset UI
    feedbackArea.textContent = 'Select the correct equivalent value.';
    feedbackArea.className = 'feedback';
    nextButton.style.display = 'none';
}

function checkAnswer(event) {
    // Disable all buttons to prevent multiple clicks
    document.querySelectorAll('.option-button').forEach(btn => btn.onclick = null);

    const selectedValue = event.target.getAttribute('data-value');
    const correctValue = currentProblem.correct;

    if (selectedValue === correctValue) {
        feedbackArea.textContent = '🥳 Correct! That’s a perfect conversion. (+1)';
        feedbackArea.className = 'feedback correct';
        event.target.style.backgroundColor = '#3cb371'; 
        score++;
        scoreTracker.textContent = score;
    } else {
        feedbackArea.textContent = '❌ Incorrect. Keep reviewing your benchmark equivalents.';
        feedbackArea.className = 'feedback incorrect';
        event.target.style.backgroundColor = '#dc143c'; 
        
        // Highlight the correct answer
        document.querySelectorAll('.option-button').forEach(btn => {
            if (btn.getAttribute('data-value') === correctValue) {
                btn.style.border = '4px solid #3cb371';
            }
        });
    }
    
    nextButton.style.display = 'block'; 
}

function startGame() {
    startButton.style.display = 'none'; // Hide Start button
    loadNewProblem();
}

// --- Event Listeners and Initial Load ---
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', loadNewProblem);

// Initial setup
window.onload = () => {
    // Hide problem and options until start button is pressed
    problemDisplayEl.innerHTML = '?';
    optionsContainer.innerHTML = ''; 
    nextButton.style.display = 'none';
};