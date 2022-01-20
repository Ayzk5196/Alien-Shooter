class Base{
    constructor(){
        this.player=createSprite(width/2,height-100,50,50);
        this.bg = bg;
        this.alienGroup = createGroup();
    }
    controlPlayer(){
        if(keyDown('UP_ARROW')){
            this.player.y -=15;
        }
        if(keyDown('DOWN_ARROW')){
            this.player.y +=15;
        }
        if(keyDown('LEFT_ARROW')){
            this.player.x -=15;
        }
        if(keyDown('RIGHT_ARROW')){
            this.player.x +=15;
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
        var alien = createSprite(random(100,width-100),0,40,40);
        alien.velocityY=5;
        alien.lifetime=200;
        this.alienGroup.add(alien);
    }
}