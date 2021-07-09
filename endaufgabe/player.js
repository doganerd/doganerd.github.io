"use strict";
var Fussball;
(function (Fussball) {
    class Player {
        constructor(_position) {
            console.log("Player Constructor");
            if (_position)
                this.position = _position;
            else
                this.position = new Fussball.Vector(200, 200);
            this.velocity = new Fussball.Vector(200, 200);
            this.velocity.random();
            this.type = Math.floor(Math.random() * 4);
        }
    }
    Fussball.Player = Player;
})(Fussball || (Fussball = {}));
//# sourceMappingURL=player.js.map