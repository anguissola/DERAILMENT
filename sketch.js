let screenHeight = 737;
let screenWidth = 1535;
let clickCount = 0;
let page1, page2, page3, page4, page5, page6, page7, page8, page9, page10;

let masterX = 740;
let masterY = 220;

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

  page1 = createP("WHEATFIELD");
  page1.position(masterX,masterY);
  console.log("click 1!");

} else if (clickCount==2) {
  page1.hide();
  page2 = createP("LAMB");
  page2.position(masterX,masterY);
  console.log("click 2!");
}

else if (clickCount==3) {
  page2.hide();
  page3 = createP("BUTTER");
  page3.position(masterX,masterY);
  console.log("click 3!");
}

else if (clickCount==4) {
  page3.hide();
  page4 = createP("41.19692905247007, -87.04524240522085");
  page4.position(masterX,masterY);
  console.log("click 4!");
}

else if (clickCount==5) {
  page4.hide();
  page5 = createImg('lambfeet.jpg');
  page5.position(masterX,masterY);
  console.log("click 5!");
}

else if (clickCount==6) {
  page5.hide();
  page6 = createP("BLESSED");
  page6.position(masterX,masterY);
  console.log("click 6!");
}

else if (clickCount==7) {
  page6.hide();
  page7 = createP("BE");
  page7.position(masterX,masterY);
  console.log("click 7");
}

else if (clickCount==8) {
  page7.hide();
  page8 = createP("THE");
  page8.position(masterX,masterY);
  console.log("click 8!");
}

else if (clickCount==9) {
  page8.hide();
  page9 = createP("NAME");
  page9.position(masterX,masterY);
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