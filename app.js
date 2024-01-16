//
const WHITE_KEYS = ["z", "x", "c", "v", "b", "n", "m"];
const BLACK_KEYS = ["s", "d", "g", "h", "j"];

const keys = document.querySelectorAll(".key");
const blackKeys = document.querySelectorAll(".key.black");
const whiteKeys = document.querySelectorAll(".key.white");

// console.log(keys);
keys.forEach(function (key) {
    key.addEventListener("click", ()=>{
        playNote(key);
    });
});

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    // console.log(key);
    // console.log(key.dataset);
    // console.log(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add("active");
    noteAudio.addEventListener("ended", function () {
        key.classList.remove("active");
    });
}

document.addEventListener("keydown", function (e) {
    // console.log(e);
    // console.log(e.key);
    let keyEl = e.key;
    let whiteKeyIndex = WHITE_KEYS.indexOf(keyEl);
    let blackKeyIndex = BLACK_KEYS.indexOf(keyEl);
    // console.log(whiteKeyIndex);
    // console.log(blackKeyIndex);
    if(whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
    if(blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});
