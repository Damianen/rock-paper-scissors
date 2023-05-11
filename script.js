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

function Game()
{
    playerPoints = 0;
    computerPoints = 0;
    while (playerPoints < 3 && computerPoints < 3)
    {
        
        message = 'e';

        while (message[0] === 'e')
        {
            playerSelection = prompt("Pick rock, paper or scissors: ");
            message = playRound(playerSelection);
        }

        console.log(message);

        if (message.includes("win"))
        {
            playerPoints++;    
        }
        else if (message.includes("lose"))
        {
            computerPoints++;
        }
    }
    
    if (playerPoints < 3)
    {
        console.log("You lost better luck next time!");
    }
    else 
    {
        console.log("You won well done!");
    }
}

playing = true;

while (playing)
{
    Game();

    again = "";

    while (again != 'y' || again != 'n')
    {
        again = prompt("Play again? (y/n): ");
        again = again.toLowerCase();
        if (again === 'y') 
        {
            break;
        }
        else if (again === 'n')
        {
            playing = false;
            break;
        }
    } 
}