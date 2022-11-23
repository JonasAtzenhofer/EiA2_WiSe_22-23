var L07CanvasÜbungen;
(function (L07CanvasÜbungen) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        //das canvas soll den gesamten Bildschirm ausfüllen
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
        }
        // transparenter Hintergrund 
        crc2.fillStyle = "rgba(100, 0, 0, 0.4)";
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
    }
})(L07CanvasÜbungen || (L07CanvasÜbungen = {}));
//# sourceMappingURL=script.js.map