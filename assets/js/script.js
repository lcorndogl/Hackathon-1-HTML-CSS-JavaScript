// Global variables accessed by multiple functions
const guessedLetters = [];
let question = '';
let answer = '';
let currentScore = 0;
let highScore = 0;
let guessedAnswer = [];

window.document.addEventListener('DOMContentLoaded', function () {
    //This code will run after the page loads
    initialiseGame();

    let nextQuestionButton = document.getElementById('submit-button');
    nextQuestionButton.addEventListener("click", function () {
        //Submit button funtionality goes here
        initialiseGame();
    })

    let newGameButton = document.getElementById('new-game-button');
    newGameButton.addEventListener("click", function () {
        //New game button funtionality goes here
       if (currentScore > highScore) {
           highScore = currentScore;
           updateHighScoreDisplay();
       }
        initialiseGame();
    })


    document.getElementById('user-guess').addEventListener('keydown', function(event) { 
        if (event.key === 'Enter') {
            
            let guess = document.getElementById('user-guess').value;
            guessAnswer(guess);
            updateCurrentScoreDisplay();
            document.getElementById('user-guess').value = '';
        }
    })


    let cheatButton = document.getElementById('cheat-button')
    cheatButton.addEventListener('click', function () {
        //Cheat button funtionality goes here
        
        let cheatCost = 100;
        if (currentScore >= cheatCost) {
            currentScore -= cheatCost;
            console.log('Cheat');
            cheat();
        } else {
            //check syntax
            cheatButton.setAttribute('innertext', 'Not enough points');
        }
    })

    let submitButton = document.getElementById('submit-button')
    submitButton.addEventListener('click', function () {
        //Submit button funtionality goes here
        let guess = document.getElementById('user-guess').value;
        guessAnswer(guess);
        updateCurrentScoreDisplay();
        document.getElementById('user-guess').value = '';
    })

})

function initialiseGame() {
    //Initialise the game
    startGame();
    currentScore = 200;
    
    updateQuestionText();
    updateQuestionDisplay();
    updateCurrentScoreDisplay();
    updateHighScoreDisplay();
    document.getElementById('submit-button').innerText = "Next Question";
}   

/** This function is run whenever a new question is generated
 * It gets the question and answer and modifies the DOM to display it */
function startGame() {
    // Calls the getQuestion function to get a question
    question = getQuestion();
    // Calls the getAnswer function to get the answer to the question
    answer = getAnswer(question);
    guessedAnswer.length = 0;
    let i = 0;

    for (char of answer) {
        if (char === " ") {
            guessedAnswer[i] = char;
        }
        else {
            guessedAnswer[i] = "_";
        }
        // console.log(char);
        // console.log(i);
        i++;
    }

    // Console log to ensure the question and answers are retrieved correctly
    // console.log(question);
    // console.log(answer);

    // console.log(guessedLetters);
    // console.log(guessedLetters.length);

    // Reset the guessed letters array
    guessedLetters.length = 0;
    // console.log(guessedLetters.length);
    // console.log(guessedLetters);
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
        { question: "What is the fastest mammal in the world?", answer: "Brazilian Free-tailed Bat" },
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

function updateQuestionDisplay() {
    // Update the question display
    let questionDisplay = document.getElementById('word-display');
    let updateValue = guessedAnswer.join(" ");
    questionDisplay.innerText = updateValue;
}

function updateQuestionText() {
    // Update the question text
    let questionText = document.getElementById('question');
    questionText.innerText = question;
}

function updateCurrentScoreDisplay() {
    // Update the current score display
    document.getElementById('current-score').innerText = currentScore;
    
}

function updateHighScoreDisplay() {
    // Update the current score display
    
    document.getElementById('high-score').innerText = highScore;
    
}


/** This function should be run when the user makes a guess
 * Guesses should be triggered by clicking the enter key
 * This function should check if the guess is correct and display the result
 */
function guessAnswer(guess) {
    // Arrays containing the vowels and consonants
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    //Array of valid guesses
    const validGuess = [].concat(vowels, consonants, " ");

    console.log(guess)
    //check if the guess is valid
    for (let char of guess) {
        if (!validGuess.includes(char.toLowerCase())) {
            console.log('Invalid guess');
            return;
        } console.log("Char check ran");
    }

    // Checks if the user has guessed the entire answer
    console.log(guess.trim());
    if (guess.trim().length > 1) {
        // Check if the answer is correct and display Solved or Incorrect
        if (guess.toLowerCase() === answer.toLowerCase()) {
            console.log('SOLVED!');
        } else {
            console.log('INCORRECT!');
        }
    } else {
        // check if the user has already guessed that letter, if they have display an error
        console.log(guessedLetters);
        if (guessedLetters.includes(guess.toLowerCase())) {
            console.log('You have already guessed that letter');
        } else {
            guessedLetters.push(guess.toLowerCase());
            console.log(guessedLetters);
        }

        // check if the user's guess is in the answer, if it is reveal the letter in the answer
        if (answer.toLowerCase().includes(guess.toLowerCase())) {
            revealLetter(guess.toLowerCase())
            currentScore += 100;
        } else {
            console.log('Incorrect guess');
            currentScore -= 50;
        }

        // check if the user's guess is a vowel, if it is subtract 50 points from the user's score
        if (vowels.includes(guess.toLowerCase())) {
            console.log('Vowel');
            if (currentScore >= 50) {
                currentScore -= 50;
            } else {
                console.log('Not enough points');
            }
        } else {
            console.log('Consonant');
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
}

/** This function should be run when the user clicks the cheat button
 * It should check if the user has enough points/hearts to cheat
 * If the user does it will reveal a letter of the answer
 */
function cheat() {
    let stillBlank = [];
    //create an array of the positions of the blank spaces in guessedAnswer
    
    for (let i = 0; i < guessedAnswer.length; i++) {
        if (guessedAnswer[i] === "_") {
            stillBlank.push(i);
        }
        console.log(stillBlank);
    }
    let randomPos = Math.floor(Math.random() * stillBlank.length);
    let cheatCharPos = stillBlank[randomPos];

    let cheatChar = answer[cheatCharPos];
    revealLetter(cheatChar);
     //Update guessedAnswer with the cheat letter
    guessedAnswer[cheatCharPos] = cheatChar;

    //If the revealLetter function also adds score, this function will do an appropriate subtraction imediately below
}