let options = ["Stone", "Paper", "Scissors"];
let userScore = 0;
let computerScore = 0;

function updateScore() {
    document.getElementById("user-score").textContent = userScore;
    document.getElementById("computer-score").textContent = computerScore;
}

function UserChoice(choice) {
    console.log(`user picked ${choice}`);
    playGame(choice);
}

function playGame(userChoice) {
    let random = Math.floor(Math.random() * options.length);
    const picked = options[random];
    console.log(`computer picked ${picked}`);

    if (picked === userChoice) {
        console.log("its a draw");
        document.getElementById("result").textContent = "It's a draw!";
        document.getElementById("winner").textContent = "None";
    }
    else if ((userChoice === "Stone" && picked === "Scissors") ||
        (userChoice === "Paper" && picked === "Stone") ||
        (userChoice === "Scissors" && picked === "Paper")) {
        console.log("user wins");
        document.getElementById("result").textContent = "You win!";
        document.getElementById("winner").textContent = "You !!";
        userScore++;
    }
    else {
        console.log("computer wins");
        document.getElementById("result").textContent = "Computer wins!";
        document.getElementById("winner").textContent = "Computer !!";
        computerScore++;
    }
    
    updateScore();
}




