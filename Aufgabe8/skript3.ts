//all buttons

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
    document.querySelector("#play").addEventListener("click", Mix);
});

function playSample(sounds: string): void {
    var sound: HTMLAudioElement = new Audio("assets/" + sounds);
    sound.play();
}

//mix

function Mix(): void {
    var kick: number = setInterval(one, 500);
    var index: number = 0;
    var beat: string[] = ["assets/kick.mp3", "assets/hihat.mp3", "assets/snare.mp3"];

    function one(): void {
        var sequence: HTMLAudioElement = new Audio(beat[index]);
        sequence.play();
        index = index + 1;

        if (index > 3)
            index = 0;
        console.log(beat[index]);
    }
}