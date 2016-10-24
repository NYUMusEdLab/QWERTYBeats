
var Q,W,E,R,A,S,D,F,Z,X,C,V;

// Flags

var keyCount = 0;
var kitFlag = false;

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

function toggle(button, kitFlag) 
{
     switch(button.value)
     {
          case "CUSTOM":
               button.value = "BEATBOX";
               // kitFlag = 1;
               break;
          case "BEATBOX":
               button.value = "CUSTOM";
               // kitFlag = 0;
               break;
     }
}

function setup() {
	createCanvas(1,1);
	background(1);


	// Initialize all the Pads in the sampler


  if (kitFlag == true) {

    Q = new Pad('#drop1');

    E = new Pad('#dropQ');
    // W = new Pad('#dropW');
    
    // E = new Pad('#dropE');
    // R = new Pad('#dropR');

    T = new Pad('#dropA');
    // S = new Pad('#dropS');
    
    // D = new Pad('#dropD');
    // F = new Pad('#dropF');

    U = new Pad('#dropZ');
    // X = new Pad('#dropX');
    
    // C = new Pad('#dropC');
    // V = new Pad('#dropV');

  }
  // else if (kitFlag === 1) {

  //   kit = new Kit('#drop1','#dropQ','#dropA','#dropZ','909');
  // }

  // else if (kitFlag === 2) {

  //   kit = new Kit('#drop1','#dropQ','#dropA','#dropZ','box1');    
  // }
  else {

    kit = new Kit('#drop1','#dropQ','#dropA','#dropZ','box1');

  }
	
}

//QWERTY interface and keyboard input mapping
function keyTyped() {

  if (key === 'q' || key === 'Q') {
    Q.play("4n");
  } else if (key === 'w' || key === 'W') {
    Q.play("8n");
  } else if (key === 'a' || key === 'A') {
    Q.play("12n");
  } else if (key === 's' || key === 'S') {
    Q.play("16n")
  }

  else if (key === 'e' || key === 'E') {
    E.play("4n");
  } else if (key === 'r' || key === 'R') {
    E.play("8n");
  } else if (key === 'd' || key === 'D') {
    E.play("12n");
  } else if (key === 'f' || key === 'F') {
    E.play("16n");
  }
  else if (key === 't' || key === 'T') {
    T.play("4n");
  } else if (key === 'y' || key === 'Y') {
    T.play("8n");
  } else if (key === 'g' || key === 'G') {
    T.play("12n");
  } else if (key === 'h' || key === 'H') {
    T.play("16n");
  }

  else if (key === 'u' || key === 'U') {
    U.play("4n");
  } else if (key === 'i' || key === 'I') {
    U.play("8n");
  } else if (key === 'j' || key === 'J') {
    U.play("12n");
  } else if (key === 'k' || key === 'K') {
    U.play("16n");
  }

  // 	else if (key === 'a' || key === 'A') {
  //   A.play(keyCount);
  // } else if (key === 's' || key === 'S') {
  //   S.play(keyCount);
  // } else if (key === 'd' || key === 'D') {
  //   D.play(keyCount);
  // } else if (key === 'f' || key === 'F') {
  //   F.play(keyCount);
  // } 

  // 	else if (key === 'z' || key === 'Z') {
  //   Z.play(keyCount);
  // } else if (key === 'x' || key === 'X') {
  //   X.play(keyCount);
  // } else if (key === 'c' || key === 'C') {
  //   C.play(keyCount);
  // } else if (key === 'v' || key === 'V') {
  //   V.play(keyCount);
  // }
}

function keyReleased() {


  if (['q','Q','w','W','a','A','s','S'].contains(key)) {
    Q.stop();
  }
  // } else if (key === 'w' || key === 'W') {
  //   W.play(keyCount);

  // } else if (key === 'r' || key === 'R') {
  //   R.play(keyCount);
  // } 

  else if (['e','E','r','R','d','D','f','F'].contains(key)) {
    E.stop();
} 
  //   else if (key === 's' || key === 'S') {
  //   S.play(keyCount);
  // } else if (key === 'd' || key === 'D') {
  //   D.play(keyCount);
  // } else if (key === 'f' || key === 'F') {
  //   F.play(keyCount);
  // } 
  else if (['t','T','y','Y','g','G','h','H'].contains(key)) {
  T.stop();
} 
  else if (['u','U','i','I','j','J','k','K'].contains(key)) {
  U.stop();
} 

    // else if (key === 'z' || key === 'Z') {
    // Z.stop();
  
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