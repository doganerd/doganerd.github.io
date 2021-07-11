namespace game {

    window.addEventListener("load", handleload);

    export let canvas: HTMLCanvasElement;
    export let ctx: CanvasRenderingContext2D;
    export let spieler: Player[] = [];

    function handleload(_event: Event): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
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

        createTeam(22);

    }

    function createTeam(spieleranzahl: number) {
        for (let i: number = 0; i < spieleranzahl; i++) {
            let playerone: Player = new Player();
            let playeron: Player = new Player();
            spieler.push(playerone);
            spieler.push(playeron);
        }

        spieler.forEach(element => {
            console.log(element);
            element.draw();
        });
    }
}
