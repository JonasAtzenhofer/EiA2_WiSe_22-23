var A09_2;
(function (A09_2) {
    class FlyingBird {
        position;
        velocity;
        scale;
        constructor(_position) {
            this.position = _position;
            this.velocity = new A09_2.Vector(0, 0);
            this.velocity.random(50, 200);
            this.scale = new A09_2.Vector(0, 0);
            this.scale.set(this.position.y / 225, this.position.y / 225);
        }
        draw() {
            A09_2.crc2.save();
            A09_2.crc2.translate(this.position.x, this.position.y);
            A09_2.crc2.scale(this.scale.x, this.scale.y);
            A09_2.crc2.beginPath();
            A09_2.crc2.moveTo(0, 0);
            A09_2.crc2.bezierCurveTo(0, -10, -10, -10, -10, 0);
            A09_2.crc2.moveTo(0, 0);
            A09_2.crc2.strokeStyle = "#000";
            A09_2.crc2.closePath();
            A09_2.crc2.stroke();
            A09_2.crc2.beginPath();
            A09_2.crc2.moveTo(0, 0);
            A09_2.crc2.bezierCurveTo(0, -10, 10, -10, 10, 0);
            A09_2.crc2.moveTo(0, 0);
            A09_2.crc2.strokeStyle = "#000";
            A09_2.crc2.closePath();
            A09_2.crc2.stroke();
            A09_2.crc2.restore();
        }
        fly(_timeslice) {
            let offset = new A09_2.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x > A09_2.crc2.canvas.width)
                this.position.x -= A09_2.crc2.canvas.width;
            if (this.position.x < 0)
                this.position.x += A09_2.crc2.canvas.width;
        }
    }
    A09_2.FlyingBird = FlyingBird;
})(A09_2 || (A09_2 = {}));
//# sourceMappingURL=flyingBirds.js.map