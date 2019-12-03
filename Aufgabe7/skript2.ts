window.addEventListener("load", function() {
    document.querySelector("#audio1").addEventListener("click", function() {playSample("A.mp3"); });
    document.querySelector("#audio2").addEventListener("click", function() {playSample("C.mp3"); });
    document.querySelector("#audio3").addEventListener("click", function() {playSample("F.mp3"); });
    document.querySelector("#audio4").addEventListener("click", function() {playSample("G.mp3"); });
    document.querySelector("#audio5").addEventListener("click", function() {playSample("kick.mp3"); });
    document.querySelector("#audio6").addEventListener("click", function() {playSample("hihat.mp3"); });
    document.querySelector("#audio7").addEventListener("click", function() {playSample("snare.mp3"); });
    document.querySelector("#audio8").addEventListener("click", function() {playSample("laugh-1.mp3"); });
    document.querySelector("#audio9").addEventListener("click", function() {playSample("laugh-2.mp3"); });
    document.querySelector("#play").addEventListener("click", Play);

}
)

function playSample(samples:string) {
    var sound:HTMLAudioElement = new Audio("assets/ + samples");
    sound.play();
}
;
function Play() {
    var Kick = setInterval(bells, 300);
    var index:number = 0;
    var Beat:string [] = ["assets/kick.mp3", "assets/hihat.mp3", "snare.mp3"];

    function bells() {
        var sequence:HTMLAudioElement = new Audio(Beat[index]);
        sequence.play();
        index += 1;
        if (index >3)
            index=0;
            console.log(Beat[index]);
    };
};