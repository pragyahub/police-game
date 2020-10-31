var background,background2,thief
var ground1 , ground2


function preload(){
  
  ground1 = loadImage("images/ ground1.png");
   ground2= loadImage("images/ground2.png");
  thief = loadImage("images/thef.png");
}

function setup(){
createCanvas (600,400);

ground1 = createSprite(100,100,50,50)
ground1.addImage("ground1.png",ground1)



ground2 = createSprite(100,100,50,50)
ground2.addImage("ground2.png",ground2)


thief = createSprite (50,180,50,20)
thief.addImage("thief.png",thief)




}


function draw(){
  background("white");
  console.log(ground1);

  drawSprites()


}


