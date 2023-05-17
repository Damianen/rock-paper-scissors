function computerWin(winner, loser)
{
    computerPoints++;
    return `You lose! ${winner} beats ${loser}!`;
}

function playerWin(winner, loser)
{
    playerPoints++;
    return `You win! ${winner} beats ${loser}!`;
}

function draw(draw)
{
    return `Draw! you both picked ${draw}!`;
}

function playRound(playerSelection)
{
    let computerSelection = Math.floor(Math.random() * 3) + 1;
    playerSelection = playerSelection.toLowerCase();

    //for the computer
    //paper = 1
    //rock = 2
    //scissors = 3

    if (playerSelection === "rock")
    {
        switch (computerSelection % 3)
        {
            case 1: text.textContent = computerWin("paper", playerSelection); break;
            case 2: text.textContent = draw(playerSelection); break;
            case 0: text.textContent = playerWin(playerSelection, "scissors"); break;
        }
    }
    else if (playerSelection === "paper")
    {
        switch (computerSelection % 3)
        {
            case 0: text.textContent = computerWin("scissors", playerSelection); break;
            case 1: text.textContent = draw(playerSelection); break;
            case 2: text.textContent = playerWin(playerSelection, "rock"); break;
        }
    }
    else if (playerSelection === "scissors")
    {
        switch (computerSelection % 3)
        {
            case 2: text.textContent = computerWin("rock", playerSelection); break;
            case 0: text.textContent = draw(playerSelection); break;
            case 1: text.textContent = playerWin(playerSelection, "paper"); break;
        }
    }

    pointsText.textContent = `Player: ${playerPoints}, Computer: ${computerPoints}`;

    if (playerPoints > 2 || computerPoints > 2)
    {
        if (playerPoints > 2)
        {
            text.textContent = "You Won! Click any option to play again!";
        }
        else
        {
            text.textContent = "You Lost! Click any option to play again!";
        }

        playerPoints = 0;
        computerPoints = 0;
    }
}

let playerPoints = 0;
let computerPoints = 0;

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let text = document.querySelector("h1");
let pointsText = document.querySelector("p");

rock.addEventListener('click', (e) => playRound("rock"));
paper.addEventListener('click', (e) => playRound("paper"));
scissors.addEventListener('click', (e) => playRound("scissors"));

