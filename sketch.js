var garden, gardenImage;
var cat, catImage, catImage2, catImage3;
var mouse, mouseImage, mouseImage2, mouseImage3;

function preload() {
    catImage = loadImage("images/cat1.png");
    catImage2 = loadAnimation("images/cat2.png", "images/cat3.png");
    catImage3 = loadAnimation("images/cat4.png");
    mouseImage = loadImage("images/mouse1.png");
    mouseImage2 = loadImage("images/mouse2.png");
    mouseImage3 = loadImage("images/mouse3.png");
    gardenImage = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(500,300,1000,800);
    garden.addImage("garden", gardenImage);
    garden.scale = 1.5;

    cat = createSprite(850,650,50,50);
    cat.addImage("cat", catImage);
    cat.scale = 0.2;
    //cat.debug = true;
    cat.setCollider("circle", 0, 0, 400);

    mouse = createSprite(200,710,50,50);
    mouse.addImage("mouse", mouseImage2);
    mouse.scale = 0.1;
    //mouse.debug = true;

}

function draw() {

    background(255);
    if(cat.x - mouse.x < cat.width/2 - mouse.width/2 ){
        cat.velocityX = 0;
        cat.addAnimation("cat", catImage3);
        cat.changeAnimation("catImage3");
        cat.scale = 0.3;

        mouse.addAnimation("mouse", mouseImage);
        mouse.changeAnimation("mouseImage");
    }

    keyPressed();

    drawSprites();
}


function keyPressed(){

  if(keyDown("left")){
      mouse.addAnimation("mouse", mouseImage3);
      mouse.changeAnimation("mouseImage3");
      mouse.frameDelay= 25;
      
      cat.addAnimation("cat", catImage2);
      cat.changeAnimation("catImage2");
      cat.scale = 0.3;
      cat.velocityX = -2;
  }


}
