var A010_2;
(function (A010_2) {
    class FlyingBird extends A010_2.Moveable {
        position;
        velocity;
        scale;
        constructor(_position) {
            this.position = _position;
            this.velocity = new A010_2.Vector(0, 0);
            this.velocity.random(50, 200);
            this.scale = new A010_2.Vector(0, 0);
            this.scale.set(this.position.y / 225, this.position.y / 225);
        }
        draw() {
            A010_2.crc2.save();
            A010_2.crc2.translate(this.position.x, this.position.y);
            A010_2.crc2.scale(this.scale.x, this.scale.y);
            A010_2.crc2.beginPath();
            A010_2.crc2.moveTo(0, 0);
            A010_2.crc2.bezierCurveTo(0, -10, -10, -10, -10, 0);
            A010_2.crc2.moveTo(0, 0);
            A010_2.crc2.strokeStyle = "#000";
            A010_2.crc2.closePath();
            A010_2.crc2.stroke();
            A010_2.crc2.beginPath();
            A010_2.crc2.moveTo(0, 0);
            A010_2.crc2.bezierCurveTo(0, -10, 10, -10, 10, 0);
            A010_2.crc2.moveTo(0, 0);
            A010_2.crc2.strokeStyle = "#000";
            A010_2.crc2.closePath();
            A010_2.crc2.stroke();
            A010_2.crc2.restore();
        }
        move(_timeslice) {
            let offset = new A010_2.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x > A010_2.crc2.canvas.width)
                this.position.x -= A010_2.crc2.canvas.width;
            if (this.position.x < 0)
                this.position.x += A010_2.crc2.canvas.width;
        }
    }
    A010_2.FlyingBird = FlyingBird;
})(A010_2 || (A010_2 = {}));
//# sourceMappingURL=flyingBirds.js.map