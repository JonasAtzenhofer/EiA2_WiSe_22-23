var A010_2;
(function (A010_2) {
    class Snowflake {
        position;
        velocity;
        size;
        snowflake;
        gradient;
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new A010_2.Vector(0, 0);
            this.velocity = new A010_2.Vector(0, 0);
            this.velocity.random(50, 150);
            this.size = _size;
        }
        create(_xStep) {
            this.snowflake = new Path2D();
            this.gradient = A010_2.crc2.createRadialGradient(0, 0, 0, 0, 0, 10);
            this.snowflake.arc(0, 0, 10, 0, 2 * Math.PI);
            this.gradient.addColorStop(0, "hsla(0, 100%, 100%, 1)");
            this.gradient.addColorStop(1, "hsla(0, 100%, 100%, 0)");
            A010_2.crc2.fillStyle = this.gradient;
            if (_xStep) {
                this.position.x = this.position.x + _xStep;
            }
        }
        draw() {
            A010_2.crc2.save();
            A010_2.crc2.translate(this.position.x, this.position.y);
            A010_2.crc2.scale(this.size, this.size);
            A010_2.crc2.fill(this.snowflake);
            A010_2.crc2.restore();
        }
        move(_step) {
            let offset = new A010_2.Vector(0, this.velocity.y);
            offset.scale(_step);
            this.position.add(offset);
            if (this.position.y > 677) {
                this.position.y = 0;
            }
            this.draw();
        }
    }
    A010_2.Snowflake = Snowflake;
})(A010_2 || (A010_2 = {}));
//# sourceMappingURL=snowflake.js.map