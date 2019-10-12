let targetScore = Math.floor(Math.random() * 101) + 19;
let crystalValues = [];
let gameActive = false;
let wins = 0;
let losses = 0;

document.onkeyup = function(event)
{
    if (!gameActive && event.code === 'Space')
    {
        NewGame();
    }  
}

function NewGame()
{
    targetScore = Math.floor(Math.random() * 101) + 19;

    crystalValues = [];

    for (let i = 0; i < 4; i++)
    {
        let newCrystalVal = Math.floor(Math.random() * 12) + 1;
        crystalValues.push(newCrystalVal);
    }

    gameActive = true;
    $("#winningNumber").text(targetScore);
    $("#wins").text(wins);
    $("#loss").text(losses);
    $("#game_msg").text("");

    console.log(targetScore);
    console.log(crystalValues);
}