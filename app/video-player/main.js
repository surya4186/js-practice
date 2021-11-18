let playBtn = document.getElementById('play'),
    pauseBtn = document.getElementById('pause'),
    fwBtn = document.getElementById('f10'),
    bwBtn = document.getElementById('b10'),
    volumeBtn = document.getElementById('volume'),
    volumeInputEle = document.getElementById('volume-s'),

    downloadBtn = document.getElementById('download'),
    videoQualityBtn = document.getElementById('videoqulity'),
    video = document.getElementById('main-video'),
    fullScreenBtn = document.getElementById('fs'),
    muteBtn = document.getElementById('mute'),
    unmuteBtn = document.getElementById('unmute');

function play() {

    console.log('video play');
    video.play();
}

function pause() {

    console.log('pause');
    video.pause();

}
function forwads10() {

    console.log('f10');
    let cTime = video.currentTime;
    console.log(cTime);
    cTime = cTime + 10;
    video.currentTime = cTime;

}
function back10() {

    console.log('b10');
    let cTime = video.currentTime;
    console.log(cTime);
    cTime = cTime - 10;
    video.currentTime = cTime;

}

function volumeUpdate() {

    // console.log('volume-up');
    let volumeInput = volumeInputEle.value;
    volumeInput.volumeInput / 100;
    console.log(volumeInput);

    video.volume = volumeInput;



}

function dowmload() {
    let filePath = video.getAttribute('src');

    console.log(filePath);

}

function quality() {

    console.log('quality');

}

function fullScreen() {
    console.log('fs');
    if (fullScreenBtn.requestFullscreen) {
        fullScreenBtn.requestFullscreen();
    }
    //   else if (fullScreenBtn.mozRequestFullScreen) {
    //     fullScreenBtn.mozRequestFullScreen();
    //   } else if (fullScreenBtn.webkitRequestFullscreen) {
    //     fullScreenBtn.webkitRequestFullscreen();
    //   } else if (fullScreenBtn.msRequestFullscreen) { 
    //     fullScreenBtn.msRequestFullscreen();
    //   }

}
function mute() {
    console.log('mute');
    video.muted = true;

}
function unmute() {
    console.log('unmute');
    video.muted = false;

}



playBtn.addEventListener('click', play);
pauseBtn.addEventListener('click', pause);
fwBtn.addEventListener('click', forwads10);
bwBtn.addEventListener('click', back10);

volumeBtn.addEventListener('click', volumeUpdate);

downloadBtn.addEventListener('click', dowmload);
videoQualityBtn.addEventListener('change', quality);
fullScreenBtn.addEventListener('click', fullScreen);
muteBtn.addEventListener('click', mute);
unmuteBtn.addEventListener('click', unmute);


