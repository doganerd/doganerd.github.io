namespace Fussball {
    export class Player {
        position: Vector;
        velocity: Vector;
        type: number;


        constructor(_position: Vector) {
            console.log("Player Constructor");

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(200, 200);

            this.velocity = new Vector(200, 200);
            this.velocity.random();

            this.type = Math.floor(Math.random() * 4);

        }
    }
}
