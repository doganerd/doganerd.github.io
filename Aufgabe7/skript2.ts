//all buttons

window.addEventListener("load",function(){
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

function playSample(sounds){
    var sound:HTMLAudioElement = new Audio('assets/'+ sounds);
    sound.play();
    }
;
//mix

function Mix() {
    var Kick = setInterval(one, 500);
    var index:number = 0;
    var Beat:string [] = ["assets/kick.mp3", "assets/hihat.mp3", "assets/snare.mp3"];

    function one() {
        var sequence:HTMLAudioElement = new Audio(Beat[index]);
        sequence.play();
        index = index  + 1;

        if (index > 3)
            index = 0;
            console.log(Beat[index]);
    };
};