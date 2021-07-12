"use strict";
var game;
(function (game) {
    window.addEventListener("load", handleload);
    game.spieler = [];
    function handleload(_event) {
        game.canvas = document.querySelector("canvas");
        game.crc2 = game.canvas.getContext("2d");
        if (!game.canvas)
            return;
        game.drawBackground();
        game.drawCircle();
        game.drawSquare();
        game.drawLeft();
        game.drawRight();
        game.drawGoalLeft();
        game.drawGoalRight();
        game.drawMiddleLine();
        game.drawTeamA();
        game.drawTeamB();
    }
})(game || (game = {}));
//# sourceMappingURL=canvas.js.map