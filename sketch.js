var dog, happyDog, foodS, foodStock
var database,readStock

function preload()
{
  dogImg= loadImage("images/dog.png")
  dogImg2=loadImage("images/happydog.png")
}

function setup() {
  database= firebase.database();
	createCanvas(500, 500);
  //background("lightgreen")
  
  dog= createSprite(250,300,50,50)
  dog.addImage(dogImg)
  dog.scale=0.15;

  foodStock= database.ref('Food');
  foodStock.on("value",readStock)
  //dog.addImage(dogHappy)
  textSize(15)
  fill("blue")
  text("Dog is Happy!", 200, 170);
}

function draw() {  
   background("lightgreen")
   if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
     dog.addImage(dogImg2)
   }

   textSize(20)
   fill("white")
   text("Food Remaining:"+foodS, 120, 100);

   drawSprites();
}
 
function readStock(data){
  foodS=data.val();
}

function writeStock(x){

if(x<=0){
  x=0;
}else{
  x=x-1;
}

database.ref('/').update({
Food:x
 })
}

