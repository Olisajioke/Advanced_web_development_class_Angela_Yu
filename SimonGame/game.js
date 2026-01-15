var userClickedPattern = [];
var gamePattern = [];
var level = 0;
var gameon = true;
buttonColors = ["red", "blue", "green", "yellow"];


function nextSequence() {
    level++;
    $("#level-title").text("Level " + level);
    var randonNumber = Math.floor(Math.random() * 4);
    return randonNumber;
}


function playSound(name) {
    var audio =  new Audio('./sounds/' + name + '.mp3');
    audio.play();
}

function PlayColor(color) {
    //$("#" + color).fadeOut(100).fadeIn(100);
    playSound(color);
    animatePress(color);
}


function startOver() {
    level = 0;
    gamePattern = [];
    gameon = true;
}



function animatePress(currentColor) {
	$("#"+currentColor).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColor).removeClass("pressed");
    }, 100);
}


var randomChosenColor = buttonColors[nextSequence()];
gamePattern.push(randomChosenColor);
console.log("Random chosen color: " + randomChosenColor);
console.log(gamePattern);
PlayColor(randomChosenColor);
playSound(randomChosenColor);



function playerClick() {
    $(".btn").click(function() {
        var userChosenColor = $(this).attr("id");
        //$(this).fadeOut(100).fadeIn(100);
        playSound(userChosenColor);
        animatePress(userChosenColor);
        userClickedPattern.push(userChosenColor);
        return userChosenColor;
    });
}

if (userClickedPattern.length === gamePattern.length) { 
    console.log("While loop triggered");
    randomChosenColor = buttonColors[nextSequence()];
    gamePattern.push(randomChosenColor);
    userClickedPattern.push(playerClick());
    //console.log("Random chosen color: " + randomChosenColor);
    //console.log(gamePattern);
    PlayColor(randomChosenColor);
}

else {
    gameon = false;
    $("#level-title").text("Game Over, Press Any Key to Restart");
    playSound("wrong");
    $("body").addClass("game-over");
}

$(document).keydown(function(event) {
        level = 0;
    });
