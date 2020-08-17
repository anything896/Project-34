//Create variables here
var dog,happydog;
var dogimg1,dogimg2;
var foodS,foodStock;
var database;
function preload()
{
  //load images here
  dogimg1=loadImage("images/dogimg.png")
  dogimg2=loadImage("images/dogimg1.png")
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(200,200)
}


function draw() {  
background(46,139,87);
foodStock.ref('food');
foodStock.on("value,readstock");
if (keydown=UP_ARROW){
  writestalk(foods);
  dog.addImage(dogHappy);
}
  drawSprites();
  //add styles here
  stroke();
  text("press up_arrow key to keed dog")
}
function readStock(data){
  foods+data.val();
}

function writeStock(x){
  if(x<+o){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

