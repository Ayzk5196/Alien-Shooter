class Base{
    constructor(){
        this.image = loadImage("assets/Standingman1.png");
        this.player=createSprite(100,height/2,50,50);
        this.player.addImage(this.image);
        this.bg = bg;
        this.alienGroup = [];
        this.bulletGroup = [];
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
        if(keyDown('space')){
            var bullet = new Bullet(this.player.x,this.player.y);
            bullet.shoot();
            this.bulletGroup.push(bullet);
        }
        for(var i=0; i<this.alienGroup.length; i++){
            for(var j=0; j<this.bulletGroup.length; j++){
           this.alienGroup[i].overlap(this.bulletGroup[j].sprite,function(a,b){
                a.remove();
                b.remove();
            })
            }
        }
        if(frameCount%1000 == 0){
            this.createGuns();
        }
        drawSprites();
    }
    createGuns(){
        var gun = createSprite(random(200,width-200),random(100,height-100),40,40);
        gun.lifetime=200;
        gun.addImage(guns[Math.floor(random(0,3))])
        gun.scale = 0.1;
    }
    createAliens(){
        var alien = createSprite(width+10,random(100,height-100),40,40);
        alien.velocityX=-5;
        alien.lifetime=400;
        this.alienGroup.push(alien);
    }
}