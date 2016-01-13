(function (){
	var video = document.querySelector('#video');

	video.addEventListener('click', function() {
		var canvas = document.querySelector('#canvas');
		var context = canvas.getContext('2d');

		context.drawImage(video, 1, 1);
	}, false);

})();