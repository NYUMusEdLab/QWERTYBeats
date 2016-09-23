
var Q,W,E,R,A,S,D,F,Z,X,C,V;

function setup() {
	createCanvas(1,1);
	background(1);

	// Initialize all the Pads in the sampler

	Q = new Pad('#dropQ');
	W = new Pad('#dropW');
	E = new Pad('#dropE');
	R = new Pad('#dropR');

	A = new Pad('#dropA');
	S = new Pad('#dropS');
	D = new Pad('#dropD');
	F = new Pad('#dropF');

	Z = new Pad('#dropZ');
	X = new Pad('#dropX');
	C = new Pad('#dropC');
	V = new Pad('#dropV');
}

//QWERTY interface and keyboard input mapping
function keyTyped() {


  
  if (key === 'q' || key === 'Q') {
    Q.play();
  } else if (key === 'w' || key === 'W') {
    W.play();
  } else if (key === 'e' || key === 'E') {
    E.play();
  } else if (key === 'r' || key === 'R') {
    R.play();
  } 

  	else if (key === 'a' || key === 'A') {
    A.play();
  } else if (key === 's' || key === 'S') {
    S.play();
  } else if (key === 'd' || key === 'D') {
    D.play();
  } else if (key === 'f' || key === 'F') {
    F.play();
  } 

  	else if (key === 'z' || key === 'Z') {
    Z.play();
  } else if (key === 'x' || key === 'X') {
    X.play();
  } else if (key === 'c' || key === 'C') {
    C.play();
  } else if (key === 'v' || key === 'V') {
    V.play();
  }
}

// Enable Audio

Tone.Transport.start(); //Play audio