(function (){
	var video = document.querySelector('#video');
	var canvas = document.querySelector('#canvas');
	var context = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height	= window.innerHeight;
	context.rect(20,20,150,100);
	context.fillStyle="red";
	context.fill();

	video.addEventListener('click', function() {
		var _this = this;

		(function loop() {
			if (!_this.paused && !_this.ended) {
				context.drawImage(_this, 0, 0);
				setTimeout(loop, 1000 / 30);
			}
		})();
	}, false);

})();