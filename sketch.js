let images = [];
track = []
function preload(){
images[0]= loadImage("grass.png");
images[1]= loadImage("track.png");
track = loadStrings("track.txt");
}
function setup() {
  createCanvas(2000,2000);
  background("grey");
  for (let i = 0; i < track.length; i++) {
   if (track[i] == "1") {
    image(images[1], i*100, 0, 100, 100);
   } else {
    image(images[0], i*100, 0, 100, 100);
   }
  }
}

function draw() {

}

