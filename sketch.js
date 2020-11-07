function setup() {
 // createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 createCanvas(1200,800);
 //fixedRect = createSprite(600, 400, 50, 80);
// fixedRect.shapeColor = "green";
// fixedRect.debug = true;
 //movingRect = createSprite(400,200,80,30);
 //movingRect.shapeColor = "green";
 //movingRect.debug = true;


 //gameObject1 = createSprite(100, 100, 50, 50);
 // gameObject1.shapeColor = "green";
 // gameObject2 = createSprite(200, 100, 50, 50);
 // gameObject2.shapeColor = "green";
//  gameObject3 = createSprite(300, 100, 50, 50);
 // gameObject3.shapeColor = "green";
 // gameObject4 = createSprite(400, 100, 50, 50);
 // gameObject4.shapeColor = "green";

 fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

//function draw() {
  //background(255,255,255);  
 // background(0,0,0);  
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;
 // console.log(movingRect.x-fixedRect.x);
 //if (movingRect.x - fixedRect.x === fixedRect.width/2 + movingRect.width/2) {
  //if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  // && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
  //  && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
   //&& fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
  //  movingRect.shapeColor = "red";
  //  fixedRect.shapeColor = "red";
//}
 // else {
  //  movingRect.shapeColor = "green";
  //  fixedRect.shapeColor = "green";
 // }
 //isTouching();
 
 
 
 /*if(isTouching()){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";

  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
*/

/*if(isTouching(movingRect, gameObject1)){
  movingRect.shapeColor = "blue";
  gameObject1.shapeColor = "blue";
}
else {
  movingRect.shapeColor = "green";
  gameObject1.shapeColor = "green";
}*/


 // drawSprites();
//}
/*function isTouching(){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
     && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
     && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
      return true;
  }
    else {
     return false;
    }

}*/

/*function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}*/








function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);
  drawSprites();
}
/*
var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY= +5;
  
}

function draw() {
  background(0,0,0);  

 /* if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }*//*
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  drawSprites();
}
function bounceOff(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
    }
    if (object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
        object1.velocityY = object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);
    } 
  }

*/
