var player;
var bg;
var gun1,gun2,gun3,gun4,guns=[];
var alienImage;

function preload(){
  bg = loadImage('assets/GrassBG.jpg');
  gun1 = loadImage('assets/gun1.png');
  gun2 = loadImage('assets/gun1.png');
  gun3 = loadImage('assets/gun1.png');
  gun4 = loadImage('assets/gun1.png');
  alienImage = loadImage('assets/Alien1.png');
}
function setup() {
  createCanvas(windowWidth,windowHeight);

  guns = [gun1,gun2,gun3,gun4];
  player = new Base();
}

function draw() {
  player.show(); 
}

