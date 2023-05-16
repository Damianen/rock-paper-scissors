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
            case 1: text.textContent = computerWin("paper", playerSelection);
            case 2: text.textContent = draw(playerSelection);
            case 0: text.textContent = playerWin(playerSelection, "scissors");
        }
    }
    else if (playerSelection === "paper")
    {
        switch (computerSelection % 3)
        {
            case 0: text.textContent = computerWin("scissors", playerSelection);
            case 1: text.textContent = draw(playerSelection);
            case 2: text.textContent = playerWin(playerSelection, "rock");
        }
    }
    else if (playerSelection === "scissors")
    {
        switch (computerSelection % 3)
        {
            case 2: text.textContent = computerWin("rock", playerSelection);
            case 0: text.textContent = draw(playerSelection);
            case 1: text.textContent = playerWin(playerSelection, "paper");
        }
    }
    else
    {
        return "error, The input was incorrect!"
    }
}

let playerPoints = 0;
let computerPoints = 0;

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let text = document.querySelector("h1");

if (playerPoints < 3 && computerPoints < 3)
{
    rock.addEventListener('click', playRound("rock"));
    paper.addEventListener('click', playRound("paper"));
    scissors.addEventListener('click', playRound("scissors"));
}