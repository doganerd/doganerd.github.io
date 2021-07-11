namespace game{

    export class Player extends Moveable{
        constructor(){
            super();
        }

        draw(): void{

            ctx.beginPath();
            ctx.translate(this.position.x, this.position.y);
            ctx.ellipse(0, 0, 10, 20, 5, 0, 2* Math.PI);
            ctx.fillStyle = "orange";
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(18, 2, 10, 0, 2*Math.PI);
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.closePath();

            ctx.restore();
        }


    }
}