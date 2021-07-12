namespace game {
    
   export function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(1, "green");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    export function drawCircle(): void {
        console.log("Circle");

     
        crc2.beginPath();
        crc2.lineWidth =   4;
        crc2.strokeStyle = "white";
        crc2.arc(750, 400, 80, 0, 2 * Math.PI);
        crc2.stroke();
    }

    export function drawSquare(): void {
        console.log("Square");

        
        crc2.beginPath();
        crc2.rect(150, 50, 1200, 700);
        crc2.stroke();
    }

    export function drawLeft(): void {
        console.log("LeftSquare");

        
        crc2.beginPath();
        crc2.rect(150, 200, 200, 400);
        crc2.stroke();
    }

    export function drawRight(): void {
        console.log("RightSquare");

       
        crc2.beginPath();
        crc2.rect(1150, 200, 200, 400);
        crc2.stroke();
    }

    export function drawGoalLeft(): void {
        console.log("LeftGoal");

        
        crc2.beginPath();
        crc2.rect(150, 350, 50, 100);
        crc2.stroke();
    }

    export function drawGoalRight(): void {
        console.log("RightGoal");

      
        crc2.beginPath();
        crc2.rect(1300, 350, 50, 100);
        crc2.stroke();
    }

    export function drawMiddleLine(): void {
        console.log("MiddleLine");

       
        crc2.moveTo(750, 50);
        crc2.lineTo(750, 750);
        crc2.stroke();
    }
}