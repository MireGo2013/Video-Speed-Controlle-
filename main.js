const video = document.getElementById('video');
const controllerPlace = document.querySelector('.controller_speed');
const speedVideo = document.getElementById('playbackRate');

function moveSpeedVideo(e) {
	if (e.which !== 1) return;
	const y = e.pageY - this.offsetTop;
	const percent = y / this.offsetHeight;
	setTextforPlaybackRate(percent);
}

function setTextforPlaybackRate(percent) {
	const height = Math.round(percent * 100) + '%';
	const min = 0;
	const max = 4;
	const playbackRate = percent * (max - min) + min;
	speedVideo.style.height = height;
	speedVideo.textContent = playbackRate.toFixed(2) + 'x';
	video.playbackRate = playbackRate;
}

controllerPlace.addEventListener('click', moveSpeedVideo)
controllerPlace.addEventListener('mousemove', moveSpeedVideo)
