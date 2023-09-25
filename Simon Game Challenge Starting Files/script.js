var colorArray = ["red","blue","green","yellow"];
var gamePattern = [];
var userPattern = [];
var gameStart = false;
var level = 0;

$(document).keypress(function(event){
    if (gameStart == false){
        gameStart = true;
        nextSequence();
    }
    
});

//Animate and play sound of user button clicks
$("[type='button']").click(function(event){
    let userClick = event.target.id;
    userPattern.push(userClick);
    checkAnswer((userPattern.length)-1);
    console.log("Game pattern: " + gamePattern);
    console.log("User pattern: " + userPattern);

    animatePress(userClick);
    playSound(userClick);
});



function nextSequence(){
    userPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    var randomNum = Math.floor(Math.random()*4);
    var chosenColor = colorArray[randomNum];
    gamePattern.push(chosenColor);

    //Animate randomly selected button and play respective audio
    $("#"+chosenColor).fadeOut(100).fadeIn(100);
    playSound(chosenColor);
}

function checkAnswer(currentLevel){
    if (userPattern[currentLevel] == gamePattern[currentLevel]){
        console.log("yeah!");
        if (userPattern.length == gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        gameStart = false;
        gamePattern = [];
        level = 0;
    };
}

//Function to play sound
function playSound(color){
    var playSound = new Audio("sounds/"+color+".mp3");
    playSound.play();
}

//Function to animate button press
function animatePress(color){
    $("#"+color).addClass("pressed");
    setTimeout(function(){
        $("#"+color).removeClass("pressed");
    },100);
}
