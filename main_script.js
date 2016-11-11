
var Q,W,E,R,A,S,D,F,Z,X,C,V;

// Flags

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
               kitFlag = false;
               // console.log(kitFlag);

               break;
          case "BEATBOX":
               button.value = "CUSTOM";
               kitFlag = true;
               // console.log(kitFlag);
               break;
     }
     // console.log(button.value); //debug
}

function setup() {
	createCanvas(1,1);
	background(1);


	// Initialize all the Pads in the sampler


  if (kitFlag == true) {

    console.log('custom mode is on');

    Q = new Pad('#drop1');

    E = new Pad('#dropQ');

    T = new Pad('#dropA');

    U = new Pad('#dropZ');

  } else {

    console.log('beat mode is on');
    kit = new Kit('#drop1','#dropQ','#dropA','#dropZ','box1');

  }
	
}

//QWERTY interface and keyboard input mapping
function keyTyped() {

// Sample1
  if (key === '1') {
    Q.play("4n");
  } else if (key === '2') {
    Q.play("8n");
  } else if (key === 'q' || key === 'Q') {
    Q.play("8t");
  } else if (key === 'w' || key === 'W') {
    Q.play("16n");
  } else if (key === 'a' || key === 'A') {
    Q.play("6n");
  } else if (key === 's' || key === 'S') {
    Q.play("12n");
  } else if (key === 'z' || key === 'Z') {
    Q.play("16t");
  } else if (key === 'x' || key === 'X') {
    Q.play("24n");
  }

// Sample2
  else if (key === '3') {
    E.play("4n");
  } else if (key === '4') {
    E.play("8n");
  } else if (key === 'e' || key === 'E') {
    E.play("8t");
  } else if (key === 'r' || key === 'R') {
    E.play("16n");
  } else if (key === 'd' || key === 'D') {
    E.play("6n");
  } else if (key === 'f' || key === 'F') {
    E.play("12n");
  } else if (key === 'c' || key === 'C') {
    E.play("16t");
  } else if (key === 'v' || key === 'V') {
    E.play("24n");
  }

// Sample3
  else if (key === '5') {
    T.play("4n");
  } else if (key === '6') {
    T.play("8n");
  } else if (key === 't' || key === 'T') {
    T.play("8t");
  } else if (key === 'y' || key === 'Y') {
    T.play("16n");
  } else if (key === 'g' || key === 'G') {
    T.play("6n");
  } else if (key === 'h' || key === 'H') {
    T.play("12n");
  } else if (key === 'b' || key === 'B') {
    T.play("16t");
  } else if (key === 'n' || key === 'N') {
    T.play("24n");
  }

// Sample4
  else if (key === '7') {
    U.play("4n");
  } else if (key === '8') {
    U.play("8n");
  } else if (key === 'u' || key === 'U') {
    U.play("8t");
  } else if (key === 'i' || key === 'I') {
    U.play("16n");
  } else if (key === 'j' || key === 'J') {
    U.play("6n");
  } else if (key === 'k' || key === 'K') {
    U.play("12n");
  } else if (key === 'm' || key === 'M') {
    U.play("16t");
  } else if (key === ',') {
    U.play("24n");
  }

}

function keyReleased() {

// Stop playing the sample if key is released

  if (['1','2','q','Q','w','W','a','A','s','S','z','Z','x','X'].contains(key)) {
    Q.stop();
  }
  else if (['3','4','e','E','r','R','d','D','f','F','c','C','v','V'].contains(key)) {
    E.stop();
  } 
  else if (['5','6','t','T','y','Y','g','G','h','H','b','B','n','N'].contains(key)) {
    T.stop();
  } 
  else if (['7','8','u','U','i','I','j','J','k','K','m','M',','].contains(key)) {
    U.stop();
  } 

  keyCount = 0;
    
}

// Enable Audio

Tone.Transport.start();
Tone.Transport.bpm.value = 100;
// Tone.Transport.loop = true; //Play audio