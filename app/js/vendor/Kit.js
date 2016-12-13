// Creates the instance of a drum kit and loads the drum hits that correspond to it
function Kit(elementName1,elementName2,elementName3,elementName4,kitName) {

 // Instantiates the family of sounds for a given kit.
 
	this.Q = new Hit(elementName1,'audio/' + kitName + '/1.wav');
    this.E = new Hit(elementName2,'audio/' + kitName + '/2.wav');
  	this.T = new Hit(elementName3,'audio/' + kitName + '/3.wav');
    this.U = new Hit(elementName4,'audio/' + kitName + '/4.wav');

}

// Hit creates the instance of a drum hit and maps it to an HTML element
function Hit(elementName,filePath){

	
	var element = document.querySelector(elementName);

	var sample = new Tone.Player(filePath).toMaster();
	sample.retrigger = true;
	
	var padLoop = new Tone.Loop(function(time){
				//triggered every eighth note. 
				sample.start();
				// element.style('background-color','#cfc');
			}, "8n");

	this.play = function(int) {

		// Takes int based on the key pressed and uses that as retrigger value
		padLoop.interval = int;
		padLoop.start();

	}
	this.stop = function() {
		// element.style('background-color','#ccc');
		sample.stop();
		padLoop.stop();
	}
}