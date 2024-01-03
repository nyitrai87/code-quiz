//! Set of questions --> array of objects
//! Each question needs the following:
//! Question text
//! Set of answers
//! Which answer is correct

//! Landing page:
//! Explanation of the quiz
//! Start button

// Click the start button:
//! Landing page goes away
// Timer starts
// The first question appears (with its answers)

// For each question:
// User clicks an answer
// Their choice is compared to the correct answer as stored in the question's object
// If correct, tell them
// If incorrect, tell them AND subtract time from the timer
// Optional: play a sound for correct or incorrect
// Either way, the question disappears after a few seconds and the next question appears

// After the last question:
// Timer stops
// Question disappears
// Form appears for user to enter their initials
// Display their score

// User submits form
// Initials and score get stored in local storage
// User is taken to the high scores page
// High scores are listed, sorted highest to lowest
// User has option to take the quiz again

const questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        choices: ['<scripting>', '<script>', '<javascript>', '<js>'],
        correct: '<script>'
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        choices: ['The <head> section', 'The <body> section', 'Both the <head> section and the <body> section are correct'],
        correct: 'The <body> section'
    },
    {
        question: 'The external JavaScript file must contain the <script> tag.',
        choices: ['True', 'False'],
        correct: 'True'
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        choices: ['msg("Hello World");', 'alert("Hello World");', 'akertBox("Hello World");', 'msgBox("Hello World");'],
        correct: 'alert("Hello World");'
    },
    {
        question: 'How do you create a function in JavaScript?',
        choices: ['function myFunction()', 'function = myFunction()', 'function:myFunction()'],
        correct: 'function myFunction()'
    },
    {
        question: 'How to write an IF statement in JavaScript?',
        choices: ['if (i == 5)', 'if i = 5 then', 'if i == 5 then', 'if i = 5'],
        correct: 'if (i == 5)'
    },
    {
        question: 'How does a WHILE loop start?',
        choices: ['while i = 1 to 10', 'while (i <= 10; i++)', 'while (i <= 10)'],
        correct: 'while (i <= 10)'
    },
    {
        question: 'How does a FOR loop start?   ',
        choices: ['for i = 1 to 5', 'for (i = 0; i <= 5', 'for (i = 0; i <= 5; i++)', 'for (i <= 5; i++)'],
        correct: 'for (i = 0; i <= 5; i++)'
    },
    {
        question: 'How do you round the number 7.25, to the nearest integer?',
        choices: ['rnd(7.25)', 'round(7.25)', 'Math.round(7.25)', 'Math.rnd(7.25)'],
        correct: 'Math.round(7.25)'
    },
    {
        question: 'JavaScript is the same as Java.',
        choices: ['True', 'False'],
        correct: 'False'
    },
];

const startBtn = document.getElementById('start');
const startScreen = document.getElementById('start-screen');

function startQuiz(e) {
    e.preventDefault();
    startScreen.remove();
    document.getElementById('questions').setAttribute('class', 'start');
    playingQuiz();
}

startBtn.addEventListener('click', startQuiz);

function playingQuiz() {
    const qTitle = document.getElementById('question-title');
    const choicesList = document.getElementById('choices');
    const feedbackMsg = document.getElementById('feedback');

    for (let i = 0; i < questions.length; i++) {
        qTitle.textContent = questions[i].question;
        for (let j = 0; j < questions[i].choices.length; j++) {
            const choiceBtn = document.createElement('button');
            choiceBtn.textContent = questions[i].choices[j];
            choiceBtn.dataset.choice = choiceBtn.textContent;
            choicesList.append(choiceBtn);
        }

        choiceBtn.addEventListener('click', function () {
            feedbackMsg.setAttribute('class', 'feedback');

            if (choiceBtn.dataset.choice === questions[i].correct) {
                feedbackMsg.innerHTML = 'True!';
            } else {
                feedbackMsg.innerHTML = 'Wrong!';
            }
        })
    }
}