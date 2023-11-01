let screenHeight = 737;
let screenWidth = 1535;
let clickCount = 0;

let masterY = 100

function setup() {
  noCanvas();

 
  backdrop = createImg('clouds.jpg');
  backdrop.size(screenWidth,screenHeight);


  let button = createImg('black button.png');
  button.size(87, 87);
  button.position(screenWidth/2,screenHeight-200);


  button.mouseClicked(master);
}

function master (){
  // clickCount = clickCount +1;
if (clickCount<=1) {

  let masterDisplay = createP("WHEATFIELD");
  masterDisplay.position(displayWidth/2,masterY);
  console.log("button clicked once!");

  //SPACING BETWEEN TEXT
  masterY += 45;
} else {
  console.log("button clicked twice!");
}
}

function mouseReleased () {
  clickCount++;
  }




//make click number variable, based on mose clicks
//switch -- p5 reference?