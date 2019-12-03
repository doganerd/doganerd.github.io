window.addEventListener("load", function () {
    document.querySelector("#audio1").addEventListener("mousedown", function () { playSample("kick.mp3"); });
    document.querySelector("#audio2").addEventListener("mousedown", function () { playSample("hihat.mp3"); });
    document.querySelector("#audio3").addEventListener("mousedown", function () { playSample("snare.mp3"); });
    document.querySelector("#audio4").addEventListener("mousedown", function () { playSample("A.mp3"); });
    document.querySelector("#audio5").addEventListener("mousedown", function () { playSample("C.mp3"); });
    document.querySelector("#audio6").addEventListener("mousedown", function () { playSample("F.mp3"); });
    document.querySelector("#audio7").addEventListener("mousedown", function () { playSample("G.mp3"); });
    document.querySelector("#audio8").addEventListener("mousedown", function () { playSample("laugh-1.mp3"); });
    document.querySelector("#audio9").addEventListener("mousedown", function () { playSample("laugh-2.mp3"); });
    document.querySelector("#play").addEventListener("click", Play);
});
function playSample(samples) {
    var sound = new Audio("assets/ + samples");
    sound.play();
}
;
function Play() {
    var Kick = setInterval(Xmas, 300);
    var index = 0;
    var Beat = ["assets/kick.mp3", "assets/hihat.mp3", "snare.mp3"];
    function Xmas() {
        var sequence = new Audio(Beat[index]);
        sequence.play();
        index += 1;
        if (index > 3)
            index = 0;
        console.log(Beat[index]);
    }
    ;
}
;
//# sourceMappingURL=skript2.js.map