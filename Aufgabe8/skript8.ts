var mysound: string [] = ["kick.mp3", "hihat.mp3", "snare.mp3"];
var record: boolean =  false;
var sequence;

window.addEventListener("load", function (): void {
    document.querySelector("#audio1").addEventListener("click", function (): void { playSample("A.mp3"); });
    document.querySelector("#audio2").addEventListener("click", function (): void { playSample("C.mp3"); });
    document.querySelector("#audio3").addEventListener("click", function (): void { playSample("F.mp3"); });
    document.querySelector("#audio4").addEventListener("click", function (): void { playSample("G.mp3"); });
    document.querySelector("#audio5").addEventListener("click", function (): void { playSample("kick.mp3"); });
    document.querySelector("#audio6").addEventListener("click", function (): void { playSample("hihat.mp3"); });
    document.querySelector("#audio7").addEventListener("click", function (): void { playSample("laugh-1.mp3"); });
    document.querySelector("#audio8").addEventListener("click", function (): void { playSample("laugh-2.mp3"); });
    document.querySelector("#audio9").addEventListener("click", function (): void { playSample("snare.mp3"); });
    document.querySelector("#play").addEventListener("click", sample);
    document.querySelector("#delete").addEventListener("click", deleting);
    document.querySelector("#record").addEventListener("click", recording);

});



function playSample (beat: string): void {
    var sound: HTMLAudioElement =  new Audio("assets/" + beat);
    sound.play();
    if (record == true) {
        mysound.push(beat);
    }
    console.log("Kick");
}

function sample(): void {
    var index: number = 0;
    if (document.getElementById("play").classList.contains("fa-play")) {
        document.getElementById("play").classList.remove("fa-play");
        document.getElementById("play").classList.add("fa-pause");
        sequence = setInterval(mySound, 500);
        record = false;
    } else {
        document.getElementById("play").classList.remove("fa-pause");
        document.getElementById("play").classList.add("fa-play");
        clearInterval(sequence);
    }

    function mySound(): void {
        playSample(mysound[index]);
        index += 1;
        if (index > mysound.length) index = 0;
    }
    }

function deleting(): void {
    mysound = [];
}


function recording(): void {
    record = true;
}

