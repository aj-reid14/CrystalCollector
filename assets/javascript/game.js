// Initialize Variables
let targetScore = Math.floor(Math.random() * 101) + 19;
let crystalValues = [];
let gameActive = false;
let score = 0;
let wins = 0;
let losses = 0;
let coinSound = new Audio("assets/audio/coin.wav");
let winSound = new Audio("assets/audio/win.wav");
let lossSound = new Audio("assets/audio/loss.wav");


// Start when document is ready
$(document).ready(function () 
{    
    document.onkeyup = function (event) 
    {
        // Start (or restart) the game by pressing 'Space'
        if (!gameActive && event.code === 'Space') 
        {
            NewGame();
        }
    }

    // When any crystal is clicked,
    $(".crystalImage").click(function () 
    {
        // Update the game/score based on which crystal is clicked, only if the game is active.
        if (gameActive) 
        {
            coinSound.play();
            
            // Obtain the 'id' of the clicked crystal, and assign it a value from 'crystalValues' accordingly.
            // The 4 Random numbers for 'crystalValues' are generated in the 'NewGame' function.
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
    // Reset all game related values to default for a new game:
    score = 0;

    // New Random Target Score between 19 - 120
    targetScore = Math.floor(Math.random() * 101) + 19;

    // Generate new random values for each crystal
    crystalValues = [];

    for (let i = 0; i < 4; i++)
    {
        // Assign each crystal a random value between 1 - 12
        let newCrystalVal = Math.floor(Math.random() * 12) + 1;
        crystalValues.push(newCrystalVal);
    }

    // Clear game all game text (except game message) and set the game to active!
    gameActive = true;
    $("#winningNumber").text("-> " + targetScore + " <-");
    $("#score").text(score);
    $("#wins").text(wins);
    $("#loss").text(losses);
    $("#game_msg").text("Click any gem to add to your score, try to match the number without going over!");

    // Debugging/Verification
    console.log(targetScore);
    console.log(crystalValues);
}

function UpdateScore()
{
    $("#score").text(score);

    if (score === targetScore)
    {
        // User has won he game!
        winSound.play();
        $("#game_msg").text("You Win! Press 'Space' to Play Again!");
        wins++;
        gameActive = false;
    }
    else if (score > targetScore)
    {
        // User has lost the game...
        lossSound.play();
        $("#game_msg").text("You Have Lost. Press 'Space' to Play Again!");
        losses++;
        gameActive = false;
    }
}