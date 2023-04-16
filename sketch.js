var horseTrack , horseTrackImg
var horse , horseImg , horseRun
var obstaclesGroup

function preload(){
  horseTrackImg = loadImage("track.jpg");
 // horseImg = loadAnimation("horse.png");
 horseRun = loadAnimation("horse.png","horse2.png");
}

function setup() {
  createCanvas(windowWidth , windowHeight);
  //horseTrack = createSprite(width,height)
  //horseTrack.addImage("track" , horseTrackImg)
  horse = createSprite(150 , height/2)
  //horse.addAnimation("horse",horseImg);
  horse.addAnimation("running",horseRun)
  horse.scale = 1

}

function draw() {
  background(255,255,255);  
  image(horseTrackImg,0,0,width*6,height)

  if(keyDown("right")){
   
    horse.changeAnimation("horseRun",horseRun)
  }
  drawSprites();
}