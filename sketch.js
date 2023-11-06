let screenHeight = 737;
let screenWidth = 1535;
let clickCount = 0;
let page = [];

let masterX = 740;
let masterY = 220;

function setup() {
  noCanvas();

  backdrop = createImg('clouds.jpg');
  backdrop.size(screenWidth, screenHeight);


  let button = createImg('black button.png');
  button.size(87, 87);
  button.position(screenWidth / 2, screenHeight - 200);


  button.mouseClicked(master);
}

function master() {
  clickCount = clickCount + 1;
  if (clickCount <= 1) {

    page[1] = createP("WHEATFIELD");
    page[1].position(masterX, masterY);
    console.log("click 1!");

  } else if (clickCount == 2) {
    page[1].hide();
    page[2] = createP("LAMB");
    page[2].position(masterX, masterY);
    console.log("click 2!");
  }

  else if (clickCount == 3) {
    page[2].hide();
    page[3] = createP("BUTTER");
    page[3].position(masterX, masterY);
    console.log("click 3!");
  }

  else if (clickCount == 4) {
    page[3].hide();
    page[4] = createP("41.19692905247007, -87.04524240522085");
    page[4].position(masterX, masterY);
    console.log("click 4!");
  }

  else if (clickCount == 5) {
    page[4].hide();
    page[5] = createImg('lambfeet.jpg');
    page[5].position(masterX, masterY);
    console.log("click 5!");
  }

  else if (clickCount == 6) {
    page[5].hide();
    page[6] = createP("BLESSED");
    page[6].position(masterX, masterY);
    console.log("click 6!");
  }

  else if (clickCount == 7) {
    page[6].hide();
    page[7] = createP("BE");
    page[7].position(masterX, masterY);
    console.log("click 7");
  }

  else if (clickCount == 8) {
    page[7].hide();
    page[8] = createP("THE");
    page[8].position(masterX, masterY);
    console.log("click 8!");
  }

  else if (clickCount == 9) {
    page[8].hide();
    page[9] = createP("NAME");
    page[9].position(masterX, masterY);
    console.log("click 9!");
  }

  else if (clickCount == 10) {
    page[9].hide();
    page[10] = createP("DELIGHTFUL");
    page[10].position(masterX, masterY);
    console.log("click 10!");
  }

  else if (clickCount == 11) {
    page[10].hide();
    page[11] = createImg('testGIF.gif');
    page[11].position(masterX, masterY);
    console.log("click 11!");
  }

}

//clickcounter
// function mouseReleased() {
//   clickCount++;
//   console.log("clicked");
// }




//make click number variable, based on mose clicks
//switch -- p5 reference?