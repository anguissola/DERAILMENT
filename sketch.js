let screenHeight = 737;
let screenWidth = 1535;
let clickCount = 0;
let page = [];

let masterX = 720;
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

    page[1] = createImg('secrecyAgreement.png');
    page[1].position(masterX-330, masterY);
    console.log("click 1!");

  } else if (clickCount == 2) {
    page[1].hide();
    page[2] = createP("WHEATFIELD");
    page[2].position(masterX, masterY);
    console.log("click 2!");
  }
  
  else if (clickCount == 2) {
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
    page[4].position(masterX-100, masterY);
    console.log("click 4!");
  }

  else if (clickCount == 5) {
    page[4].hide();
    page[5] = createImg('lambfeet.jpg');
    page[5].position(masterX, masterY);
    page[5].size(200,200);
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
    page[11] = createImg('schematic.png');
    page[11].position(masterX-180, masterY-100);
    page[11].size(500,350);
    console.log("click 11!");
  }

  else if (clickCount == 12) {
    page[11].hide();
    page[12] = createP("IF");
    page[12].position(masterX, masterY);
  }

  else if (clickCount == 13) {
    page[12].hide();
    page[13] = createP("I");
    page[13].position(masterX, masterY);
  }
  else if (clickCount == 14) {
    page[13].hide();
    page[14] = createP("WERE");
    page[14].position(masterX, masterY);
  }
  else if (clickCount == 15) {
    page[14].hide();
    page[15] = createP("TO");
    page[15].position(masterX, masterY);
  }
  else if (clickCount == 16) {
    page[15].hide();
    page[16] = createP("BABY");
    page[16].position(masterX, masterY);
  }
  else if (clickCount == 17) {
    page[16].hide();
    page[17] = createP(" ");
    page[17].position(masterX, masterY);
  }
  else if (clickCount == 18) {
    page[17].hide();
    page[18] = createP("BABY");
    page[18].position(masterX, masterY);
  }
  else if (clickCount == 19) {
    page[18].hide();
    page[19] = createP(" ");
    page[19].position(masterX, masterY);
  }
  else if (clickCount == 20) {
    page[19].hide();
    page[20] = createP("BABY");
    page[20].position(masterX, masterY);
  }
  else if (clickCount == 21) {
    page[20].hide();
    page[21] = createImg('houseicon.jpg');
    page[21].position(masterX-180, masterY-100);
    page[21].size(500,350);
}

//next plot

else if (clickCount == 22) {
  page[21].hide();
  page[22] = createP("IF");
  page[22].position(masterX, masterY);
}

else if (clickCount == 23) {
  page[22].hide();
  page[23] = createP("I");
  page[23].position(masterX, masterY);
}
else if (clickCount == 24) {
  page[23].hide();
  page[24] = createP("WERE");
  page[24].position(masterX, masterY);
}
else if (clickCount == 25) {
  page[24].hide();
  page[25] = createP("TO");
  page[25].position(masterX, masterY);
}
else if (clickCount == 26) {
  page[25].hide();
  page[26] = createP("HOLD");
  page[26].position(masterX, masterY);
}
else if (clickCount == 27) {
  page[26].hide();
  page[27] = createP("YOU");
  page[27].position(masterX, masterY);
}
else if (clickCount == 28) {
  page[27].hide();
  page[28] = createImg("lambHead.jpg");
  page[28].size(200,200);
  page[28].position(masterX, masterY);
}
else if (clickCount == 29) {
  page[28].hide();
  page[29] = createP("BABY");
  page[29].position(masterX, masterY);
}
else if (clickCount == 30) {
  page[29].hide();
  page[30] = createP("I");
  page[30].position(masterX, masterY);
}
else if (clickCount == 31) {
  page[30].hide();
  page[31] = createP("LOVE");
  page[31].position(masterX, masterY);
}
else if (clickCount == 32) {
  page[31].hide();
  page[32] = createP('YOU');
  page[32].position(masterX, masterY);
}

//bar

else if (clickCount == 33) {
  page[32].hide();
  page[33] = createImg('totalRedact.png');
  page[33].position(masterX-200, masterY-100);
  page[33].size(500,350);
}

else if (clickCount == 34) {
  page[33].hide();
  page[34] = createP("I");
  page[34].position(masterX, masterY);
}
else if (clickCount == 35) {
  page[34].hide();
  page[35] = createP("SUPPOSE");
  page[35].position(masterX, masterY);
}
else if (clickCount == 36) {
  page[35].hide();
  page[36] = createP("I'VE");
  page[36].position(masterX, masterY);
}
else if (clickCount == 37) {
  page[36].hide();
  page[37] = createP("ALWAYS");
  page[37].position(masterX, masterY);
}
else if (clickCount == 38) {
  page[37].hide();
  page[38] = createP("WANTED");
  page[38].position(masterX, masterY);
}
else if (clickCount == 39) {
  page[38].hide();
  page[39] = createP("TO");
  page[39].position(masterX, masterY);
}
else if (clickCount == 40) {
  page[39].hide();
  page[40] = createP("SAY");
  page[40].position(masterX, masterY);
}
else if (clickCount == 41) {
  page[40].hide();
  page[41] = createP("THREE");
  page[41].position(masterX, masterY);
}
else if (clickCount == 42) {
  page[41].hide();
  page[42] = createP("THINGS:");
  page[42].position(masterX, masterY);
}
// //bar
// else if (clickCount == 43) {
//   page[42].hide();
//   page[43] = createImg('totalRedact.png');
//   page[43].position(masterX-200, masterY-100);
//   page[43].size(500,350);
// }

// else if (clickCount == 44) {
//   page[43].hide();
//   page[44] = createP("I");
//   page[44].position(masterX, masterY);
// }
// else if (clickCount == 45) {
//   page[44].hide();
//   page[45] = createP("SUPPOSE");
//   page[45].position(masterX, masterY);
// }
// else if (clickCount == 46) {
//   page[45].hide();
//   page[46] = createP("I'VE");
//   page[46].position(masterX, masterY);
// }
// else if (clickCount == 47) {
//   page[46].hide();
//   page[47] = createP("ALWAYS");
//   page[47].position(masterX, masterY);
// }
// else if (clickCount == 48) {
//   page[47].hide();
//   page[48] = createP("WANTED");
//   page[48].position(masterX, masterY);
// }
// else if (clickCount == 49) {
//   page[48].hide();
//   page[49] = createP("TO");
//   page[49].position(masterX, masterY);
// }
// else if (clickCount == 50) {
//   page[59].hide();
//   page[50] = createP("SAY");
//   page[50].position(masterX, masterY);
// }
// else if (clickCount == 51) {
//   page[50].hide();
//   page[51] = createP("THREE");
//   page[51].position(masterX, masterY);
// }
// else if (clickCount == 52) {
//   page[51].hide();
//   page[52] = createP("THINGS:");
//   page[52].position(masterX, masterY);
// }

}





//make click number variable, based on mose clicks
//switch -- p5 reference?