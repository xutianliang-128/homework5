// Add js here.
window.onload = init;

var video = document.getElementById("videoplayer");

function init() {
    video.load();
    video.autoplay = false;
    video.loop = false;
}

var play = document.getElementById("play");

play.addEventListener('click', function playV () {
    video.play();
});

var pause = document.getElementById("pause");

pause.addEventListener('click', function pauseV () {
    video.pause();
});

var slow = document.getElementById("slower");

slow.addEventListener('click', function slower () {
    if (video.playbackRate === 2) {
        video.playbackRate = 1;
    } else if (video.playbackRate === 1) {
        video.playbackRate = 0.5;
    } else {
        window.alert('Video is at slowest speed!');
    }
});

var fast = document.getElementById("faster");

fast.addEventListener('click', function faster () {
    if (video.playbackRate === 0.5) {
        video.playbackRate = 1;
    } else if (video.playbackRate === 1) {
        video.playbackRate = 2;
    } else {
        window.alert('Video is at fastest speed!');
    }
});

var skip = document.getElementById("skip");

skip.addEventListener('click', function skip15s () {
    let time = video.currentTime + 15;
    if (time >= video.duration) {
        video.currentTime = 0;
        video.pause();
    } else {
        video.currentTime = time;

    }
});

var mute = document.getElementById("mute");

mute.addEventListener('click', function changeMute () {

    if (video.muted) {
        video.muted = false;
        mute.innerHTML = "Mute";
    } else {
        video.muted = true;
        mute.innerHTML = "Unmute";
    }
});

var slider = document.getElementById("slider");
var output = document.getElementById("volume");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  video.volume = this.value / 100;
}