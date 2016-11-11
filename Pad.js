// Class that accepts user generated pads. Allows drag/drop of samples.


function Pad(elementName) {

	var sample;
	var padLoop;

	var element = select(elementName);

	element.dragOver(highlight);
	element.dragLeave(unHighlight);
	element.drop(gotFile,loadHighlight);


	function highlight() {

		element.style('background-color','#eea');
	}

	function unHighlight() {

		element.style('background-color','#ccc');
	}

	function loadHighlight() {

		element.style('background-color','#bfb');
	}

	function gotFile(file) {

		sample = new Tone.Player(file.data).toMaster();
		sample.retrigger = true;
		// padLoop = new Tone.Loop(function(time){
		// 		//triggered every eighth note. 
		// 		sample.start();
		// 		element.style('background-color','#cfc');
		// 	}, "8n")
		console.log(padLoop);
	}
	this.play = function(int) {
		padLoop = new Tone.Loop(function(time){
				//triggered every eighth note. 
				sample.start();
				element.style('background-color','#cfc');
			}, "8n")
		// Takes int based on the key pressed and uses that as retrigger value
		padloop.interval = int;
		padloop.start();

	}
	this.stop = function() {
		element.style('background-color','#ccc');
		padloop.stop();
		padLoop.stop();
	}
	
}