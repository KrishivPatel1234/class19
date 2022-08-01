var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage(towerImg);
  tower.velocityY = 1;
  ghost= createSprite(300,300)
  ghost.addImage(ghostImg)
  ghost.scale= 0.5
  climbersGroup= new Group()
  doorsGroup= new Group()
    invisibleBlockGroup= new Group()
  
}

function draw() {
  background(200);
  if(gameState=== "play"){
if(keyDown("left")){
ghost.x -= 5

}
if(keyDown("right")){
  ghost.x += 5
  }
  if(keyDown("space")){
ghost.velocityY= -10

  }
  ghost.velocityY += 1
  spawnDoors()
  if(tower.y > 400){
      tower.y = 300
    }
    if(climbersGroup.isTouching(ghost)){
ghost.velocityY= 0

    }
    if(invisibleBlockGroup.isTouching(ghost)){
ghost.destroy()
gameState= "end"

    }
}
}

function spawnDoors(){
if(frameCount %250===0){
door= createSprite(300,10)
door.x = Math.round(random(100,500))
door.addImage(doorImg)
door.lifetime= 600
door.velocityY= 1
climber = createSprite(300,60)
climber.x= door.x
climber.addImage(climberImg)
climber.lifetime= 600
climber.velocityY= 1
invisibleblock= createSprite(300,70)
invisibleblock.x= door.x
invisibleblock. debug = true
invisibleblock.lifetime= 600
invisibleblock.velocityY= 1
doorsGroup.add(door)
climbersGroup.add(climber)
invisibleBlockGroup.add(invisibleblock)


}

}