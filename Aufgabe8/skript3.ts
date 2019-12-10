//all buttons

window.addEventListener("load", function (): void {
    document.querySelector("#audio1").addEventListener("click", handleButton);
    document.querySelector("#audio2").addEventListener("click", handleButton);
    document.querySelector("#audio3").addEventListener("click", handleButton);
    document.querySelector("#audio4").addEventListener("click", handleButton);
    document.querySelector("#audio5").addEventListener("click", handleButton);
    document.querySelector("#audio6").addEventListener("click", handleButton);
    document.querySelector("#audio7").addEventListener("click", handleButton);
    document.querySelector("#audio8").addEventListener("click", handleButton);
    document.querySelector("#audio9").addEventListener("click", handleButton);
    document.querySelector("#play").addEventListener("click", Beats);
    document.querySelector("#record").addEventListener("click", recording);
    document.querySelector("#trash").addEventListener("click", deleting);



});

var kick: number;
var beat: string = ("assets/kick.mp3", "assets/hihat.mp3", "assets/snare.mp3");
var record: boolean = false;


function playSample(sounds: string): void {
    var sound: HTMLAudioElement = new Audio("assets/" + sounds);
    sound.play();
    if (record == true) {
        Beats.push(sounds);
    }
}

function handleButton(event: MouseEvent): void {
    let butonTag: string = (<HTMLElement>event.target).id;
    switch (butonTag) {
        case "audio1":
            playSample("A.mp3");
            break;
        case "audio2":
            playSample("C.mp3");
            break;
        case "audio3":
            playSample("F.mp3");
            break;
        case "audio4":
            playSample("G.mp3");
            break;
        case "audio5":
            playSample("kick.mp3");
            break;
        case "audio6":
            playSample("hihat.mp3");
            break;
        case "audio7":
            playSample("snare.mp3");
            break;
        case "audio8":
            playSample("laugh-1.mp3");
            break;
        case "audio9":
            playSample("laugh-2.mp3");
            break;

    }

}

function Beats(): void {
    var index: number = 0;
    var playid = document.getElementById("play");

    if (playid.classList.contains("fa-play")) {
        playid.classList.remove("fa-play");
        playid.classList.add("fa-pause");
        kick = setInterval(sequence, 500);
        record = false;
        console.log("Play");
    }
    else {
        playid.classList.remove("fa-pause");
        playid.classList.add("fa-pause");
        clearInterval(kick);
        console.log("Pause");
    }

    function sequence(): void {
        playSample(Beats[index]);
        index = index + 1;
        if (index == (beat.length)) {
            index = 0;
            console.log(Beats[index]);
        }

    }
}

function deleting(): void {
    beat.length = 0;
    console.log("delete Beat");
}
function recording(): void {
    record = true;
    console.log("record new Beat");
}