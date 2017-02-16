window.onload = function() {
	var canvas = document.getElementById("mainCanvas");
	var canvasContext = canvas.getContext("2d");
	canvasContext.fillStyle = "#97084f";
	canvasContext.fillRect(0, 0, 800, 300);

	if (window.File && window.FileReader && window.FileList && window.Blob) {

	} else {
		alert("Browser does not support File API.");
	}
}

function Visualize(){
	var audioData, decodedData;
	var input = document.getElementById("audioFile");
	var file = input.files[0];
	var fr = new FileReader();
	fr.readAsArrayBuffer(file);
	fr.onload = function() {
			var audioData = fr.result;
			console.log(audioData);
			var audioCtx = new AudioContext();
			audioCtx.decodeAudioData(audioData).then(function(decodedAudioData) {
				decodedData = decodedAudioData;
				console.log(decodedAudioData);
				AnalyseAudio(decodedData);
		});
	}
}

function AnalyseAudio(audioData) {
	var audioContext = new AudioContext()
	var analyser = new AnalyserNode(audioContext);
	var bufferSize = 4096;
	analyser.fftSize = bufferSize;
	console.log(analyser);

	var dataArray = new Float32Array(bufferSize);
	analyser.getFloatFrequencyData(dataArray);
	Draw(dataArray, bufferSize);
}

function Draw(dataArray, bufferLength) {
	var canvas = document.getElementById("mainCanvas");
	var canvasContext = canvas.getContext("2d");

}
