// let's try abit of a trivia using a prompt in the web browser
function greetUser(){
    let userName = prompt("Please enter your name:");
    
    if(userName){   // what if the user enters a series of spaces, what happens
        alert(`Welcome to FSD ${userName}!!!`);
    }
}
 
greetUser();