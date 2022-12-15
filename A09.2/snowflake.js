var A09_2;
(function (A09_2) {
    class Snowflake {
        position;
        velocity;
        size;
        constructor(_position) {
            console.log("Snowflake constructor");
            let x = 800 * Math.random();
            let y = 600 * Math.random();
            this.position = new A09_2.Vector(x, y);
            this.velocity = new A09_2.Vector(0, 20);
        }
        move(_timeslice) {
            let offset = new A09_2.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.y < 0) {
                this.position.y += A09_2.crc2.canvas.height;
            }
            if (this.position.y > A09_2.crc2.canvas.height) {
                this.position.y -= A09_2.crc2.canvas.height;
            }
        }
        draw() {
            console.log("Snowflake draw");
            A09_2.crc2.beginPath();
            let radiusSnowflake = Math.random() * 3 + 1;
            A09_2.crc2.beginPath();
            A09_2.crc2.arc(this.position.x, this.position.y, radiusSnowflake, 0, 2 * Math.PI);
            A09_2.crc2.fillStyle = "white";
            A09_2.crc2.fill();
        }
    }
    A09_2.Snowflake = Snowflake;
})(A09_2 || (A09_2 = {}));
//# sourceMappingURL=snowflake.js.map