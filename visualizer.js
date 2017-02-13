window.onload = function() {
	var canvas = document.getElementById("mainCanvas");
	var canvasContext = canvas.getContext("2d");
	canvasContext.fillStyle = "#97084f";
	canvasContext.fillRect(0, 0, 800, 300);
}

function Visualize(){
	var audioFile = document.getElementById("audioFile");
	var audioContext = new AudioContext();
	console.log(audioContext);

}
