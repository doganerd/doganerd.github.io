namespace Field {
    interface Vector
    x: number;
    y: number;
}

window.addEventListener("load", handleload);
let crc2: CanvasRenderingContext2D;
let golden: number = 0.62;

function handleload(_event: Event): void {
    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas)
    return;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

    drawBackground();
    drawCircle({x: 500, y: 500});
    drawSquare ({x:});
}