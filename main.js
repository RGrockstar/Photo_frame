function preload(){
}
function setup() { 
  canvas = createCanvas(400, 400);
  canvas.center(); 
  video = createCapture(VIDEO);
  video.hide();
}
function draw() {
 image(video, 80, 90, 230, 230);

 rect(10, 20, 380, 35, 50);
 rect(10, 360, 380, 35, 50);
 rect(10, 20, 30, 375, 50);
 rect(355, 20, 30, 375, 50);
}
function take_snapshot(){ 
    save('photo_frame.png');
} 