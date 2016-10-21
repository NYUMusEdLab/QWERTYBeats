// Creates the instance of a drum kit and loads the drum hits that correspond to it
function Kit(elementName1,elementName2,elementName3,elementName4,kitName) {


	Q = new Hit(elementName1,'audio/909/B.wav');
    E = new Hit(elementName2,'audio/909/H.wav');
    // W = new Pad('#dropW');
    // E = new Pad('#dropE');
    // R = new Pad('#dropR');

    T = new Hit(elementName3,'audio/909/CLP.wav');
    // S = new Pad('#dropS');
    // D = new Pad('#dropD');
    // F = new Pad('#dropF');

    U = new Hit(elementName4,'audio/909/S.wav');




}



// Hit creates the instance of a drum hit and maps it to an HTML element
function Hit(elementName,filePath){

	
	var element = select(elementName);

	var sample = new Tone.Player(filePath).toMaster();
	sample.retrigger = true;
	
	var padLoop = new Tone.Loop(function(time){
				//triggered every eighth note. 
				// console.log(time);
				sample.start();
				element.style('background-color','#cfc');
			}, "8n")

	this.play = function(int) {

		// if (keyCount === 1){
		// 	sample.start();
			

		// }
		// else {
			
			// seq.start();
			// sample.loop = true;
			// sample.start();
			padLoop.interval = int;
			padLoop.start();
		// }

	}
	this.stop = function() {
		element.style('background-color','#ccc');
		sample.stop();
		padLoop.stop();
	}
}