"use strict";
var game;
(function (game) {
    class Moveable {
        constructor() {
            let x = game.crc2.canvas.width * Math.random();
            let y = game.crc2.canvas.height * Math.random();
            this.position = new game.Vector(x, y);
        }
        move() {
            this.position.add(this.velocity);
            if (this.position.x > game.crc2.canvas.width) {
                this.position.x -= game.crc2.canvas.width;
                this.position.y = game.crc2.canvas.height * Math.random();
            }
            if (this.position.y > game.crc2.canvas.height) {
                this.position.y -= game.crc2.canvas.height;
                this.position.x = game.crc2.canvas.width * Math.random();
            }
        }
        getClick(_positionX, _positionY) {
            this.posiX = _positionX;
            this.posiY = _positionY;
        }
    }
    game.Moveable = Moveable;
})(game || (game = {}));
//# sourceMappingURL=moveable.js.map