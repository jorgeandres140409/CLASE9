var vox;

function setup() {
  createCanvas(400,400);
  vox=createSprite(200,200,30,30);
  

}

function draw() 
{
   background("yellow");
  
   if (keyIsDown(UP_ARROW)){
     vox.position.y=vox.position.y -3;

   }
   if (keyIsDown(DOWN_ARROW)){
     vox.position.y=vox.position.y +4;

   }
   if (keyIsDown(RIGHT_ARROW)){
     vox.position.x=vox.position.x +5;

   }
   if(keyIsDown(LEFT_ARROW)){
     vox.Xposition.x=vox.position.x -2;

   }
   drawSprites();
  
}




