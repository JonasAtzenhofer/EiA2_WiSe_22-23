//Jonas Atzenhofer L08.2
//Matrikelnummer: 271026
//Datum: 13.01.2023
//Quellen: Natan Haider 
var A010_2;
(function (A010_2) {
    window.addEventListener("load", handleLoad);
    let xStep = 0;
    A010_2.posSnowflakes = new A010_2.Vector(200, 0);
    let moveables = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        A010_2.crc2 = canvas.getContext("2d");
        drawBackground();
        drawSun(new A010_2.Vector(100, 75));
        drawCloud(new A010_2.Vector(300, 95), new A010_2.Vector(150, 75));
        drawMountains(new A010_2.Vector(0, 300), 75, 200, "grey", "white");
        drawMountains(new A010_2.Vector(0, 300), 50, 150, "grey", "lightgrey");
        drawTree(new A010_2.Vector(10, 500), new A010_2.Vector(50, 100));
        drawTree(new A010_2.Vector(75, 500), new A010_2.Vector(50, 100));
        drawTree(new A010_2.Vector(125, 500), new A010_2.Vector(50, 100));
        drawTree(new A010_2.Vector(155, 500), new A010_2.Vector(50, 100));
        drawTree(new A010_2.Vector(200, 500), new A010_2.Vector(50, 100));
        drawTree(new A010_2.Vector(255, 500), new A010_2.Vector(50, 100));
        drawTree(new A010_2.Vector(300, 500), new A010_2.Vector(50, 100));
        drawSnowman(new A010_2.Vector(100, 600), new A010_2.Vector(100, 50));
        drawHouse(new A010_2.Vector(250, 600), new A010_2.Vector(50, 100));
        //drawBird(new Vector(375, 585), new Vector(200, 100));
        drawBirds(20);
        drawTestSnowflake();
        window.setInterval(update, 20);
    }
    function drawBackground() {
        console.log("Background");
        let gradient = A010_2.crc2.createLinearGradient(0, 0, 0, A010_2.crc2.canvas.height);
        gradient.addColorStop(0, "darkblue");
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(0.8, "lightgrey");
        gradient.addColorStop(1, "white");
        A010_2.crc2.fillStyle = gradient;
        A010_2.crc2.fillRect(0, 0, A010_2.crc2.canvas.width, A010_2.crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 100;
        let gradient = A010_2.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        A010_2.crc2.save();
        A010_2.crc2.translate(_position.x, _position.y);
        A010_2.crc2.fillStyle = gradient;
        A010_2.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        A010_2.crc2.fill();
        A010_2.crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 20;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = A010_2.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        A010_2.crc2.save();
        A010_2.crc2.translate(_position.x, _position.y);
        A010_2.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            A010_2.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            A010_2.crc2.translate(x, y);
            A010_2.crc2.fill(particle);
            A010_2.crc2.restore();
        }
        A010_2.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        A010_2.crc2.save();
        A010_2.crc2.translate(_position.x, _position.y);
        A010_2.crc2.beginPath();
        A010_2.crc2.moveTo(0, 0);
        A010_2.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            A010_2.crc2.lineTo(x, y);
        } while (x < A010_2.crc2.canvas.width);
        A010_2.crc2.lineTo(x, 0);
        A010_2.crc2.closePath();
        let gradient = A010_2.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        A010_2.crc2.fillStyle = gradient;
        A010_2.crc2.fill();
        A010_2.crc2.restore();
    }
    function drawTree(_position, _size) {
        console.log("Tree", _position, _size);
        A010_2.crc2.fillStyle = "brown";
        A010_2.crc2.fillRect(_position.x, _position.y, 20, -100);
        let nBranches = 10;
        let maxRadius = 60;
        let branch = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
        A010_2.crc2.fillStyle = "darkgreen";
        A010_2.crc2.fillRect(_position.x, _position.y, 20, -_size.y);
        A010_2.crc2.save();
        A010_2.crc2.translate(_position.x, _position.y);
        do {
            let y = -_size.y - Math.random() * _size.y;
            let x = Math.random() * _size.x;
            A010_2.crc2.save();
            A010_2.crc2.translate(x, y);
            A010_2.crc2.fill(branch);
            A010_2.crc2.restore();
            nBranches -= 1;
        } while (nBranches > 0);
        A010_2.crc2.restore();
        A010_2.crc2.fillStyle = "brown";
        A010_2.crc2.fillRect(_position.x, _position.y, 20, -100);
    }
    function drawBirds(_nBirds) {
        let ratio = Math.random();
        let nSitting = Math.floor(_nBirds * ratio);
        let nFlying = _nBirds - nSitting;
        let nCrow = 10;
        for (let drawn = 0; drawn < nSitting; drawn++) {
            A010_2.crc2.save();
            let randomColor = Math.floor(Math.random() * A010_2.color.length);
            let randomBeakColor = Math.floor(Math.random() * A010_2.beakColor.length);
            let maxWidth = 650;
            let minWidth = 100;
            let minHeight = 400;
            let maxHeight = 500;
            let x = randomBetween(minWidth, maxWidth);
            let y = randomBetween(minHeight, maxHeight);
            let birdPos = new A010_2.Vector(x, y);
            let sittingBird = new A010_2.SitBird(birdPos, A010_2.color[randomColor], A010_2.beakColor[randomBeakColor]);
            moveables.push(sittingBird);
            sittingBird.draw();
            A010_2.crc2.restore();
        }
        for (let drawn = 0; drawn < nFlying; drawn++) {
            A010_2.crc2.save();
            let maxWidth = 740;
            let minWidth = 10;
            let minHeight = 0;
            let maxHeight = 225;
            let x = randomBetween(minWidth, maxWidth);
            let y = randomBetween(minHeight, maxHeight);
            let birdPos = new A010_2.Vector(x, y);
            let flyingBird = new A010_2.FlyingBird(birdPos);
            moveables.push(flyingBird);
            flyingBird.draw();
            A010_2.crc2.restore();
        }
        for (let drawn = 0; drawn < nCrow; drawn++) {
            A010_2.crc2.save();
            let maxWidth = 740;
            let minWidth = 10;
            let minHeight = 0;
            let maxHeight = 225;
            let x = randomBetween(minWidth, maxWidth);
            let y = randomBetween(minHeight, maxHeight);
            let birdPos = new A010_2.Vector(x, y);
            let flyingCrow = new A010_2.FlyingCrows(birdPos);
            moveables.push(flyingCrow);
            flyingCrow.draw();
            A010_2.crc2.restore();
        }
    }
    function update() {
        A010_2.crc2.putImageData(A010_2.background, 0, 0);
        //crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        updateMoveables();
    }
    function updateMoveables() {
        let transform = A010_2.crc2.getTransform();
        for (let moveable of moveables) {
            if (moveable instanceof A010_2.Snowflake) {
                moveable.snowstorm(1 / 50);
                moveable.draw();
            }
            if (moveable instanceof A010_2.FlyingBird) {
                moveable.fly(1 / 50);
                moveable.draw();
            }
            if (moveable instanceof A010_2.FlyingCrows) {
                moveable.fly(1 / 50);
                moveable.draw();
            }
            if (moveable instanceof A010_2.SitBird) {
                let check = moveable.checkUpdate();
                if (check == true) {
                    moveable.eat(1 / 100);
                    moveable.draw();
                }
                if (check == false) {
                    moveable.draw();
                }
            }
        }
        A010_2.crc2.setTransform(transform);
    }
    function drawTestSnowflake() {
        let transform = A010_2.crc2.getTransform();
        for (let index = 0; index < 375; index++) {
            xStep = xStep + 2;
            let snowflake = new A010_2.Snowflake(1, new A010_2.Vector(xStep, 0));
            snowflake.draw();
            moveables.push(snowflake);
            A010_2.background = A010_2.crc2.getImageData(0, 0, A010_2.crc2.canvas.width, A010_2.crc2.canvas.height);
        }
        A010_2.crc2.setTransform(transform);
    }
    function drawSnowman(_position, _size) {
        console.log("Snowman", _position, _size);
        A010_2.crc2.save();
        A010_2.crc2.translate(_position.x, _position.y);
        A010_2.crc2.fillStyle = "white";
        A010_2.crc2.beginPath();
        A010_2.crc2.arc(0, 0, 50, 0, 2 * Math.PI);
        A010_2.crc2.fill();
        A010_2.crc2.stroke();
        A010_2.crc2.beginPath();
        A010_2.crc2.arc(0, -70, 40, 0, 2 * Math.PI);
        A010_2.crc2.fill();
        A010_2.crc2.stroke();
        A010_2.crc2.beginPath();
        A010_2.crc2.arc(0, -140, 30, 0, 2 * Math.PI);
        A010_2.crc2.fill();
        A010_2.crc2.stroke();
        A010_2.crc2.fillStyle = "black";
        A010_2.crc2.beginPath();
        A010_2.crc2.arc(-10, -150, 5, 0, 2 * Math.PI);
        A010_2.crc2.fill();
        A010_2.crc2.beginPath();
        A010_2.crc2.arc(10, -150, 5, 0, 2 * Math.PI);
        A010_2.crc2.fill();
        A010_2.crc2.fillStyle = "orange";
        A010_2.crc2.beginPath();
        A010_2.crc2.arc(0, -145, 5, 0, 2 * Math.PI);
        A010_2.crc2.fill();
        A010_2.crc2.fillStyle = "black";
        A010_2.crc2.beginPath();
        A010_2.crc2.arc(0, -130, 10, 0, 1 * Math.PI);
        A010_2.crc2.fill();
        A010_2.crc2.beginPath();
        A010_2.crc2.moveTo(-20, -100);
        A010_2.crc2.lineTo(-50, -130);
        A010_2.crc2.lineWidth = 3;
        A010_2.crc2.stroke();
        A010_2.crc2.beginPath();
        A010_2.crc2.moveTo(20, -100);
        A010_2.crc2.lineTo(50, -130);
        A010_2.crc2.lineWidth = 3;
        A010_2.crc2.stroke();
        A010_2.crc2.restore();
    }
    function drawHouse(_position, _size) {
        console.log("House", _position, _size);
        A010_2.crc2.save();
        A010_2.crc2.beginPath();
        A010_2.crc2.translate(_position.x, _position.y);
        A010_2.crc2.rect(0, 0, 20, 100);
        A010_2.crc2.fillStyle = "#632E1A";
        A010_2.crc2.fill();
        A010_2.crc2.restore();
        A010_2.crc2.closePath();
        A010_2.crc2.save();
        A010_2.crc2.beginPath();
        A010_2.crc2.translate(_position.x - 40, _position.y - 10);
        A010_2.crc2.rect(0, 0, 50, 10);
        A010_2.crc2.fillStyle = "#632E1A";
        A010_2.crc2.fill();
        A010_2.crc2.restore();
        A010_2.crc2.closePath();
        A010_2.crc2.save();
        A010_2.crc2.beginPath();
        A010_2.crc2.translate(_position.x + 10, _position.y - 10);
        A010_2.crc2.rect(0, 0, 60, 10);
        A010_2.crc2.fillStyle = "#743D2B";
        A010_2.crc2.fill();
        A010_2.crc2.restore();
        A010_2.crc2.closePath();
        A010_2.crc2.save();
        A010_2.crc2.beginPath();
        A010_2.crc2.translate(_position.x - 40, _position.y - 80);
        A010_2.crc2.rect(0, 0, 40, 70);
        A010_2.crc2.fillStyle = "#743D2B";
        A010_2.crc2.fill();
        A010_2.crc2.restore();
        A010_2.crc2.closePath();
        A010_2.crc2.save();
        A010_2.crc2.beginPath();
        A010_2.crc2.translate(_position.x, _position.y - 80);
        A010_2.crc2.rect(0, 0, 60, 70);
        A010_2.crc2.fillStyle = "#B06C49";
        A010_2.crc2.fill();
        A010_2.crc2.restore();
        A010_2.crc2.closePath();
        A010_2.crc2.save();
        A010_2.crc2.beginPath();
        A010_2.crc2.translate(_position.x - 20, _position.y - 80);
        A010_2.crc2.lineTo(0, -40);
        A010_2.crc2.lineTo(30, 0);
        A010_2.crc2.lineTo(-30, 0);
        A010_2.crc2.lineTo(0, -40);
        A010_2.crc2.fillStyle = "#632E1A";
        A010_2.crc2.fill();
        A010_2.crc2.restore();
        A010_2.crc2.closePath();
        A010_2.crc2.save();
        A010_2.crc2.beginPath();
        A010_2.crc2.translate(_position.x + 9, _position.y - 80);
        A010_2.crc2.lineTo(0, 0);
        A010_2.crc2.lineTo(60, 0);
        A010_2.crc2.lineTo(30, -40);
        A010_2.crc2.lineTo(-30, -40);
        A010_2.crc2.lineTo(0, 0);
        A010_2.crc2.fillStyle = "#743D2B";
        A010_2.crc2.fill();
        A010_2.crc2.restore();
        A010_2.crc2.closePath();
    }
    function randomBetween(_min, _max) {
        let returnNumber = Math.floor(Math.random() * (_max - _min)) + _min;
        return returnNumber;
    }
    A010_2.randomBetween = randomBetween;
    A010_2.directions = ["x", "-x"];
})(A010_2 || (A010_2 = {}));
//# sourceMappingURL=canvas.js.map