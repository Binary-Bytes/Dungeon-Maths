// Audio

var backgroundMusic = new Audio('/img/sounds/BackgroundMusic.ogg');

var musicBTN = document.getElementById('music');
var warningSoundBTN = document.getElementById('warningSound');

var checkerBG; // Checker (Background Music)
var checkerWS; // Checker (Warning Sound)

musicBTN.checked = true;
warningSoundBTN.checked = true;

backgroundMusicHandler();

function backgroundMusicHandler() {
    if (musicBTN.checked == true) {
        checkerBG = 0;
    } else {
        checkerBG = 1;
    }

    if (checkerBG == 1) {
        checkerBG = 0;

        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
    } else if (checkerBG == 0) {
        checkerBG = 1;

        backgroundMusic.loop = true;
        backgroundMusic.play();
    }
}

function warningSoundHandler() {
    const wS = new Audio('/img/sounds/MonsterWarningSound.mp3');

    if (warningSoundBTN.checked == true) {
        checkerWS = 0;
    } else {
        checkerWS = 1;
    }

    if (checkerWS == 1) {
        checkerWS = 0;

        wS.pause();
        wS.currentTime = 0;
    } else if (checkerWS == 0) {
        checkerWS = 1;

        wS.play();
    }
}