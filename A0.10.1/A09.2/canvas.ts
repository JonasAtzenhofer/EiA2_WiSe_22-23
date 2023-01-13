//Jonas Atzenhofer L08.2
//Matrikelnummer: 271026
//Datum: 13.01.2023
//Quellen: Natan Haider 






namespace A010_2 {



    window.addEventListener("load", handleLoad);



    export let crc2: CanvasRenderingContext2D;






    export let background: ImageData;
    let xStep: number = 0;
    export let posSnowflakes: Vector = new Vector (200, 0);


    let moveables: Moveable[] = [];




    function handleLoad(_event: Event): void {

        let canvas: HTMLCanvasElement | null = <HTMLCanvasElement>document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");



        drawBackground();
        drawSun(new Vector(100, 75));
        drawCloud(new Vector(300, 95), new Vector(150, 75));
        drawMountains(new Vector(0, 300), 75, 200, "grey", "white");
        drawMountains(new Vector(0, 300), 50, 150, "grey", "lightgrey");
        drawTree(new Vector(10, 500), new Vector(50, 100));
        drawTree(new Vector(75, 500), new Vector(50, 100));
        drawTree(new Vector(125, 500), new Vector(50, 100));
        drawTree(new Vector(155, 500), new Vector(50, 100));
        drawTree(new Vector(200, 500), new Vector(50, 100));
        drawTree(new Vector(255, 500), new Vector(50, 100));
        drawTree(new Vector(300, 500), new Vector(50, 100));
        drawSnowman(new Vector(100, 600), new Vector(100, 50));
        drawHouse(new Vector(250, 600), new Vector(50, 100));
        //drawBird(new Vector(375, 585), new Vector(200, 100));
        drawBirds(20);
        drawTestSnowflake();
        window.setInterval(update, 20);
       









    }



    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "darkblue");
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(0.8, "lightgrey");
        gradient.addColorStop(1, "white");

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

        crc2.fillStyle = "brown";
        crc2.fillRect(_position.x, _position.y, 20, -100);



        let nBranches: number = 10;
        let maxRadius: number = 60;
        let branch: Path2D = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
        crc2.fillStyle = "darkgreen";
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


        crc2.fillStyle = "brown";
        crc2.fillRect(_position.x, _position.y, 20, -100);



    }

    function drawBirds(_nBirds: number): void {

        let ratio: number = Math.random();
        let nSitting: number = Math.floor(_nBirds * ratio);
        let nFlying: number = _nBirds - nSitting;
        let nCrow: number = 10;

        for (let drawn: number = 0; drawn < nSitting; drawn++) {
            crc2.save();

            let randomColor: number = Math.floor(Math.random() * color.length);
            let randomBeakColor: number = Math.floor(Math.random() * beakColor.length);

            let maxWidth: number = 650;
            let minWidth: number = 100;
            let minHeight: number = 400;
            let maxHeight: number = 500;

            let x: number = randomBetween(minWidth, maxWidth);
            let y: number = randomBetween(minHeight, maxHeight);
            let birdPos: Vector = new Vector(x, y);


            let sittingBird: SitBird = new SitBird(birdPos, color[randomColor], beakColor[randomBeakColor]);
            moveables.push(sittingBird);
            sittingBird.draw();
            crc2.restore();

        }

        for (let drawn: number = 0; drawn < nFlying; drawn++) {
            crc2.save();

            let maxWidth: number = 740;
            let minWidth: number = 10;
            let minHeight: number = 0;
            let maxHeight: number = 225;

            let x: number = randomBetween(minWidth, maxWidth);
            let y: number = randomBetween(minHeight, maxHeight);
            let birdPos: Vector = new Vector(x, y);

            let flyingBird: FlyingBird = new FlyingBird(birdPos);
            moveables.push(flyingBird);
            flyingBird.draw();

            crc2.restore();

        }

        for (let drawn: number = 0; drawn < nCrow; drawn++) {
            crc2.save();

            let maxWidth: number = 740;
            let minWidth: number = 10;
            let minHeight: number = 0;
            let maxHeight: number = 225;

            let x: number = randomBetween(minWidth, maxWidth);
            let y: number = randomBetween(minHeight, maxHeight);
            let birdPos: Vector = new Vector(x, y);

            let flyingCrow: FlyingCrows = new FlyingCrows(birdPos);
            moveables.push(flyingCrow);
            flyingCrow.draw();

            crc2.restore();

        }
    }


   

    function update(): void {
        crc2.putImageData(background, 0, 0);
        //crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        updateMoveables();

    }


    function updateMoveables(): void {
        let transform: DOMMatrix = crc2.getTransform();

        for (let moveable of moveables) {

            if (moveable instanceof Snowflake) {
                moveable.snowstorm(1 / 50);
                moveable.draw();
            }

            if (moveable instanceof FlyingBird) {
                moveable.fly(1 / 50);
                moveable.draw();
            }

            if (moveable instanceof FlyingCrows) {
                moveable.fly(1 / 50);
                moveable.draw();
            }

            if (moveable instanceof SitBird) {
                let check: Boolean | void = moveable.checkUpdate();
                if (check == true) {
                    moveable.eat(1 / 100);
                    moveable.draw();

                }

                if (check == false) {
                    moveable.draw();
                }
            }
        }

        crc2.setTransform(transform);
    }

    function drawTestSnowflake(): void {

        let transform: DOMMatrix = crc2.getTransform();
        for (let index: number = 0; index < 375; index++) {
            xStep = xStep + 2;
            let snowflake: Snowflake = new Snowflake(1, new Vector(xStep, 0));
            snowflake.draw();
            moveables.push(snowflake);
            background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

        }

        crc2.setTransform(transform);
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


        crc2.beginPath();
        crc2.moveTo(-20, -100);
        crc2.lineTo(-50, -130);
        crc2.lineWidth = 3;
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(20, -100);
        crc2.lineTo(50, -130);
        crc2.lineWidth = 3;

        crc2.stroke();






        crc2.restore();

    }

    function drawHouse(_position: Vector, _size: Vector): void {
        console.log("House", _position, _size);

        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x, _position.y);
        crc2.rect(0, 0, 20, 100);
        crc2.fillStyle = "#632E1A";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x - 40, _position.y - 10);
        crc2.rect(0, 0, 50, 10);
        crc2.fillStyle = "#632E1A";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x + 10, _position.y - 10);
        crc2.rect(0, 0, 60, 10);
        crc2.fillStyle = "#743D2B";
        crc2.fill();
        crc2.restore();
        crc2.closePath();


        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x - 40, _position.y - 80);
        crc2.rect(0, 0, 40, 70);
        crc2.fillStyle = "#743D2B";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x, _position.y - 80);
        crc2.rect(0, 0, 60, 70);
        crc2.fillStyle = "#B06C49";
        crc2.fill();
        crc2.restore();
        crc2.closePath();




        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x - 20, _position.y - 80);
        crc2.lineTo(0, -40);
        crc2.lineTo(30, 0);
        crc2.lineTo(-30, 0);
        crc2.lineTo(0, -40);
        crc2.fillStyle = "#632E1A";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x + 9, _position.y - 80);
        crc2.lineTo(0, 0);
        crc2.lineTo(60, 0);
        crc2.lineTo(30, -40);
        crc2.lineTo(-30, -40);
        crc2.lineTo(0, 0);
        crc2.fillStyle = "#743D2B";
        crc2.fill();
        crc2.restore();
        crc2.closePath();


    }

    


    export function randomBetween(_min: number, _max: number): number {
        let returnNumber: number = Math.floor(Math.random() * (_max - _min)) + _min;
        return returnNumber;
    }

    export let directions: string[] = ["x", "-x"];


}

