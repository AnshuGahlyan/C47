var player 
var flag 
var flagi
//var tr
var gray 
var title
var play 
var stay1
var stay2
var stay3
var plat1
var plat2
var plat3
var plat4
var plat5
var plat6
var plat7
var plat8
var plat9
var plat10
var plat11
var plat12
var lava1
var lava2
var lava3
var lava4
var lava5
var lava6
var lava7
var lavas
var plats
var stays
var greyI
var PH
var PlayI
var walk
var idle;
var walk2;
var climb;
var duck;
var flame;
var flame2;
var tri;

function preload(){
  greyI = loadImage("1.gif");
  PlayI = loadImage("Play.png");
  walk = loadImage("walk.png");
  idle = loadImage("idle.png");
  walk2 = loadImage("walk_left.gif");
  climb = loadImage("climb.gif");
  duck = loadImage("duck.gif");
  flame2 = loadImage("flame_left.gif");
  flame = loadImage("flame_right.gif");
  //tri = loadImage("troffy.jpg");
  flagi = loadImage("flag.gif");
 
}
function setup(){
  createCanvas(1340,640);
  player =  createSprite(-510, -10);
  player.scale = 0.3;
 player.addImage(idle);
  flag = createSprite(3600, -232);
  flag.addImage(flagi);
  flag.scale = 1.2;
  PH =  createSprite(-510,0,10,10);
  
 // tr = createSprite(3700, - 235);
  //tr.scale = 0.5;
  //tr.addImage(tri);
  gray = createSprite(- 550, - 20);
  gray.height = 800;
  gray.addImage(greyI);
  gray.width = 800;



  play = createSprite(-300, 230);
  play.scale = 0.08;
  play.addImage(PlayI);
stay1 = createSprite(- 530, 0, 20, 50);
 stay2 = createSprite(- 490, 0, 20, 50);
 stay3 = createSprite(- 510, 0, 50, 20);
 plat1 = createSprite(200, 300, 50, 200);
 plat2 = createSprite(350, 300, 50, 320);
 plat3 = createSprite(600, 300, 150, 750);
 plat4 = createSprite(950, 300, 150, 750);
 plat5 = createSprite(1250, 300, 150, 750);
 plat6 = createSprite(1775, -100, 475, 50);
 plat7 = createSprite(2455, -100, 475, 50);
 plat8 = createSprite(2900, - 160, 30, 10);
 plat9 = createSprite(3100, - 180, 30, 10);
 plat10 = createSprite(3300, - 200, 30, 10);
 plat11 = createSprite(3600, - 180, 300, 50);
 plat12 = createSprite(3700, - 221, 35, 35);
 lava1 = createSprite(775, 300, 200, 650);
 lava2 = createSprite(1100, 300, 150, 775);
 lava3 = createSprite(1775, -240, 350, 50);
lava4 = createSprite(1855, -110, 10, 100);
 lava5 = createSprite(1755, -110, 10, 100);
 lava6 = createSprite(2112, -90, 250, 40);
 lava7 = createSprite(200, 450, 50000, 200);
 lavas = createGroup();
 plats = createGroup();
 stays = createGroup();
stays.add(stay1);
stays.add(stay2);
stays.add(stay3);
plats.add(plat1);
plats.add(plat2);
plats.add(plat3);
plats.add(plat4);
plats.add(plat5);
plats.add(plat6);
plats.add(plat7);
plats.add(plat8);
plats.add(plat9);
plats.add(plat10);
plats.add(plat11);
plats.add(plat12);
plats.add(PH);
lavas.add(lava1);
lavas.add(lava1);
lavas.add(lava2);
lavas.add(lava4);
lavas.add(lava5);
lavas.add(lava6);
lavas.add(lava7);

lava1.shapeColor = "red";
lava2.shapeColor = "red";
lava3.shapeColor = "red";
lava4.shapeColor = "red";
lava5.shapeColor = "red";
lava6.shapeColor = "red";
lava7.shapeColor = "red";
stay1.visible = false;
stay2.visible = false;
stay3.visible = false;
plat12.visible = false;
player.visible = false;
camera.zoom = 1;
}

function draw() {
  
  player.scale = 0.3;
player.addImage(idle);
console.log(player.x,player.y);
 if(player.x === -512.15){
  background(("black"));

 }
 if(player.x !== -512.15){
  background(("blue"));
 }
  if (player.isTouching(lavas)) {
    player.x = - 510;
    player.y = - 10;

  }
  if(player.x !== -512.15){
  camera.x = player.x;
  camera.y = player.y;
  }
  if(player.x === -512.15){
    camera.x = gray.x;
    camera.y = gray.y;
  }
  if (player.velocityY < 10) {
    player.velocityY = player.velocityY + 0.5;
  }
  if (keyDown("r")) {
    player.x = 200;
    player.y = 200;
  }
  if (mousePressedOver(play)) {
    player.x = 200;
    player.y = 200;
    player.visible = true;
  }
  if (keyDown("d") || keyDown("right")) {
    player.x = player.x + 5;
    player.addImage(walk);
  }else if ((keyDown("a") || keyDown("left"))) {
    player.x = player.x - 5;
    player.addImage(walk2);
  }else {

  }
  if (((keyDown("up") || keyDown("up")) || keyDown("up")) & player.isTouching(plats)) {
    player.addImage(climb);
    player.y = player.y - 0.5;
    player.velocityY = -9;
  }
  if (keyDown("s") || keyDown("down")) {
    player.nextFrame();
    player.addImage(duck);
    player.scale = 0.2;
    if (keyDown("left")) {
      player.x = player.x + 2;
    }
    if (keyDown("right")) {
      player.x = player.x - 2;
    }
  }
  if (keyDown("space")) {
    player.nextFrame();
   
    if (keyDown("right") || keyDown("right")) {
      player.x = player.x + 8;
     player.addImage(flame);
     
    }
    if (keyDown("left") || keyDown("left")) {
      player.x = player.x - 8;
      player.addImage(flame2);

    }
  }

  player.collide(plats);
  player.collide(stays);


  fill ("red");
  textSize(80);
  text("THE                                    RUNNER",-1200,-250);
textSize(18);
  text ("Press the up arrow to jump", 102, 150);
  text ("Hold the up arrow to climb walls", 170, 80);         
  text ("Lava is great for your health", 567, -120);
  text ("Press S to shrink, these are close jumps", 1625, -200);
  text("Press Space For Speed",1000,-200);
  textSize(20);
  textSize(23);
  text("By Mr.Devil", 3525, -300);
  if (player.isTouching(flag)) {
    textSize(25);
    text("You Win!", 3450, - 270);

  }
  drawSprites();
}
