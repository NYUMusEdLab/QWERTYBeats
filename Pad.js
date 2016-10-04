function Pad(elementName) {

	var sample, loop;

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
		// sample.retrigger = true;
		// console.log(file);
	}

	this.play = function(keyCount) {

		if (keyCount === 1){
			sample.start();
			element.style('background-color','#cfc');

		}
		else {

<<<<<<< HEAD
			loop = Tone.Loop(function(time){
=======
<<<<<<< HEAD
			loop = Tone.Loop(function(time){
=======
			loop = new Tone.Loop(function(time){
>>>>>>> 9198e1a539757cdc81ce6ec812d6851fb3709b82
>>>>>>> 95d03ccba74a606ccc704fa189df9becec8dbdeb
				//triggered every eighth note. 
				console.log(time);
				sample.start();
			}, "8n");
			loop.start();
		}

	}

	this.stop = function() {
		element.style('background-color','#ccc');
	}
	
}