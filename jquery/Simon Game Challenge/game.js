var userClickedPattern = [];
var gamePattern=[];
var buttonColours = ["red", "blue", "green", "yellow"];
var userChosenColour;
var level = 0;
var levelUp = 0;

$(document).keypress(function(){
    if(!levelUp){
        $("#level-title").text("Level " + level);
    nextSequence();
    levelUp=1;
    }
})

$(".btn").on("click", function(){

    userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    check(userClickedPattern.length-1);
           
}) 


function nextSequence(){

    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
  
    var randomNumber =Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour) ;
    
    $("#"+ randomChosenColour).fadeTo(50,0).fadeTo(50,1);
    playSound(randomChosenColour);
}
    


function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");  
    audio.play();  

}

function animatePress(currentColour){
        $("#"+currentColour).addClass("pressed");
        setTimeout(function() {
            $("#" + currentColour).removeClass("pressed");
          }, 100);

}

function check(level){

    if (gamePattern[level] === userClickedPattern[level]) {
        if (userClickedPattern.length === gamePattern.length){
          setTimeout(function () {
            nextSequence();
          }, 1000);
        }
      } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
  
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        startOver();
      }

}

function startOver() {
    level = 0;
    gamePattern = [];
    levelUp = false;
  }

