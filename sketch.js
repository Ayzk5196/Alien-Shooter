var player;
var bg;
var gun1,gun2,gun3,gun4,guns=[];

function preload(){
  bg = loadImage('GrassBG.jpg');
  gun1 = loadImage('gun1.png');
  gun2 = loadImage('gun1.png');
  gun3 = loadImage('gun1.png');
  gun4 = loadImage('gun1.png');
}
function setup() {
  createCanvas(windowWidth,windowHeight);

  guns = [gun1,gun2,gun3,gun4];
  player = new Base();
}

function draw() {
  player.show(); 
}

