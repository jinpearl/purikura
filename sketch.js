var txt;
var myFont;
var ears;
var heart;
var stamps = [];
var choice;
var sticker;
var pictures = [];

var video;
var snapshots = [];

var date;



function setup() {
  video = createCapture(VIDEO);
  video.size(400, 300);
  video.hide()
  createCanvas(1000, 800);
  textFont(myFont);
  textSize(30);

  textAlign(CENTER);
  imageMode(CENTER);

  var d = day();
  var m = month();
  var y = year();

  date = y + "/" + m + "/" + d;

  ears = loadImage('elements/earssmall.png');
  heart = loadImage('elements/heartsmall.png');
}

function preload() {
  myFont = loadFont('elements/neverletgo.ttf');

}

function takesnap() {
  imageMode(CORNER);
  var frame;
  frame = image(video, 0, 0, 320, 240);

  frame = createImage(video);
   frame.loadPixels();
    frame.updatePixels();
  // image(frame, 0, 0, 320, 240);


  pictures.push(frame);
  // background(0);
}

function keyPressed() {
  if (keyCode === RETURN) {
    takesnap();
  }
  console.log(pictures.length)
}

function draw() {

  text(date, 700, 100);
  text('so wonderful', 720, 300);
  image(heart, 700, 200);
  image(ears, 700, 400);

  for (var i = 0; i < stamps.length; i++) {
    stamps[i].display();
  }

  // for (var i = 0; i < pictures.length; i++) {
  //   image(pictures[i], 0, i * 240);
  // }
  image(pictures[0], 0, 0);
}

function Sticker(x, y, thang) {
  this.x = x;
  this.y = y;
  this.thang = thang;

  this.display = function() {
    if (typeof this.thang === 'string') {
      text(this.thang, this.x, this.y);
    } else if (typeof this.thang === 'object') {
      image(this.thang, this.x, this.y);
    }
  }
}

function keyTyped() {
  if (key === '0') {
    choice = ears;
  } else if (key === '9') {
    choice = heart;
  } else if (key === '8') {
    choice = date;
  } else if (key === '7') {
    choice = 'so wonderful';
  }
}

function mousePressed() {
  var s = new Sticker(mouseX, mouseY, choice);
  stamps.push(s);
}