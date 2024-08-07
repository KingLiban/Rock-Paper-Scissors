let humanScore = 0;
let computerScore = 0

document.addEventListener('DOMContentLoaded', () => {
    createButtons();
})

function createButtons() {
    const choices = ['rock', 'paper', 'scissors'];
    const div = document.createElement("div");

    choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.toUpperCase();
        button.id = choice;
        button.addEventListener('click', () => handleHumanChoice(choice))
        div.appendChild(button);
    });

    document.body.appendChild(div);
}

function handleHumanChoice(choice) { 
    let computerChoice = getComputerChoice();

    if (
        (choice === "scissors" && computerChoice === "paper") ||
        (choice === "paper" && computerChoice === "rock") || 
        (choice === "rock" && computerChoice === "scissors") 
    ) {
        humanScore++;
    } else if (choice !== computerChoice) {
        computerScore++;
    }

    updateScores();

    console.log(`Human: ${choice}, Computer: ${computerChoice}`);
    console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`);

    showChoice(choice, computerChoice);

    if (humanScore === 5 || computerScore === 5) {
        alert(`Game Over! Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);
        humanScore = 0;
        computerScore = 0;
        updateScores();
        showChoice('', '');
    }
}

function updateScores() {
    const humanPoints = document.querySelector("#humanPoint");
    const computerPoints = document.querySelector("#computerPoint");

    humanPoints.textContent = `You: ${humanScore}`;
    computerPoints.textContent = `Computer ${computerScore}`;
}

function showChoice(humanChoice, computerChoice) {
    const choicesDiv = document.querySelector("#choices");
    choicesDiv.textContent = "";

    const humanChoiceElem = document.createElement("div");
    humanChoiceElem.textContent = `You chose: ${humanChoice.toUpperCase()}`;

    const computerChoiceElem = document.createElement("div");
    computerChoiceElem.textContent = `Computer chose: ${computerChoice.toUpperCase()}`;
    
    choicesDiv.append(humanChoiceElem);
    choicesDiv.append(computerChoiceElem);
}

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) {
        return "rock";
    } else if (number === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
