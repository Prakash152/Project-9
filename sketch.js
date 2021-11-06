var box;

function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,30,30);
}

function draw() 
{
  
  background(30);

if(keyDown("down")){
box.position.y+=5;
background("cyan")

}
if(keyDown("up")){
  box.position.y-=5;
  background("green")
  }
  if(keyDown("left")){
    box.position.x-=5;
    background("blue")
    }
    if(keyDown("right")){
      box.position.x+=5;
      background("red")
      }
drawSprites();
}




