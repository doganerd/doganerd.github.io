//all buttons
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
    document.querySelector("#play").addEventListener("click", Mix);
});
//mix
function Mix() {
    var kick = setInterval(one, 500);
    var index = 0;
    var beat = ["assets/kick.mp3", "assets/hihat.mp3", "assets/snare.mp3"];
    function one() {
        var sequence = new Audio(beat[index]);
        sequence.play();
        index = index + 1;
        if (index > 3)
            index = 0;
        console.log(beat[index]);
    }
}
//# sourceMappingURL=skript2.js.map