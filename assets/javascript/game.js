let targetScore = Math.floor(Math.random() * 101) + 19;
let crystalValues = [];
let gameActive = false;
let score = 0;
let wins = 0;
let losses = 0;
let coinSound = new Audio("assets/audio/coin.wav");
let winSound = new Audio("assets/audio/win.wav");
let lossSound = new Audio("assets/audio/loss.wav");



$(document).ready(function () 
{    
    document.onkeyup = function (event) 
    {
        if (!gameActive && event.code === 'Space') 
        {
            NewGame();
        }
    }

    $(".crystalImage").click(function () 
    {
        if (gameActive) 
        {
            coinSound.play();
            let thisCrystal = $(this).attr('id');

            if (thisCrystal === "crystal_1") 
            {
                score += crystalValues[0];
            }
            else if (thisCrystal === "crystal_2") 
            {
                score += crystalValues[1];
            }
            else if (thisCrystal === "crystal_3") 
            {
                score += crystalValues[2];
            }
            else if (thisCrystal === "crystal_4") 
            {
                score += crystalValues[3];
            }

            UpdateScore();
        }

    });

});

function NewGame()
{
    score = 0;
    targetScore = Math.floor(Math.random() * 101) + 19;

    crystalValues = [];

    for (let i = 0; i < 4; i++)
    {
        let newCrystalVal = Math.floor(Math.random() * 12) + 1;
        crystalValues.push(newCrystalVal);
    }

    gameActive = true;
    $("#winningNumber").text("-> " + targetScore + " <-");
    $("#score").text(score);
    $("#wins").text(wins);
    $("#loss").text(losses);
    $("#game_msg").text("Click any gem to add to your score, try to match the number without going over!");

    console.log(targetScore);
    console.log(crystalValues);
}

function UpdateScore()
{
    $("#score").text(score);

    if (score === targetScore)
    {
        winSound.play();
        $("#game_msg").text("You Win! Press 'Space' to Play Again!");
        wins++;
        gameActive = false;
    }
    else if (score > targetScore)
    {
        lossSound.play();
        $("#game_msg").text("You Have Lost. Press 'Space' to Play Again!");
        losses++;
        gameActive = false;
    }
}