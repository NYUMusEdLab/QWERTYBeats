
var Q,W,E,R,A,S,D,F,Z,X,C,V;

// Flags

var keyCount = 0;
var kitFlag = true;

function toggle(button) 
{
     switch(button.value)
     {
          case "CUSTOM":
               button.value = "909 KIT";
               break;
          case "909 KIT":
               button.value = "CUSTOM";
               break;
     }
}

function setup() {
	createCanvas(1,1);
	background(1);


	// Initialize all the Pads in the sampler


  if (kitFlag == false) {

    P1 = new Pad('#drop1');

    Q = new Pad('#dropQ');
    // W = new Pad('#dropW');
    // E = new Pad('#dropE');
    // R = new Pad('#dropR');

    A = new Pad('#dropA');
    // S = new Pad('#dropS');
    // D = new Pad('#dropD');
    // F = new Pad('#dropF');

    Z = new Pad('#dropZ');
    // X = new Pad('#dropX');
    // C = new Pad('#dropC');
    // V = new Pad('#dropV');

  }
  else {

    kit = new Kit('#drop1','#dropQ','#dropA','#dropZ','909');
  }

	
}

//QWERTY interface and keyboard input mapping
function keyTyped() {

  if (keyCount < 5){
    keyCount = keyCount + 1;
  }
  if (key === '1'){
    P1.play(keyCount);
  }
    else if (key === 'q' || key === 'Q') {
    Q.play(keyCount);
  } else if (key === 'w' || key === 'W') {
    W.play(keyCount);
  } else if (key === 'e' || key === 'E') {
    E.play(keyCount);
  } else if (key === 'r' || key === 'R') {
    R.play(keyCount);
  } 

  	else if (key === 'a' || key === 'A') {
    A.play(keyCount);
  } else if (key === 's' || key === 'S') {
    S.play(keyCount);
  } else if (key === 'd' || key === 'D') {
    D.play(keyCount);
  } else if (key === 'f' || key === 'F') {
    F.play(keyCount);
  } 

  	else if (key === 'z' || key === 'Z') {
    Z.play(keyCount);
  } else if (key === 'x' || key === 'X') {
    X.play(keyCount);
  } else if (key === 'c' || key === 'C') {
    C.play(keyCount);
  } else if (key === 'v' || key === 'V') {
    V.play(keyCount);
  }
}

function keyReleased() {



  if (keyCount < 5){
    keyCount = keyCount + 1;
  }
  if (key === '1'){
    P1.stop();
  }
    else if (key === 'q' || key === 'Q') {
    Q.stop();
  }
  // } else if (key === 'w' || key === 'W') {
  //   W.play(keyCount);
  // } else if (key === 'e' || key === 'E') {
  //   E.play(keyCount);
  // } else if (key === 'r' || key === 'R') {
  //   R.play(keyCount);
  // } 

    else if (key === 'a' || key === 'A') {
      A.stop();
  } 
  //   else if (key === 's' || key === 'S') {
  //   S.play(keyCount);
  // } else if (key === 'd' || key === 'D') {
  //   D.play(keyCount);
  // } else if (key === 'f' || key === 'F') {
  //   F.play(keyCount);
  // } 

    else if (key === 'z' || key === 'Z') {
    Z.stop();
  } 
  // else if (key === 'x' || key === 'X') {
  //   X.play(keyCount);
  // } else if (key === 'c' || key === 'C') {
  //   C.play(keyCount);
  // } else if (key === 'v' || key === 'V') {
  //   V.play(keyCount);
  // }

  keyCount = 0;
  
  

  
}


// Enable Audio

Tone.Transport.start();
// Tone.Transport.loop = true; //Play audio