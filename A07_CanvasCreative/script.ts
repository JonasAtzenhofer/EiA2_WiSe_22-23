namespace L08CanvasCreativeArt {

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

        //das canvas soll den gesamten Bildschirm ausfüllen
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

        // transparenter Hintergrund 
        crc2.fillStyle = "rgba(100, 0, 0, 0.4)";
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



        





    }
}


