var mysound = ["kick.mp3", "hihat.mp3", "snare.mp3"];
var record = false;
var sequence;
window.addEventListener("load", function () {
    document.querySelector("#audio1").addEventListener("click", function () { playSample("A.mp3"); });
    document.querySelector("#audio2").addEventListener("click", function () { playSample("C.mp3"); });
    document.querySelector("#audio3").addEventListener("click", function () { playSample("F.mp3"); });
    document.querySelector("#audio4").addEventListener("click", function () { playSample("G.mp3"); });
    document.querySelector("#audio5").addEventListener("click", function () { playSample("kick.mp3"); });
    document.querySelector("#audio6").addEventListener("click", function () { playSample("hihat.mp3"); });
    document.querySelector("#audio7").addEventListener("click", function () { playSample("laugh-1.mp3"); });
    document.querySelector("#audio8").addEventListener("click", function () { playSample("laugh-2.mp3"); });
    document.querySelector("#audio9").addEventListener("click", function () { playSample("snare.mp3"); });
    document.querySelector("#play").addEventListener("click", sample);
    document.querySelector("#delete").addEventListener("click", deleting);
    document.querySelector("#record").addEventListener("click", recording);
});
function playSample(beat) {
    var sound = new Audio("assets/" + beat);
    sound.play();
    if (record == true) {
        mysound.push(beat);
    }
    console.log("Kick");
}
function sample() {
    var index = 0;
    if (document.getElementById("play").classList.contains("fa-play")) {
        document.getElementById("play").classList.remove("fa-play");
        document.getElementById("play").classList.add("fa-pause");
        sequence = setInterval(mySound, 500);
        record = false;
    }
    else {
        document.getElementById("play").classList.remove("fa-pause");
        document.getElementById("play").classList.add("fa-play");
        clearInterval(sequence);
    }
    function mySound() {
        playSample(mysound[index]);
        index += 1;
        if (index > mysound.length)
            index = 0;
    }
}
function deleting() {
    mysound = [];
}
function recording() {
    record = true;
}
//# sourceMappingURL=skript8.js.map