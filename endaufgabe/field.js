"use strict";
var game;
(function (game) {
    function drawBackground() {
        console.log("Background");
        let gradient = game.crc2.createLinearGradient(0, 0, 0, game.crc2.canvas.height);
        gradient.addColorStop(1, "green");
        game.crc2.fillStyle = gradient;
        game.crc2.fillRect(0, 0, game.crc2.canvas.width, game.crc2.canvas.height);
    }
    game.drawBackground = drawBackground;
    function drawCircle() {
        console.log("Circle");
        game.crc2.beginPath();
        game.crc2.lineWidth = 4;
        game.crc2.strokeStyle = "white";
        game.crc2.arc(750, 400, 80, 0, 2 * Math.PI);
        game.crc2.stroke();
    }
    game.drawCircle = drawCircle;
    function drawSquare() {
        console.log("Square");
        game.crc2.beginPath();
        game.crc2.rect(150, 50, 1200, 700);
        game.crc2.stroke();
    }
    game.drawSquare = drawSquare;
    function drawLeft() {
        console.log("LeftSquare");
        game.crc2.beginPath();
        game.crc2.rect(150, 200, 200, 400);
        game.crc2.stroke();
    }
    game.drawLeft = drawLeft;
    function drawRight() {
        console.log("RightSquare");
        game.crc2.beginPath();
        game.crc2.rect(1150, 200, 200, 400);
        game.crc2.stroke();
    }
    game.drawRight = drawRight;
    function drawGoalLeft() {
        console.log("LeftGoal");
        game.crc2.beginPath();
        game.crc2.rect(150, 350, 50, 100);
        game.crc2.stroke();
    }
    game.drawGoalLeft = drawGoalLeft;
    function drawGoalRight() {
        console.log("RightGoal");
        game.crc2.beginPath();
        game.crc2.rect(1300, 350, 50, 100);
        game.crc2.stroke();
    }
    game.drawGoalRight = drawGoalRight;
    function drawMiddleLine() {
        console.log("MiddleLine");
        game.crc2.moveTo(750, 50);
        game.crc2.lineTo(750, 750);
        game.crc2.stroke();
    }
    game.drawMiddleLine = drawMiddleLine;
})(game || (game = {}));
//# sourceMappingURL=field.js.map