// load needed variables  
let images = [];
track = []
var width;
var height;

var grasstile;
var tracktile;
var starttile;

var startxy;
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
  createCanvas(2000,2000);
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
  drawSprites();
}
function makesprite(x,y,z,group){
  var sprite = createSprite(x,y);
  sprite.addImage(images[z]);
  sprite.scale = tilesize/100;
  group.add(sprite);
}

function draw() {
//create a car at the start line
  var car = createSprite(startxy[0],startxy[1]);
  car.addImage(images[3]);
  car.scale = carsize;
// could be done by using a collide and a custom funtion to check direction
  car.rotation = -90;

// crea

  drawSprites();
}

