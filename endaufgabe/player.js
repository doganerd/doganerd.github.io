"use strict";
var game;
(function (game) {
    class Player extends game.Moveable {
        constructor() {
            super();
        }
        draw() {
            game.ctx.beginPath();
            game.ctx.translate(this.position.x, this.position.y);
            game.ctx.ellipse(0, 0, 10, 20, 5, 0, 2 * Math.PI);
            game.ctx.fillStyle = "orange";
            game.ctx.fill();
            game.ctx.closePath();
            game.ctx.beginPath();
            game.ctx.arc(18, 2, 10, 0, 2 * Math.PI);
            game.ctx.fillStyle = "black";
            game.ctx.fill();
            game.ctx.closePath();
            game.ctx.restore();
        }
    }
    game.Player = Player;
})(game || (game = {}));
//# sourceMappingURL=player.js.map