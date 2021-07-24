var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var oleaf, oleafImg;
var gleaf, gleafImg;
Autonation
var select_sprites = Math.round(random(1,2,3));

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  oleafImg = loadImage("orangeLeaf.png");
  gleafImg = loadImage("leaf.png");

  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  createapples();
  createorangeleaf();
  creategreenleaf();
  
  
  drawSprites();
}

function createapples(){
  if (frameCount % 80 == 0){
    apple = createSprite(random(50, 350),40, 10, 10);
    apple.addImage(appleImg);
    apple.scale=0.1;
    apple.velocityY = 3;
    
  }
  }

  function createorangeleaf (){
      if (frameCount % 80 == 0){
      oleaf = createSprite(random(50, 300),40, 10, 10);
      oleaf.addImage(oleafImg);
      oleaf.scale=0.1;
      oleaf.velocityY = 3;

    }

  }

  function creategreenleaf (){
        if (frameCount % 80 == 0){
        gleaf = createSprite(random(50, 320),40, 10, 10);
        gleaf.addImage(gleafImg);
        gleaf.scale=0.1;
         gleaf.velocityY = 3;
    }

  }

  
