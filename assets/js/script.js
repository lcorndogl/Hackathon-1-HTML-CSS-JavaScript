// Global variables accessed by multiple functions
const guessedLetters = [];
let question = '';
let answer = '';
let currentScore = 0;
let highScore = 0;
let guessedAnswer = [];
let allowNextQuestion = false;

window.document.addEventListener('DOMContentLoaded', function () {
    //This code will run after the page loads
    initialiseGame();

    // Functionality for the next question button to work
    let nextQuestionButton = document.getElementById('submit-button');
    nextQuestionButton.addEventListener("click", function () {
        // check the user has guessed the answer before moving to the next question
        if (!allowNextQuestion) {
            updateFeedback('You must guess the answer before moving to the next question');
            return;
        }
        //Submit button funtionality goes here
        startGame();
    });

    // Functionality for the new game button to work
    let newGameButton = document.getElementById('new-game-button');
    newGameButton.addEventListener("click", function () {
        //New game button funtionality goes here
        // Declare variables for the attempts
        let attempt3, attempt2, attempt1 = 0;
        // Sets variables to the values of the preceeding attempts
        attempt3 = document.getElementById('attempt-2').innerText;
        attempt2 = document.getElementById('attempt-1').innerText;
        attempt1 = document.getElementById('current-score').innerText;

        // Updates the attempts in the DOM
        document.getElementById('attempt-3').innerText = attempt3;
        document.getElementById('attempt-2').innerText = attempt2;
        document.getElementById('attempt-1').innerText = attempt1;

        // Check if the score is higher than the previous highscore
        // Update high score if it is
        if (currentScore > highScore) {
            highScore = currentScore;
            updateHighScoreDisplay();
        }
        initialiseGame();
    });

    // Listens for enter and for user guesses
    document.getElementById('user-guess').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            // takes the user input 
            let guess = document.getElementById('user-guess').value;
            guessAnswer(guess);
            updateCurrentScoreDisplay();
            updateLettersUsedDisplay();
            // clears the text box after user guess 
            document.getElementById('user-guess').value = '';
        }
    });

    let cheatButton = document.getElementById('cheat-button')
    cheatButton.addEventListener('click', function () {
        //Cheat button funtionality goes here
        let cheatCost = 100;
        // Check if the user has enough points to cheat 
        if (currentScore >= cheatCost) {
            currentScore -= cheatCost;
            console.log('Cheat');
            cheat();
        } else {
            // If the user does not have enough points to cheat display an error message
            cheatButton.innerText = 'Not enough points';
        }
    })
})

/** Initialises a new game
 * Should update attempts 1/2/3, highscore if applicable
 * Reset rest of the page to initial state
 */
function initialiseGame() {
    //Initialise the game
    // Gets a question and answer pair 
    startGame();
    currentScore = 200;

    // Update the DOM 
    updateQuestionText();
    updateQuestionDisplay();
    updateCurrentScoreDisplay();
    updateHighScoreDisplay();
    // Cheakily change the submit button text to "Next Question"
    // without having to modify the HTML/logic referring to the button
    document.getElementById('submit-button').innerText = "Next Question";
}

/** This function is run whenever a new question is generated
 * It gets the question and answer and modifies the DOM to display it */
function startGame() {
    // Calls the getQuestion function to get a question
    question = getQuestion();
    // Calls the getAnswer function to get the answer to the question
    answer = getAnswer(question);
    allowNextQuestion = false;
    guessedAnswer.length = 0;
    let i = 0;
    // Display masked answer on screen without replacing spaces
    for (char of answer) {
        if (char === " ") {
            guessedAnswer[i] = char;
        }
        else {
            guessedAnswer[i] = "_";
        }
        i++;
    }

    // Reset the guessed letters array
    guessedLetters.length = 0;
    updateQuestionText();
    updateQuestionDisplay();
    document.getElementById("letters-used").innerText = "None - Make your first guess!";
    updateFeedback('<br>');
}

/** This function contains the questions and will return one at random */
function getQuestion() {
    // Array of questions
    const questions = [
        "What is the capital of France?",
        "What is the largest planet in our solar system?",
        "What is the smallest planet in our solar system?",
        "What is the largest mammal in the world?",
        "What is the largest bird in the world?",
        "What is the smallest bird in the world?",
        "What is the smallest mammal in the world?",
        "What is the fastest land animal in the world?",
        "What is the fastest bird in the world?",
        "What is the fastest fish in the world?",
        "What is the fastest mammal in the world?",
        "What is the tallest mountain in the world?",
        "What is the largest ocean in the world?",
        "What is the smallest ocean in the world?",
        "What is the largest sea in the world?",
        "What is the smallest sea in the world?",
        "What is the largest lake in the world?",
        "What is the smallest lake in the world?",
        "What is the largest river in the world?",
        "What is the smallest river in the world?",
        "What is the largest island in the world?",
        "What is the smallest island in the world?",
        "What is the largest country in the world?",
        "What is the smallest country in the world?",
        "What is the largest continent in the world?",
        "What is the smallest continent in the world?",
        "What is the largest desert in the world?",
        "What is the smallest desert in the world?",
        "What is the largest forest in the world?",
        "What is the smallest forest in the world?",
        "What is the largest canyon in the world?",
        "What is the smallest canyon in the world?",
        "What is the largest waterfall in the world?",
        "What is the smallest waterfall in the world?",
        "What is the largest volcano in the world?",
        "What is the smallest volcano in the world?",
        "What is the largest lake in Africa?",
        "What is the smallest lake in Africa?",
        "What is the largest river in Africa?",
        "What is the smallest river in Africa?",
        "What is the largest island in Africa?",
        "What is the smallest island in Africa?",
        "What is the largest country in Africa?",
        "What is the smallest country in Africa?",
        "What is the largest desert in Africa?",
        "What is the smallest desert in Africa?"];

    // Generate a random number between 0 and the length of the questions array
    const questionNo = Math.floor(Math.random() * questions.length);

    // return the question that has been randomly selected
    return questions[questionNo];
}

/** This function contains the questions and answers,
 * The question is passed in and it returns the answer
 */
function getAnswer(question) {
    // Array of the questions and the answers attached to them
    const answers = [
        { question: "What is the capital of France?", answer: "Paris" },
        { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
        { question: "What is the smallest planet in our solar system?", answer: "Mercury" },
        { question: "What is the largest mammal in the world?", answer: "Blue Whale" },
        { question: "What is the largest bird in the world?", answer: "Ostrich" },
        { question: "What is the smallest bird in the world?", answer: "Bee Hummingbird" },
        { question: "What is the smallest mammal in the world?", answer: "Bumblebee Bat" },
        { question: "What is the fastest land animal in the world?", answer: "Cheetah" },
        { question: "What is the fastest bird in the world?", answer: "Peregrine Falcon" },
        { question: "What is the fastest fish in the world?", answer: "Sailfish" },
        { question: "What is the fastest mammal in the world?", answer: "Brazilian Free tailed Bat" },
        { question: "What is the tallest mountain in the world?", answer: "Mount Everest" },
        { question: "What is the largest ocean in the world?", answer: "Pacific Ocean" },
        { question: "What is the smallest ocean in the world?", answer: "Arctic Ocean" },
        { question: "What is the largest sea in the world?", answer: "Philippine Sea" },
        { question: "What is the smallest sea in the world?", answer: "Sea of Marmara" },
        { question: "What is the largest lake in the world?", answer: "Caspian Sea" },
        { question: "What is the smallest lake in the world?", answer: "Benxi Lake" },
        { question: "What is the largest river in the world?", answer: "Amazon River" },
        { question: "What is the smallest river in the world?", answer: "Reprua River" },
        { question: "What is the largest island in the world?", answer: "Greenland" },
        { question: "What is the smallest island in the world?", answer: "Just Room Enough Island" },
        { question: "What is the largest country in the world?", answer: "Russia" },
        { question: "What is the smallest country in the world?", answer: "Vatican City" },
        { question: "What is the largest continent in the world?", answer: "Asia" },
        { question: "What is the smallest continent in the world?", answer: "Oceania" },
        { question: "What is the largest desert in the world?", answer: "Antarctica" },
        { question: "What is the smallest desert in the world?", answer: "Carcross Desert" },
        { question: "What is the largest forest in the world?", answer: "Amazon Rainforest" },
        { question: "What is the smallest forest in the world?", answer: "Kakamega Forest" },
        { question: "What is the largest canyon in the world?", answer: "Yarlung Tsangpo Grand Canyon" },
        { question: "What is the smallest canyon in the world?", answer: "Kali Gandaki Gorge" },
        { question: "What is the largest waterfall in the world?", answer: "Angel Falls" },
        { question: "What is the smallest waterfall in the world?", answer: "Mill Pond Falls" },
        { question: "What is the largest volcano in the world?", answer: "Mauna Loa" },
        { question: "What is the smallest volcano in the world?", answer: "Mount Taal" },
        { question: "What is the largest lake in Africa?", answer: "Lake Victoria" },
        { question: "What is the smallest lake in Africa?", answer: "Lake Natron" },
        { question: "What is the largest river in Africa?", answer: "Nile River" },
        { question: "What is the smallest river in Africa?", answer: "Roe River" },
        { question: "What is the largest island in Africa?", answer: "Madagascar" },
        { question: "What is the smallest island in Africa?", answer: "Migingo Island" },
        { question: "What is the largest country in Africa?", answer: "Algeria" },
        { question: "What is the smallest country in Africa?", answer: "Saint Helena, Ascension and Tristan da Cunha" },
        { question: "What is the largest desert in Africa?", answer: "Sahara Desert" },
        { question: "What is the smallest desert in Africa?", answer: "Red Desert" }
    ]
    // Find the answer that corresponds to the question that was passed in
    // Created by CoPilot
    const qAnswer = answers.find(ans => ans.question === question);
    return qAnswer.answer;
}

/** Add feedback for the user to the DOM */
function updateFeedback(feedback) {
    // Update the feedback display
    document.getElementById('feedback').innerHTML = feedback;
}

/** Updates the masked question in the DOM */
function updateQuestionDisplay() {
    // Update the question display
    let questionDisplay = document.getElementById('word-display');
    let updateValue = guessedAnswer.join("");
    questionDisplay.innerText = updateValue;
}

/** Updates the question in the DOM */
function updateQuestionText() {
    // Update the question text
    let questionText = document.getElementById('question');
    questionText.innerText = question;
}

/** Updates the current score in the DOM */
function updateCurrentScoreDisplay() {
    // Update the current score display
    document.getElementById('current-score').innerText = currentScore;

}

/** Updates the letters used in the DOM */
function updateLettersUsedDisplay() {
    // Update the letters guessed in alphabetical order - Thanks steve for the sort idea!
    const lettersUsed = [];

    // Cycle through the letters in a new string/array guessed letters array
    // Add the (in)correct class to the letters in the guessed letters array
    for (let char in guessedLetters.sort()) {
        if (answer.includes(guessedLetters[char])) {
            lettersUsed.push(`<span class="correct"> ${guessedLetters[char]}</span>`);
        } else {
            lettersUsed.push(`<span class="incorrect"> ${guessedLetters[char]}</span>`);
        }
    }
    // Update the letters Used in the DOM
    document.getElementById("letters-used").innerHTML = lettersUsed.join(", ");
}

/** Updates the highscore */
function updateHighScoreDisplay() {
    // Update the current score display
    document.getElementById('high-score').innerText = highScore;
}

/** This function should be run when the user makes a guess
 * Guesses should be triggered by clicking the enter key
 * This function should check if the guess is correct and display the result
 */
function guessAnswer(guess) {
    // Check if the question has already been answered
    //to prevent the user from repeatedly answering the same question for points
    if (allowNextQuestion) {
        updateFeedback('You have already solved this question');
        return;
    }

    // Arrays containing the vowels and consonants
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    //Array of valid guesses
    const validGuess = [].concat(vowels, consonants, " ");

    // Reset feedback elements on next user action
    document.getElementById('cheat-button').innerText = 'Cheat';
    updateFeedback('<br>');

    //check if the guess is valid
    // check that the guess is not an empty string
    if (guess.length === 0) {
        updateFeedback("Guesses cannot be blank");
        console.log('Space');
        return;
    }
    // check that the guess is a valid character
    for (let char of guess) {
        if (!validGuess.includes(char.toLowerCase())) {
            updateFeedback('Invalid guess - only letters are valid guesses unless you are guessing the entire answer where spaces are also valid');
            return;
        }
    }

    // check if the user's guess is a vowel, if it is subtract 50 points from the user's score
    if (vowels.includes(guess.toLowerCase())) {
        if (currentScore >= 50) {
            currentScore -= 50;
        } else {
            updateFeedback('Not enough points - Vowels cost 50 points');
            return;
        }
    }

    // Checks if the user has guessed the entire answer
    console.log(guess.trim());
    if (guess.trim().length > 1) {
        // Check if the answer is correct and display Solved or Incorrect
        if (guess.toLowerCase() === answer.toLowerCase()) {
            updateQuestionDisplay();
            updateFeedback('SOLVED!');
            // Calculate the score for correct answers
            let awardScore = (1000 - guessedLetters.length ** 2 - guessedLetters.length * 100);
            if (awardScore < 0) {
                return;
            }

            // Update the score on the DOM
            currentScore += awardScore;
            updateCurrentScoreDisplay();
            // Allow the next question to be generated
            allowNextQuestion = true;
            // Updates the answer in the DOM when guessing a full phrase
            revealAnswer(guess.toLowerCase());
        } else {
            updateFeedback('Incorrect - Guess again!');
        }
    } else {
        // check if the user has already guessed that letter, if they have display an error
        if (guessedLetters.includes(guess.toLowerCase())) {
            updateFeedback('You have already guessed that letter, please try another');
            return;
        } else {
            guessedLetters.push(guess.toLowerCase());
        }

        // check if the user's guess is in the answer, if it is reveal the letter in the answer
        if (answer.toLowerCase().includes(guess.toLowerCase())) {
            revealLetter(guess.toLowerCase())
            currentScore += 100;
        } else {
            currentScore -= 50;
        }
        // check if the user has guessed the entire answer
        for (char of answer) {
            if (guessedAnswer.includes("_")) {
                return;
            } else {
                updateFeedback('SOLVED!');
                updateCurrentScoreDisplay();
                allowNextQuestion = true;
            }
        }
    }
}

/** This function checks how many times a guess is found in the answer
* It updates the guessedAnswers with the letters guessed and calls the function to update this one screen
*/
function revealLetter(guess) {
    // Creates array to store the locations the guessed letter occurs at
    positions = [];
    let i = 0;
    // checks if the guessed character occurs at each position in the answer
    for (char of answer) {
        if (char.toLowerCase() === guess.toLowerCase()) {
            // Pushes the position number into the positions array each time the guessed letter is found
            positions.push(i);
        }
        i++;
        console.log(positions);
    }
    for (i of positions) {
        guessedAnswer[i] = answer[i];
    }
    updateQuestionDisplay();
    updateCurrentScoreDisplay();
}

/** Updates the DOM with the correct answer */
function revealAnswer(guess) {
    // Updates the guessedAnswer array with the correct answer
    let i = 0;
    for (char of answer) {
        guessedAnswer[i] = char;
        i++;
    }
    updateQuestionDisplay();
    updateCurrentScoreDisplay();
}

/** This function should be run when the user clicks the cheat button
 * It should check if the user has enough points/hearts to cheat
 * If the user does it will reveal a letter of the answer
 */
function cheat() {
    // Create an array of the positions of the blank spaces in guessedAnswer
    let stillBlank = [];

    // Populates the array position of unguessed characters
    for (let i = 0; i < guessedAnswer.length; i++) {
        if (guessedAnswer[i] === "_") {
            stillBlank.push(i);
        }
    }
    // Generates a random number between 0 and the length of the stillBlank array
    // Selects the unguessed character in the position returned of the stillBlank array
    let randomPos = Math.floor(Math.random() * stillBlank.length);
    let cheatCharPos = stillBlank[randomPos];
    let cheatChar = answer[cheatCharPos];
    revealLetter(cheatChar);
    // Add the cheat letter to the guessed letters array
    guessedLetters.push(cheatChar);
    updateLettersUsedDisplay();

    //Update guessedAnswer with the cheat letter
    guessedAnswer[cheatCharPos] = cheatChar;
}