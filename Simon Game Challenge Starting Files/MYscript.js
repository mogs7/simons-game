var userStart;

var arrayColors = ["red","blue","green","yellow"];

$(document).keypress(function(event) {
    userStart = event.key;
    
    if (userStart == "a"){
        $("div[type='button']").on("click", userClick(event));

        var startGame = 0;
        var levelCount = 1;
        $("#level-title").text("Level "+levelCount);
        console.log(computerPickArray);

        var computerPickArray = [];
        var computerPick;
        computerPick = Math.floor(Math.random()*4);
        computerColor = arrayColors[computerPick];
        computerPickArray.push(computerColor);

        $("#"+computerColor).on("click", function(){
            $("#"+computerColor).animate({opacity: 0.5}, 500);
        });
        //while (startGame < 1){
            
        //}
        
        
    }
    
});

/*$(document).click(function(event){
    console.log("#"+event.target.id);
})*/

function userClick(event){
    //Assign target id to ID holding variable
    let eventTarget = "#"+event.target.id;

    //Associate audio to corresponding ID
    var playSound = new Audio("sounds/"+event.target.id+".mp3");

    $(eventTarget).addClass("pressed");
    setTimeout(function(){
        $(eventTarget).removeClass("pressed");
    }, 50);
    playSound.play();

    console.log(eventTarget);
}