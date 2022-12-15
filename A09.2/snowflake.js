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
            this.velocity = new A09_2.Vector(0, 0);
        }
        move(_timeslice) {
            console.log("Snowflake move");
            let offset = new A09_2.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }
        draw() {
            console.log("Snowflake draw");
            A09_2.crc2.beginPath();
            A09_2.crc2.arc(this.position.x, this.position.y, 2, 0, 2 * Math.PI);
            A09_2.crc2.stroke();
        }
    }
    A09_2.Snowflake = Snowflake;
})(A09_2 || (A09_2 = {}));
//# sourceMappingURL=snowflake.js.map