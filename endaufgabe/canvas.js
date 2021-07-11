"use strict";
var game;
(function (game) {
    window.addEventListener("load", handleload);
    game.spieler = [];
    function handleload(_event) {
        game.canvas = document.querySelector("canvas");
        game.ctx = game.canvas.getContext("2d");
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
        createTeam(22);
    }
    function createTeam(spieleranzahl) {
        for (let i = 0; i < spieleranzahl; i++) {
            let playerone = new game.Player();
            let playeron = new game.Player();
            game.spieler.push(playerone);
            game.spieler.push(playeron);
        }
        game.spieler.forEach(element => {
            console.log(element);
            element.draw();
        });
    }
})(game || (game = {}));
//# sourceMappingURL=canvas.js.map