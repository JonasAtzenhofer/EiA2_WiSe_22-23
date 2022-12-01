//Jonas Atzenhofer L08.2
//Matrikelnummer: 271026
//Quellen: https://www.w3schools.com/graphics/canvas_gradients.asp




namespace A08 {
    window.addEventListener("load", handleLoad);
    interface Vector {
        x: number;
        y: number;
    }

    function handleLoad(_event: Event): void {

        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");


        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        

        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawMountains({ x: 0, y: 300 }, 75, 200, "grey", "white");
        drawMountains({ x: 0, y: 300 }, 50, 150, "grey", "lightgrey");
        drawTree({ x: 100, y: 500 }, { x: 50, y: 100 });
        drawTree({ x: 200, y: 500 }, { x: 50, y: 100 });
        drawTree({ x: 300, y: 500 }, { x: 50, y: 100 });
        drawTree({ x: 400, y: 500 }, { x: 50, y: 100 });
        drawTree({ x: 500, y: 500 }, { x: 50, y: 100 });
        drawTree({ x: 600, y: 500 }, { x: 50, y: 100 });
        drawTree({ x: 700, y: 500 }, { x: 50, y: 100 });
        drawTree({ x: 800, y: 500 }, { x: 50, y: 100 });
        drawTree({ x: 900, y: 500 }, { x: 50, y: 100 });
        drawTree({ x: 1000, y: 500 }, { x: 50, y: 100 });
        drawTree({ x: 1100, y: 500 }, { x: 50, y: 100 });
        drawTree({ x: 1200, y: 500 }, { x: 50, y: 100 });
        drawTree({ x: 1300, y: 500 }, { x: 50, y: 100 });
        drawTree({ x: 1400, y: 500 }, { x: 50, y: 100 });
        drawTree({ x: 1500, y: 500 }, { x: 50, y: 100 });
        drawSnowflakes({ x: 0, y: 0 }, { x: 0, y: 0 });
        drawSnowman({ x: 600, y: 700 }, { x: 50, y: 100 });
        
        
        

        function drawBackground(): void {
            console.log("Background");

            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0, "lightblue");
            gradient.addColorStop(0.5, "white");
            gradient.addColorStop(1, "HSL(100, 80%, 30%)");

            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

        function drawSun(_position: Vector): void {
            console.log("Sun", _position);

            

            let r1: number = 30;
            let r2: number = 100;
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;
            crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }

        function drawCloud(_position: Vector, _size: Vector): void {
            console.log("Cloud", _position, _size);

            let nParticles: number = 20;
            let radiusParticle: number = 50;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;

            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x: number = (Math.random() - 0.5) * _size.x;
                let y: number = - (Math.random() * _size.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }

            crc2.restore();
        }

        function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
            console.log("Mountains");

            let stepMin: number = 50;
            let stepMax: number = 150;
            let x: number = 0;

            crc2.save();
            crc2.translate(_position.x, _position.y);

            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, -_max);

            do {
                x += stepMin + Math.random() * (stepMax - stepMin);
                let y: number = -_min - Math.random() * (_max - _min);

                crc2.lineTo(x, y);
            } while (x < crc2.canvas.width);

            crc2.lineTo(x, 0);
            crc2.closePath();

            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
            gradient.addColorStop(0, _colorLow);
            gradient.addColorStop(0.7, _colorHigh);

            crc2.fillStyle = gradient;
            crc2.fill();

            crc2.restore();
        }

        function drawTree(_position: Vector, _size: Vector): void {
            console.log("Tree", _position, _size);

            let nBranches: number = 10;
            let maxRadius: number = 60;
            let branch: Path2D = new Path2D();
            branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
            crc2.fillStyle = "green";
            crc2.fillRect(_position.x, _position.y, 20, -_size.y);

            crc2.save();
            crc2.translate(_position.x, _position.y);

            do {
                let y: number = -_size.y - Math.random() * _size.y;
                let x: number = Math.random() * _size.x;
                crc2.save();
                crc2.translate(x, y);
                crc2.fill(branch);
                crc2.restore();
                nBranches -= 1;
            } while (nBranches > 0);

            crc2.restore();
        }






           

            
        

        function drawSnowflakes(_position: Vector, _size: Vector): void {
            console.log("Snowflakes", _position, _size);

            
            for (let i: number = 0; i < 100; i++) {
                let x: number = Math.random() * crc2.canvas.width;
                let y: number = Math.random() * crc2.canvas.height;
                let radiusSnowflake: number = Math.random() * 3 + 1;
                crc2.beginPath();
                crc2.arc(x, y, radiusSnowflake, 0, 2 * Math.PI);
                crc2.fillStyle = "white";
                crc2.fill();
            }
        }


        function drawSnowman(_position: Vector, _size: Vector): void {
            console.log("Snowman", _position, _size);

            
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = "white";
            crc2.beginPath();
            crc2.arc(0, 0, 50, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.arc(0, -70, 40, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.arc(0, -140, 30, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
           

        }

       



    }
}