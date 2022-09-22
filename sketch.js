// * TRACK FILE MUST HAVE AT LEAST 1 START, TRACK, AND GRASS TILE OR WILL FAIL * 
// load needed variables and arrays 
  let images = [];
  track = []
  var width;
  var height;
  var grasstile;
  var tracktile;
  var starttile;
  var startxy;
  var car;
// load constants such as sizing and speed
  const speedlimit = 2;
  const tilesize = 150;              // each side is /2      
  carsize = tilesize/4/700;
  tilescale = tilesize/100;
  iterationscale = tilesize/2;
// preload images
  function preload(){
  images[0]= loadImage("grass.png");
  images[1]= loadImage("track.png");
  images[2]= loadImage("start.png");
  images[3]= loadImage("car.png");
//convert the text file into a array
  track = loadStrings("track2.txt");
}

function setup() {
  createCanvas(1920,1080);
  background("grey");
// add groups
  grasstile = new Group();
  tracktile = new Group();
  starttile = new Group();
  // create the track by iterating through the array first for each row (the array entry) and then for each entry in the row (numbers in the string in array entry)
  for (let i = 0; i < track.length; i++) {
      for (let j = 0; j < track[i].length; j++) {
        if (track[i][j] == "1") {
          z = 1;
          var group = tracktile;
          makesprite(j*iterationscale,i*iterationscale,z,group);
        } else if (track[i][j] == "2") {
          z = 2;
          x = j*iterationscale;
          y = i*iterationscale;
          var group = starttile;
          makesprite(j*iterationscale,i*iterationscale,z,group);
          startxy = [x,y];
        } else {
          z = 0;
          var group = grasstile;
          makesprite(j*iterationscale,i*iterationscale,z,group);
        }
      }
    }
  createcar();
  drawSprites(grasstile,tracktile,starttile);
}

function draw() {
  angleMode(DEGREES);
  checkkeys();
  drawSprites();
  if (car.overlap(grasstile)){
    movecar();
  }
}

//creates a sprite given the number and place in track file
function makesprite(x,y,z,group){
  var sprite = createSprite(x,y);
  sprite.addImage(images[z]);
  sprite.scale = tilesize/100;
  group.add(sprite);
}
//create a car at the start line
  function createcar(){
    car = createSprite(startxy[0],startxy[1]);
    car.addImage(images[3]);
    car.scale = carsize;
    car.rotateToDirection = true;
    car.debug = true;
    car.rotation = -90;
    } // rotation to the startline is wrong if start is not up, however could be fixed with a detector to detect nearest track tile. 
// moves car to start once grass is hit
  function movecar(){
    car.position.x = startxy[0];
    car.position.y = startxy[1];
    car.setSpeed(0);
    car.rotation = -90;
  }
// checks where a certain key is pressed and moves car in that direction
  function checkkeys() {
      if (keyIsDown(65)) {
        car.rotation = car.rotation - 5;
      }
      if (keyIsDown(68)) {
        car.rotation = car.rotation + 5;
      }
      if (keyIsDown(87)) {
        car.limitSpeed(speedlimit);
        car.addSpeed(speedlimit/(speedlimit*10),car.rotation);
      }
      if (keyIsDown(83)) {
          car.addSpeed(-0.1,car.rotation);
          car.rotation = car.rotation
      }
    }