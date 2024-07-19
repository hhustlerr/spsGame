let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".container button");
const result = document.querySelector(".chance p");
const userScoreDisplay = document.getElementById("user-score");
const compScoreDisplay = document.getElementById("comp-score");
const userChoiceImage = document.getElementById("userChoiceImage");
const computerChoiceImage = document.getElementById("computerChoiceImage");

const genCompChoice = () => {
    const options = ["stone", "scissor", "paper"];
    const ranIndex = Math.floor(Math.random() * 3);
    return options[ranIndex];
};

const displayChoiceImage = (choice, isUser) => {
    const imgElement = isUser ? userChoiceImage : computerChoiceImage;
    switch (choice) {
        case 'stone':
            imgElement.src = 'rock_image.png';
            imgElement.alt = 'Stone';
            break;
        case 'scissor':
            imgElement.src = 'scissors_image.png';
            imgElement.alt = 'Scissor';
            break;
        case 'paper':
            imgElement.src = 'paper.png';
            imgElement.alt = 'Paper';
            break;
        default:
            imgElement.src = ''; // Default to no image if choice is invalid
            imgElement.alt = '';
            break;
    }
};

const draw = () => {
    result.innerText = "Game was a draw";

};

const showWinner = (userWin) => {
    if (userWin) {
        result.innerText = "Yeah!! you are on peak...";
        userScore++;
        userScoreDisplay.innerText = userScore;
        result.style.backgroundColor ="white";
    } else {
        result.innerText = "You lose!...nevermind!! Try again :)";
        compScore++;
        compScoreDisplay.innerText = compScore;
        result.style.backgroundColor ="lightyellow";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    displayChoiceImage(userChoice, true);
    displayChoiceImage(compChoice, false);

    if (userChoice === compChoice) {
        draw();
    } else {
        let userWin = true;

        if (userChoice === "stone") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else if (userChoice === "scissor") {
            userWin = compChoice === "stone" ? false : true;
        }

        showWinner(userWin);
    }
};

choices.forEach((button) => {
    const userChoice = button.parentNode.getAttribute("id");
    button.addEventListener("click", () => {
        playGame(userChoice);
    });
});
