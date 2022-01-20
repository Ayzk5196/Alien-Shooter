var player;
var bg;

function preload(){
  bg = loadImage('GrassBG.jpg');
}
function setup() {
  createCanvas(windowWidth,windowHeight);

  player = new Base();
}

function draw() {
  player.show(); 
}

