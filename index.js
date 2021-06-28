var mem = [];
var check = [];
var level = 0;
var i = 0;
var startFlag = false;
var checkFlag = false;


$(".start-button").click(startGame);
$(".send-button").click(function(){
  if(check.length>0){
    sendAnswer();
  }
});


function startGame() {
  if(startFlag === false){
    $("h1").text("Level 1");
    startFlag = true;
    runGame();
    $(".start-button").text("Restart");
  }

  else {
    resetGame();
    $(".start-button").text("Start");
  }
}

function resetGame() {
  $("h1").text("Memory Game");
  $(".start-button").text("Start");
  mem = [];
  check = [];
  level = 0;
  i = 0;
  startFlag = false;
}

function runGame() {
  var currentArrow = Math.floor(Math.random() * 4);
  mem.push(currentArrow);
  level++;
  $("h1").text("Level " + level);
  check = [];

  setTimeout(function(){
    animation();

    if(checkFlag === false){
      checkArrows();
      checkFlag = true;
    }
  
  }, 1000);
}

function animation() {

  setTimeout(function() {
    if(mem[i] === 0) {
      $(".up").fadeToggle().fadeToggle();
    }
    else if(mem[i] === 1) {
      $(".right").fadeToggle().fadeToggle();
    }
    else if(mem[i] === 2) {
      $(".down").fadeToggle().fadeToggle();
    }
    else {
      $(".left").fadeToggle().fadeToggle();
    }

    i++;

    if (i<mem.length) {
      animation();
    }
    else {
      i = 0;
    }
  }, 1000);
}


function checkArrows() {

if($(".up").click(function(){
  $(".up").fadeToggle(200).fadeToggle(200);
  check.push(0);
}));

if($(".right").click(function(){
  $(".right").fadeToggle(200).fadeToggle(200);
  check.push(1);
}));

if($(".down").click(function(){
  $(".down").fadeToggle(200).fadeToggle(200);
  check.push(2);
}));

if($(".left").click(function(){
  $(".left").fadeToggle(200).fadeToggle(200);
  check.push(3);
}));
}

function sendAnswer() {
  if(mem.length > check.length){
    alert("You did not submit elements enough. Insert again from scratch.");
    check = [];
  }
  else {
    checkAnswer();
  }
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function checkAnswer() {
  if(arraysEqual(mem, check)){
    runGame();
  }
  else{
    alert("Game Over.")
    resetGame();
  }
}