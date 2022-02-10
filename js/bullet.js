class Bullet{
    constructor(x,y){
        this.sprite = createSprite(x+50,y-30,8,3);
        this.image = loadImage('assets/bullet1.png');
        this.sprite.addImage(this.image);
        this.sprite.scale = 0.05;
    }
    shoot(){
        this.sprite.velocityX = 10;
    }
}