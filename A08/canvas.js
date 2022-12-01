//Jonas Atzenhofer L08.2
//Matrikelnummer: 271026
//Quellen: https://www.w3schools.com/graphics/canvas_gradients.asp
var A08;
(function (A08) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
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
        drawHouse({ x: 900, y: 800 }, { x: 50, y: 100 });
        function drawBackground() {
            console.log("Background");
            let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0, "lightblue");
            gradient.addColorStop(0.5, "white");
            gradient.addColorStop(1, "HSL(100, 80%, 30%)");
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }
        function drawSun(_position) {
            console.log("Sun", _position);
            let r1 = 30;
            let r2 = 100;
            let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;
            crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }
        function drawCloud(_position, _size) {
            console.log("Cloud", _position, _size);
            let nParticles = 20;
            let radiusParticle = 50;
            let particle = new Path2D();
            let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        }
        function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
            console.log("Mountains");
            let stepMin = 50;
            let stepMax = 150;
            let x = 0;
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, -_max);
            do {
                x += stepMin + Math.random() * (stepMax - stepMin);
                let y = -_min - Math.random() * (_max - _min);
                crc2.lineTo(x, y);
            } while (x < crc2.canvas.width);
            crc2.lineTo(x, 0);
            crc2.closePath();
            let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
            gradient.addColorStop(0, _colorLow);
            gradient.addColorStop(0.7, _colorHigh);
            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.restore();
        }
        function drawTree(_position, _size) {
            console.log("Tree", _position, _size);
            crc2.fillStyle = "brown";
            crc2.fillRect(_position.x, _position.y, 20, -100);
            let nBranches = 10;
            let maxRadius = 60;
            let branch = new Path2D();
            branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
            crc2.fillStyle = "green";
            crc2.fillRect(_position.x, _position.y, 20, -_size.y);
            crc2.save();
            crc2.translate(_position.x, _position.y);
            do {
                let y = -_size.y - Math.random() * _size.y;
                let x = Math.random() * _size.x;
                crc2.save();
                crc2.translate(x, y);
                crc2.fill(branch);
                crc2.restore();
                nBranches -= 1;
            } while (nBranches > 0);
            crc2.restore();
            crc2.fillStyle = "brown";
            crc2.fillRect(_position.x, _position.y, 20, -100);
        }
        function drawSnowflakes(_position, _size) {
            console.log("Snowflakes", _position, _size);
            for (let i = 0; i < 100; i++) {
                let x = Math.random() * crc2.canvas.width;
                let y = Math.random() * crc2.canvas.height;
                let radiusSnowflake = Math.random() * 3 + 1;
                crc2.beginPath();
                crc2.arc(x, y, radiusSnowflake, 0, 2 * Math.PI);
                crc2.fillStyle = "white";
                crc2.fill();
            }
        }
        function drawSnowman(_position, _size) {
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
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(-10, -150, 5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(10, -150, 5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.fillStyle = "orange";
            crc2.beginPath();
            crc2.arc(0, -145, 5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(0, -130, 10, 0, 1 * Math.PI);
            crc2.fill();
            crc2.restore();
        }
        function drawHouse(_position, _size) {
            console.log("House", _position, _size);
        }
    }
})(A08 || (A08 = {}));
//# sourceMappingURL=canvas.js.map