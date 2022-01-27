class Base{
    constructor(){
        this.image = loadImage("assets/Standingman1.png");
        this.player=createSprite(100,height/2,50,50);
        this.player.addImage(this.image);
        this.bg = bg;
        this.alienGroup = createGroup();
    }
    controlPlayer(){
        if(keyDown('UP_ARROW') && this.player.y>50){
            this.player.y -=12;
        }
        if(keyDown('DOWN_ARROW') && this.player.y<height-50){
            this.player.y +=12;
        }
        if(keyDown('LEFT_ARROW') && this.player.x>50){
            this.player.x -=12;
        }
        if(keyDown('RIGHT_ARROW') && this.player.x<width-50){
            this.player.x +=12;
        }
    }
    show(){
        background(this.bg);
        if(frameCount%100==0){
            this.createAliens();
        }
        this.controlPlayer();
        drawSprites();
    }
    createAliens(){
        var alien = createSprite(width+10,random(100,height-100),40,40);
        alien.velocityX=-5;
        alien.lifetime=400;
        this.alienGroup.add(alien);
    }
}