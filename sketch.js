let screenHeight = 737;
let screenWidth = 1535;

let enterDerailment = ['DERAILMENT', 'WHEATFIELD', 'LAMB']

let index1 = 0;

let masterY = 100

function setup() {
  noCanvas();

  //column 1
 
  backdrop = createImg('clouds.jpg');
  backdrop.size(screenWidth,screenHeight);

  let button = createImg('black button.png');
  button.size(87, 87);
  button.position(screenWidth/2,screenHeight-200);
  button.mouseClicked(master);
 

}

function master() {
  console.log(index1);
  let masterDisplay = createP(enterDerailment[index1]);
  masterDisplay.position(displayWidth/2,masterY);
  index1++;
  console.log("Master functional!!");
  masterY += 45;
}

// function draw() {
//   background(125);
// }
