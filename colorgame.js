var numberSquares = 6;

var color = generateRandomColor(numberSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplays = document.getElementById("colorDisplay")
  colorDisplays.textContent = pickedColor;

var messages = document.querySelector("#message");
var h1 = document.querySelector("h1");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numberSquares = 3;
  color = generateRandomColor(numberSquares);

  pickedColor = pickColor();

  colorDisplays.textContent = pickedColor;

  for(var i=0; i < squares.length ; i++)
  {
    if(color[i]){
      squares[i].style.background = color[i];
    }
    else{
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function() {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numberSquares = 6;
  color = generateRandomColor(numberSquares);

  pickedColor = pickColor();

  colorDisplays.textContent = pickedColor;

  for(var i=0; i < squares.length ; i++)
  {
      squares[i].style.background = color[i];
      squares[i].style.display = "block";
  }
});

  for(var i = 0; i < squares.length; i++)
  {
      squares[i].style.background = color[i];

      squares[i].addEventListener("click", function() {
        var clickedColor = this.style.background;

        if(clickedColor === pickedColor){
          for(var j=0; j<squares.length; j++){
            squares[j].style.background = pickedColor;
          }
          messages.textContent = "Correct :)";
          h1.style.background = pickedColor;
          resetButton.textContent = "Play Again?";
        }
        else {
          this.style.background = "grey";
          messages.textContent = "Try Again :(";
        }
      });
  }


function pickColor()
{
    var randomColor = Math.floor( Math.random() * color.length );
    return color[randomColor];
}


function generateRandomColor(nums) {
  var arr = [];

  for(var i=0; i<nums; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);

  var g = Math.floor(Math.random() * 256);

  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}


var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function() {
  color = generateRandomColor(numberSquares);

  pickedColor = pickColor();
  resetButton.textContent ="New Colors"

  messages.textContent ="";

  colorDisplays.textContent = pickedColor;

  for(var i=0; i < squares.length; i++){
    squares[i].style.background = color[i];
  }
  h1.style.background = "steelblue";
});
