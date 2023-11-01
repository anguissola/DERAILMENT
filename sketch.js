let screenHeight = 737;
let screenWidth = 1535;
let clickCount;

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

function master() {

  let masterDisplay = createP("WHEATFIELD");
  masterDisplay.position(displayWidth/2,masterY);
  console.log("button clicked!!");

  //SPACING BETWEEN TEXT
  masterY += 45;
}


//make click number variable, based on mose clicks
//switch -- p5 reference?