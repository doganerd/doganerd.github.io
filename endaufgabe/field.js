"use strict";
var game;
(function (game) {
    function drawBackground() {
        console.log("Background");
        let gradient = game.ctx.createLinearGradient(0, 0, 0, game.ctx.canvas.height);
        gradient.addColorStop(1, "green");
        game.ctx.fillStyle = gradient;
        game.ctx.fillRect(0, 0, game.ctx.canvas.width, game.ctx.canvas.height);
    }
    game.drawBackground = drawBackground;
    function drawCircle() {
        console.log("Circle");
        game.ctx.beginPath();
        game.ctx.lineWidth = 4;
        game.ctx.strokeStyle = "white";
        game.ctx.arc(750, 400, 80, 0, 2 * Math.PI);
        game.ctx.stroke();
    }
    game.drawCircle = drawCircle;
    function drawSquare() {
        console.log("Square");
        game.ctx.beginPath();
        game.ctx.rect(150, 50, 1200, 700);
        game.ctx.stroke();
    }
    game.drawSquare = drawSquare;
    function drawLeft() {
        console.log("LeftSquare");
        game.ctx.beginPath();
        game.ctx.rect(150, 200, 200, 400);
        game.ctx.stroke();
    }
    game.drawLeft = drawLeft;
    function drawRight() {
        console.log("RightSquare");
        game.ctx.beginPath();
        game.ctx.rect(1150, 200, 200, 400);
        game.ctx.stroke();
    }
    game.drawRight = drawRight;
    function drawGoalLeft() {
        console.log("LeftGoal");
        game.ctx.beginPath();
        game.ctx.rect(150, 350, 50, 100);
        game.ctx.stroke();
    }
    game.drawGoalLeft = drawGoalLeft;
    function drawGoalRight() {
        console.log("RightGoal");
        game.ctx.beginPath();
        game.ctx.rect(1300, 350, 50, 100);
        game.ctx.stroke();
    }
    game.drawGoalRight = drawGoalRight;
    function drawMiddleLine() {
        console.log("MiddleLine");
        game.ctx.moveTo(750, 50);
        game.ctx.lineTo(750, 750);
        game.ctx.stroke();
    }
    game.drawMiddleLine = drawMiddleLine;
})(game || (game = {}));
//# sourceMappingURL=field.js.map