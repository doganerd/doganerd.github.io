namespace game {

    window.addEventListener("load", handleload);

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    export let spieler: Player[] = [];

    function handleload(_event: Event): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        if (!canvas)
            return;



        drawBackground();
        drawCircle();
        drawSquare();
        drawLeft();
        drawRight();
        drawGoalLeft();
        drawGoalRight();
        drawMiddleLine();
        drawTeamA();
        drawTeamB();

    }

}