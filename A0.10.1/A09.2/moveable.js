var A010_2;
(function (A010_2) {
    class Moveable {
        position;
        velocity;
        constructor(_position) {
            // console.log("Moveable constructor");
            if (_position)
                this.position = _position.copy();
            else
                this.position = new A010_2.Vector(0, 0);
            this.velocity = new A010_2.Vector(0, 0);
        }
        move(_timeslice) {
            // console.log("Moveable move");
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += A010_2.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += A010_2.crc2.canvas.height;
            if (this.position.x > A010_2.crc2.canvas.width)
                this.position.x -= A010_2.crc2.canvas.width;
            if (this.position.y > A010_2.crc2.canvas.height)
                this.position.y -= A010_2.crc2.canvas.height;
        }
        draw() {
            // console.log("Moveable move");
        }
    }
    A010_2.Moveable = Moveable;
})(A010_2 || (A010_2 = {}));
//# sourceMappingURL=moveable.js.map