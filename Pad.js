function Pad(elementName) {

	var sample;

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

		// createP(file.name + " " + file.size);
		// createP(file.data);
		sample = new Tone.Player(file.data).toMaster();
		sample.retrigger = true;
		// console.log(file);
	}

	this.play = function() {

		sample.start();
		element.style('background-color','#cfc');
	}
	
}