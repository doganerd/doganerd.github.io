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
    document.querySelector("#record").addEventListener("click", Recording);
    document.querySelector("#trash").addEventListener("click", Deleting);

    

});




function playSample(sounds: string): void {
    var sound: HTMLAudioElement = new Audio("assets/" + sounds);
    sound.play();
}

function handleButton (event: MouseEvent): void {
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

//mix

function Beats(): void {
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




function Deleting(): void {
    var kick: number = setInterval(two, 500);
    var index: number = 0;
    var beat: string [] = ["click"];

    function two(): void {
         var sequence: HTMLAudioElement = new Audio(beat[index]);
         sequence.play();
         index = 0;

         if (index < 0)
         index = 0;
         console.log(beat[index]);
    }
   
}
function Recording(): void {
    record = true;
    console.log("recording Beat");
}