//all buttons

window.addEventListener("load", function (): void {
    document.querySelector("#audio1").addEventListener("click", function (): void {playSample("A.mp3"); });
    document.querySelector("#audio2").addEventListener("click", function (): void {playSample("C.mp3"); });
    document.querySelector("#audio3").addEventListener("click", function (): void {playSample("F.mp3"); });
    document.querySelector("#audio4").addEventListener("click", function (): void {playSample("G.mp3"); });
    document.querySelector("#audio5").addEventListener("click", function (): void {playSample("kick.mp3"); });
    document.querySelector("#audio6").addEventListener("click", function (): void {playSample("hihat.mp3"); });
    document.querySelector("#audio7").addEventListener("click", function (): void {playSample("laugh-1.mp3"); });
    document.querySelector("#audio8").addEventListener("click", function (): void {playSample("laugh-2.mp3"); });
    document.querySelector("#audio9").addEventListener("click", function (): void {playSample("snare.mp3"); });
    document.querySelector("#play").addEventListener("click", sample);
    document.querySelector(".record").addEventListener("click", recording);
    document.querySelector(".delete").addEventListener("click", deleting);



});

var kick: number;
var beat: string [] = ["kick.mp3", "kick.mp3", "snare.mp3", "hihat.mp3"];
var record: boolean = false;


function playSample(sounds: string): void {
    var sound: HTMLAudioElement = new Audio("assets/" + sounds);
    sound.play();
    if (record == true) {
        beat.push(sounds);
    }
}
var index: number = 0;
function sample(): void {

    var playid: HTMLElement = document.getElementById("Play");

    if (playid.classList.contains("fa-play")) {
        playid.classList.remove("fa-play");
        playid.classList.add("fa-pause");
        kick = setInterval(playBeat, 500);
        record = false;
        console.log("Play");
    } else {
        playid.classList.remove("fa-pause");
        playid.classList.add("fa-play");
        clearInterval(kick);
        console.log("Pause");
    }
}


function playBeat(): void {
    playSample(beat[index]);
    index = index + 1;
    if (index == (beat.length)) {
        index = 0;
        console.log(beat[index]);
    }
}

function deleting(): void {
    beat.length = 0;
    console.log("deleting the beat");
}

function recording(): void {
    record = true;
    console.log("recording beat");
}
