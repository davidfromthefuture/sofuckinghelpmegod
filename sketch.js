var song;
var volhistory =[];

function preload(){
 song = loadSound('badboy.mp3');
  sword = loadModel('scany.obj');  
  //octahedron = loadModel('handz.obj');  
}


function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}function setup() {
  createCanvas(400, 400,WEBGL);
   button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  amp = new p5.Amplitude();
  }

function draw() {
  background(251,255,23);
  var vol = amp.getLevel();
   volhistory.push(vol);
  
  
  rotateY(frameCount/2,2);
  rotateX(frameCount,3);
   fill(234,235,204);
  
  scale(vol*30);
  model(sword); 
  
  
  //fill(23,93,255);
  //stroke(255, 0, 0);
  //strokeWeight(.5);
  //ellipsoid(vol*280, vol*280, vol*280);
  
}