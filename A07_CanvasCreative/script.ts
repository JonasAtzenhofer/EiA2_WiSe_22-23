namespace L08CanvasCreativeArt {

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {


        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");


        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        //zufällige Kreise 
        crc2.beginPath();
        for (let i: number = 0; i < 100; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;
            crc2.arc(x, y, 20, 0, 2 * Math.PI);
        }
        crc2.closePath();
        crc2.stroke();

        // zufällige bunte Rechtecke
        crc2.beginPath();
        for (let i: number = 0; i < 50; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;
            let width: number = Math.random() * 100;
            let height: number = Math.random() * 100;
            let color: string = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            crc2.fillStyle = color;
            crc2.fillRect(x, y, width, height);
        }

        // transparenter Hintergrund mit Farbverlauf
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSLA(240, 100%, 50%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 50%, 0.5)");
        gradient.addColorStop(0.5, "HSLA(120, 100%, 50%, 0.5)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);



        crc2.beginPath();
        for (let i: number = 0; i < 75; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;
            let radius: number = Math.random() * 50;
            let color: string = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            crc2.fillStyle = color;
            crc2.arc(x, y, radius, 0, 2 * Math.PI);
            crc2.fill();
        }

        let pattern: CanvasRenderingContext2D = document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 80;
        pattern.canvas.height = 40;

        pattern.fillStyle = "#fec";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.lineTo(15, 15);
        pattern.lineTo(25, 5);
        pattern.lineTo(35, 5);
        pattern.lineTo(45, 15);
        pattern.lineTo(35, 25);
        pattern.lineTo(25, 25);
        pattern.lineTo(15, 15);
        pattern.stroke();
        crc2.globalAlpha = 0.5;
        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    



    }
}


