//# sourceMappingURL=skript2.js.map

window.addEventListener("load", function(audio) {

    document.querySelector("#audio1").addEventListener("click", function() { playSample("kick.mp3"); })
    document.querySelector("#audio2").addEventListener("click", function() { playSample("snare.mp3"); })
    document.querySelector("#audio3").addEventListener("click", function() { playSample("hihat.mp3"); })
    document.querySelector("#audio4").addEventListener("click", function() { playSample("F.mp3"); })
    document.querySelector("#audio5").addEventListener("click", function() { playSample("G.mp3"); })
    document.querySelector("#audio6").addEventListener("click", function() { playSample("A.mp3"); })
    document.querySelector("#audio7").addEventListener("click", function() { playSample("C.mp3"); })
    document.querySelector("#audio8").addEventListener("click", function() { playSample("laugh-1.mp3"); })
    document.querySelector("#audio9").addEventListener("click", function() { playSample("laugh-2.mp3"); })



})

function playSample(audio) {
    var sound = new Audio('assets/' + audio);
    sound.play();
}

function StartMusic() {
    var index = 0;
    var Beats = ["assets/kick.mp3", "assets/hihat.mp3", "assets/snare.mp3"];
    setInterval(function Beat() {
        var Sound = new Audio(Beats[index]);
        Sound.play();
        index += 1;
        if (index > 3)
            index = 0;
        console.log(Beats[index]);
    }, 200);
}