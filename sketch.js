// load needed variables  
let images = [];
track = []
var width;
var height;

var grasstile;
var tracktile;
var starttile;

var startxy;

var car;

// preload images
function preload(){
images[0]= loadImage("grass.png");
images[1]= loadImage("track.png");
images[2]= loadImage("start.png");
images[3]= loadImage("car.png");

//convert the text file into a array
track = loadStrings("track.txt");
}
function setup() {
  createCanvas(1000,1000);
  background("grey");
// add groups
  grasstile = new Group();
  tracktile = new Group();
  starttile = new Group();


// set sizing for tiles and car
tilesize = 125;                     // each side is 50*50 at 100 
carsize = tilesize/4/500;
tilescale = tilesize/100;
iterationscale = tilesize/2;
// create the track by iterating through the array first for each row (the array entry) and then for each entry in the row (numbers in the string in array entry)
  print(track);
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
//create a car at the start line
  car = createSprite(startxy[0],startxy[1]);
  car.addImage(images[3]);
  car.scale = carsize;
  car.rotateToDirection = true;
// could be done by using a collide and a custom funtion to check direction
  car.rotation = -90;
drawSprites(grasstile,tracktile,starttile);
}


function makesprite(x,y,z,group){
  var sprite = createSprite(x,y);
  sprite.addImage(images[z]);
  sprite.scale = tilesize/100;
  group.add(sprite);
}


function draw() {

if (keyIsDown(65)) {
  car.rotation = car.rotation - 5;
}
if (keyIsDown(68)) {
  car.rotation = car.rotation + 5;
}
if (keyIsDown(87)) {
  car.setVelocity(0,-1);
}
if (keyIsDown(83)) {
  car.setVelocity(0,1)
}

  drawSprites();
}

