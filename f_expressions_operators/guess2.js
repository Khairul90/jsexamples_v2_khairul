let ans = 10;
let ansString = "ten";

let userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();

while (userInput !== "q" && userInput != "Q") { // as long as the user doesn't enter 'q' AND 'Q', run the loop


    while (userInput !== 'q') {


        if (userInput === 'q') {// If the user presses 'q' or 'Q', he quits
            }
             else if (userInput === 10 || userInput === "ten") {// If the user enter the correct answer, provide an alert
                alert("You are correct");
                break;
            }
            else if (!userInput === "") {// If the user puts in an empty string, provide an alert
                userInput = prompt("Your answer is empty. Please enter a value").toLowerCase();;


            }

            else if (userInput != 10 || userInput !== "ten") { // if the user enter a wrong answer, provide an alert as well
                alert("Answer incorrect.")
                userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();
            }
        }

    }