function computerWin(winner, loser)
{
    return `You lose! ${winner} beats ${loser}!`;
}

function playerWin(winner, loser)
{
    return `You win! ${winner} beats ${loser}!`;
}

function draw(draw)
{
    return `Draw! you both picked ${draw}!`;
}

function playRound(playerSelection)
{
    computerSelection = Math.floor(Math.random() * 3) + 1;
    playerSelection = playerSelection.toLowerCase();

    //for the computer
    //paper = 1
    //rock = 2
    //scissors = 3

    if (playerSelection === "rock")
    {
        switch (computerSelection % 3)
        {
            case 1: return computerWin("paper", playerSelection);
            case 2: return draw(playerSelection);
            case 0: return playerWin(playerSelection, "scissors");
        }
    }
    else if (playerSelection === "paper")
    {
        switch (computerSelection % 3)
        {
            case 0: return computerWin("scissors", playerSelection);
            case 1: return draw(playerSelection);
            case 2: return playerWin(playerSelection, "rock");
        }
    }
    else if (playerSelection === "scissors")
    {
        switch (computerSelection % 3)
        {
            case 2: return computerWin("rock", playerSelection);
            case 0: return draw(playerSelection);
            case 1: return playerWin(playerSelection, "paper");
        }
    }
    else
    {
        return "error, The input was incorrect!"
    }
}

console.log(playRound("roc"));