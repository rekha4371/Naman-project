var spacecraft,spacecraftImage;
var bg,bgImage;
var aliens,aliensImage;
var alien,alienImage;
var bullet,bulletImage;
var score=0;

function preload(){
    spacecraftImage = loadImage("spacecraft.png");
    bgImage = loadImage("bg.gif");
    alienImage = loadImage("aliens.png");
    alien2Image = loadImage("alien2.png");
    bulletImage = loadImage("lazer.png");
}

function setup(){
    createCanvas(600,600);

    bg = createSprite(200,200);
    bg.addImage(bgImage);
    bg.scale = 2;

    spacecraft = createSprite(260,520);
    spacecraft.addImage(spacecraftImage);
    spacecraft.scale = 0.5;
    spacecraft.debug = true

    invisible = createSprite(260,590,850,5);
    invisible.visible = false;

    aliensGroup = new Group();
    bulletGroup = new Group();

}

function draw(){
    background("black");


    if(keyDown("right")){
    spacecraft.x = spacecraft.x+10;
    }

    if(keyDown("left")){
    spacecraft.x = spacecraft.x-10;
    }

    if (keyDown("space")) {
        bullets();
        bullet.velocityY = -3;
        bullet.y = spacecraft.y;
    }
  
    if(aliensGroup.isTouching(bullet)){
      score = score+1
      aliensGroup.destroyEach() 
    }
  
    if(aliensGroup.isTouching(invisible)){
        fill ("yellow")
        textSize(25)
        text("GAME OVER",250,250)
     }

    aliens()
    aliens2()

    drawSprites();

    textSize(35)
    fill ("white")
    text ("SCORE: "+ score,400,50)



}

function aliens(){
    if(frameCount%120===0){
    alien = createSprite(200,50);
    alien.debug = true
    alien.x = Math.round(random(50,500))
    alien.addImage(alienImage);
    alien.scale = 0.3
    alien.velocityY = 3;
    aliensGroup.add(alien);
    }
}

function aliens2(){
    if(frameCount%200===0){
    alien2 = createSprite(200,50);
    alien2.debug = true
    alien2.x = Math.round(random(80,450))
    alien2.addImage(alien2Image);
    alien2.scale = 0.2
    aliensGroup.add(alien2);
    alien2.velocityY = 3;
    }
}
  
function bullets() {
  
    bullet = createSprite(spacecraft.x,spacecraft.y);
    bullet.addImage(bulletImage);
    bullet.scale = 0.05;
    bullet.x=spacecraft.x;
    bulletGroup.add(bullet);
    bullet.depth=spacecraft.depth
    spacecraft.depth+=1
    }
