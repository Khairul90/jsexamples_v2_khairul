// import and use package "parse" from numbers-from-words


let ans = 10;                                    // actual answer
const answerLookup = {                           // answer lookup table
    "one" : 1,
    "two": 2,
    "three": 3,
    "four" : 4,
    "five" : 5,
    "six" : 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "ten": 10,
    "eleven": 11,
    "twelve": 12,
    "thirteen": 13,
    "forteen": 14,
    "fifteen": 15,
    "sixteen": 16,
    "seventeen": 17,
    "eighteen": 18,
    "nineteen": 19,
    "twenty": 20,
};



const feedbackGuess = "Guess the number.";      // ask the user to guess a number
const feedbackQuit = "Press q or Q to quit.";   // allow the user to quit
const feedbackCorrect = "Your answer is correct"; // display when answer is correct
const feedbackWrong = "Your answwer is wrong";   // display when answer is wrong
const feedbackTooHigh = "Lower number please. Ytr again"; // display if the number is too high
const feedbackTooLow = "Higher number please. Try again."; //display if the number is too low
const feedbackEmpty = "Your answer is empty."; // display the number is empty

let userInput = prompt(feedbackGuess.concat("" + feedbackQuit)).toLowerCase();

// function to evaluate String Answer
function evaluateStringAnswer(userInput) {
    const evaluateStringAnswer = parse(userInput)
    return answerLookup[userInput] === ans;

}

while (userInput !== "q") { // as long as the user doesn't enter 'q' AND 'Q', run the loop

    let correctAns = false;         // flag (instantiated as false)
    let feedback = "";              // message placeholder (instantiated as empty string "")

    switch (true) {
        case (Number(userInput) === ans || evaluateAnswer(userInput)):          // answer is correct

            correctAns = true;
            feedback = feedbackCorrect;

            break;
        case (!userInput):                          // answer is empty (Boolean of an empty string === false, when !false === true)

            correctAns = false;
            feedback = feedbackEmpty;

            break;
        case (Number(userInput) > ans):            // answer is too high

            correctAns = false;
            feedback = feedbackTooHigh;

            break;
        case (Number(userInput < ans)):             // answer is too low

            correctAns = false;
            feedback = feedbackTooLow;
            break;

        default:
            correctAns = false;
            feedback = feedbackWrong;                   // answer is wrong

    }

    // prepare the feedback to the user
    // If answer is correct
    if (correctAns) {
        alert(feedback);
        break;
    }

    // otherwise (answer is wrong), continue to ask for input.
    alert(feedback);
    userInput = prompt(feedbackGuess.concat(" ", feedbackQuit)).toLowerCase();
}