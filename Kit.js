// Creates the instance of a drum kit and loads the drum hits that correspond to it
function Kit(elementName1,elementName2,elementName3,elementName4,kitName) {


	P1 = new Hit(elementName1,'audio/909/B.wav');
    Q = new Hit(elementName2,'audio/909/H.wav');
    // W = new Pad('#dropW');
    // E = new Pad('#dropE');
    // R = new Pad('#dropR');

    A = new Hit(elementName3,'audio/909/CLP.wav');
    // S = new Pad('#dropS');
    // D = new Pad('#dropD');
    // F = new Pad('#dropF');

    Z = new Hit(elementName4,'audio/909/S.wav');




}



// Hit creates the instance of a drum hit and maps it to an HTML element
function Hit(elementName,filePath){

	
	var element = select(elementName);

	var sample = new Tone.Player(filePath).toMaster();
<<<<<<< HEAD
	sample.setLoopPoints(0,1);
	// sample.retrigger = true;
	
	// var seq = new Tone.Sequence(function(time){
	// 		console.log(time);
	// 		sample.start();
	// 		// straight quarter notes
	// 		}, "4n");
=======
>>>>>>> 9198e1a539757cdc81ce6ec812d6851fb3709b82

	this.play = function(keyCount) {

		if (keyCount === 1){
			sample.start();
			element.style('background-color','#cfc');

		}
		else {
<<<<<<< HEAD
			
			// seq.start();
			sample.loop = true;
			sample.start();

			// var padLoop = new Tone.Loop(function(time){
			// 	//triggered every eighth note. 
			// 	console.log(time);
			// 	sample.start();
			// }, "8n");
			// loop.start();
=======

			loop = new Tone.Loop(function(time){
				//triggered every eighth note. 
				console.log(time);
				sample.start();
			}, "8n");
			loop.start();
>>>>>>> 9198e1a539757cdc81ce6ec812d6851fb3709b82
		}

	}
	this.stop = function() {
		element.style('background-color','#ccc');
<<<<<<< HEAD
		sample.stop();
=======
>>>>>>> 9198e1a539757cdc81ce6ec812d6851fb3709b82
	}
}