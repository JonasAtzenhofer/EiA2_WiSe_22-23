var L08CanvasCreativeArt;
(function (L08CanvasCreativeArt) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        //zufällige Kreise 
        crc2.beginPath();
        for (let i = 0; i < 100; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            crc2.arc(x, y, 20, 0, 2 * Math.PI);
        }
        crc2.closePath();
        crc2.stroke();
        // zufällige bunte Rechtecke
        crc2.beginPath();
        for (let i = 0; i < 50; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            let width = Math.random() * 100;
            let height = Math.random() * 100;
            let color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            crc2.fillStyle = color;
            crc2.fillRect(x, y, width, height);
            crc2.closePath();
        }
        // transparenter Hintergrund mit Farbverlauf
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSLA(240, 100%, 50%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 50%, 0.5)");
        gradient.addColorStop(0.5, "HSLA(120, 100%, 50%, 0.5)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.beginPath();
        for (let i = 0; i < 75; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            let radius = Math.random() * 50;
            let color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            crc2.fillStyle = color;
            crc2.arc(x, y, radius, 0, 2 * Math.PI);
            crc2.fill();
        }
        let pattern = document.createElement("canvas").getContext("2d");
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
        // create multiple squares with a random color pattern and a random position
        for (let i = 0; i < 50; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let width = Math.random() * 100;
            let height = Math.random() * 100;
            let color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            crc2.fillStyle = color;
            crc2.fillRect(x, y, width, height);
        }
    }
})(L08CanvasCreativeArt || (L08CanvasCreativeArt = {}));
//# sourceMappingURL=script.js.map