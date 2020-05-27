var fixedrect,movingrect
var gameObject1,gameObject2,gameObject3,gameObject4;
function setup() {
  createCanvas(800,400);
  movingrect = createSprite(400, 200, 50, 50);
  fixedrect = createSprite(400,300,50,50);
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
  movingrect.velocityY = 2;
  fixedrect.velocityY = -2;
}

function draw() {
  background(255,255,255);  
  

bounceOff(movingrect,fixedrect);
 
drawSprites();
}

function bounceOff(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2 
    && object2.x-object1.x<object1.width/2+object2.width/2){ 
      object1.velocityX = object1.velocityX*(-1);
      object2.velocityX = object1.velocityX*(-1);
    }
  if(  object1.y-object2.y<object1.height/2+object2.height/2
    && object2.y-object1.y<object1.height/2+object2.height/2){
    object1.velocityY = object1.velocityY*(-1);
    object2.velocityY = object2.velocityY*(-1);
    }
   
}