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

  print(track);
 for (let i = 0; i < track.length; i++) {
    for (let j = 0; j < track[i].length; j++) {
      if (track[i][j] == "1") {
        image(images[1], j * 100, i * 100, 100, 100);
      } else if (track[i][j] == " ") {
      j++
      } else {
        image(images[0], j * 100, i * 100, 100, 100);
      }
    }
  }
}

function draw() {

}

