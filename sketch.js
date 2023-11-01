let screenHeight = 737;
let screenWidth = 1535;
let clickCount = 0;
let masterDisplay1, masterDisplay2, masterDisplay3, masterDisplay4, masterDisplay5, masterDisplay6, masterDisplay7, masterDisplay8, masterDisplay9, masterDisplay10;

let masterX = 740;
let masterY = 220

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

  masterDisplay1 = createP("WHEATFIELD");
  masterDisplay1.position(masterX,masterY);
  console.log("click 1!");

} else if (clickCount==2) {
  masterDisplay1.hide();
  masterDisplay2 = createP("LAMB");
  masterDisplay2.position(masterX,masterY);
  console.log("click 2!");
}

else if (clickCount==3) {
  masterDisplay2.hide();
  masterDisplay3 = createP("BUTTER");
  masterDisplay3.position(masterX,masterY);
  console.log("click 3!");
}

else if (clickCount==4) {
  masterDisplay3.hide();
  masterDisplay4 = createP("41.19692905247007, -87.04524240522085");
  masterDisplay4.position(masterX,masterY);
  console.log("click 4!");
}

else if (clickCount==5) {
  masterDisplay4.hide();
  masterDisplay5 = createImg('lambfeet.jpg');
  masterDisplay5.position(masterX,masterY);
  console.log("click 5!");
}

else if (clickCount==6) {
  masterDisplay5.hide();
  masterDisplay6 = createP("BLESSED");
  masterDisplay6.position(masterX,masterY);
  console.log("click 6!");
}

else if (clickCount==7) {
  masterDisplay6.hide();
  masterDisplay7 = createP("BE");
  masterDisplay7.position(masterX,masterY);
  console.log("click 7");
}

else if (clickCount==8) {
  masterDisplay7.hide();
  masterDisplay8 = createP("THE");
  masterDisplay8.position(masterX,masterY);
  console.log("click 8!");
}

else if (clickCount==9) {
  masterDisplay8.hide();
  masterDisplay9 = createP("NAME");
  masterDisplay9.position(masterX,masterY);
  console.log("click 9!");
}

}

//clickcounter
function mouseReleased () {
  clickCount++;
  console.log("clicked");
  }




//make click number variable, based on mose clicks
//switch -- p5 reference?