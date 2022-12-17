var A09_2;
(function (A09_2) {
    class SitBird {
        position;
        velocity;
        color;
        beakColor;
        scale;
        eating;
        constructor(_position, _color, _beakColor) {
            this.position = _position;
            this.color = _color;
            this.beakColor = _beakColor;
            this.scale = new A09_2.Vector(0, 0);
            this.scale.set(this.position.y / 500, this.position.y / 500);
            this.velocity = new A09_2.Vector(0, 0);
            this.velocity.random(50, 100, A09_2.directions[Math.floor(Math.random() * A09_2.directions.length)]);
            let values = [true, false];
            this.eating = values[Math.floor(Math.random() * values.length)];
        }
        draw() {
            if (this.eating != true) {
                let r1 = 15;
                let transform = A09_2.crc2.getTransform();
                A09_2.crc2.scale(this.scale.x, this.scale.y);
                //Draw Feet
                A09_2.crc2.translate(this.position.x, this.position.y);
                A09_2.crc2.beginPath();
                A09_2.crc2.moveTo(-10, 10);
                A09_2.crc2.lineTo(-5, 0);
                A09_2.crc2.lineTo(0, 10);
                A09_2.crc2.lineTo(5, 0);
                A09_2.crc2.lineTo(10, 10);
                A09_2.crc2.moveTo(0, 10);
                A09_2.crc2.strokeStyle = "#000";
                A09_2.crc2.lineWidth = 2;
                A09_2.crc2.closePath();
                A09_2.crc2.stroke();
                //Draw Legs
                let leg = new Path2D();
                leg.moveTo(0, 0);
                leg.lineTo(0, -20);
                A09_2.crc2.save();
                A09_2.crc2.translate(-5, 0);
                A09_2.crc2.stroke(leg);
                A09_2.crc2.translate(10, 0);
                A09_2.crc2.stroke(leg);
                A09_2.crc2.restore();
                A09_2.crc2.translate(0, -25);
                let body = A09_2.crc2.getTransform();
                let bCircle = new Path2D;
                let hCircle = new Path2D;
                let eye = new Path2D;
                //drawBody
                bCircle.arc(0, 0, r1, 0, 2 * Math.PI);
                A09_2.crc2.fillStyle = this.color.bColor;
                A09_2.crc2.fill(bCircle);
                //drawHead
                A09_2.crc2.translate(0, -r1);
                hCircle.arc(0, 0, r1 * 0.8, 0, 2 * Math.PI);
                A09_2.crc2.fillStyle = this.color.hColor;
                A09_2.crc2.fill(hCircle);
                //drawEye
                A09_2.crc2.translate(-r1 / 2, -r1 * 0.1);
                eye.arc(0, 0, r1 * 0.1, 0, 2 * Math.PI);
                A09_2.crc2.fillStyle = this.color.eyeColor;
                A09_2.crc2.fill(eye);
                //drawEye
                A09_2.crc2.translate(r1, 0);
                eye.arc(0, 0, r1 * 0.1, 0, 2 * Math.PI);
                A09_2.crc2.fillStyle = this.color.eyeColor;
                A09_2.crc2.fill(eye);
                //drawBeak
                A09_2.crc2.setTransform(body);
                A09_2.crc2.beginPath();
                A09_2.crc2.moveTo(0, 0);
                A09_2.crc2.lineTo(-5, -r1 * 0.8);
                A09_2.crc2.lineTo(5, -r1 * 0.8);
                A09_2.crc2.fillStyle = this.beakColor;
                A09_2.crc2.closePath();
                A09_2.crc2.fill();
                A09_2.crc2.setTransform(transform);
            }
            if (this.eating == true) {
                let r1 = 15;
                let transform = A09_2.crc2.getTransform();
                A09_2.crc2.scale(this.scale.x, this.scale.y);
                //Draw Feet
                A09_2.crc2.translate(this.position.x, this.position.y);
                let position = A09_2.crc2.getTransform();
                A09_2.crc2.beginPath();
                A09_2.crc2.moveTo(-10, 10);
                A09_2.crc2.lineTo(-5, 0);
                A09_2.crc2.lineTo(0, 10);
                A09_2.crc2.lineTo(5, 0);
                A09_2.crc2.lineTo(10, 10);
                A09_2.crc2.moveTo(0, 10);
                A09_2.crc2.strokeStyle = "#000";
                A09_2.crc2.lineWidth = 2;
                A09_2.crc2.closePath();
                A09_2.crc2.stroke();
                //Draw Legs
                let leg = new Path2D();
                leg.moveTo(0, 0);
                leg.lineTo(0, -20);
                A09_2.crc2.save();
                A09_2.crc2.translate(-5, 0);
                A09_2.crc2.stroke(leg);
                A09_2.crc2.translate(10, 0);
                A09_2.crc2.stroke(leg);
                A09_2.crc2.restore();
                A09_2.crc2.translate(0, -25);
                let body = A09_2.crc2.getTransform();
                let bCircle = new Path2D;
                let hCircle = new Path2D;
                //drawBody
                bCircle.arc(0, 0, r1, 0, 2 * Math.PI);
                A09_2.crc2.fillStyle = this.color.bColor;
                A09_2.crc2.fill(bCircle);
                A09_2.crc2.setTransform(position);
                //drawBeak
                A09_2.crc2.translate(0, 5);
                A09_2.crc2.beginPath();
                A09_2.crc2.moveTo(0, 0);
                A09_2.crc2.lineTo(-5, -r1 * 0.8);
                A09_2.crc2.lineTo(5, -r1 * 0.8);
                A09_2.crc2.fillStyle = this.beakColor;
                A09_2.crc2.closePath();
                A09_2.crc2.fill();
                A09_2.crc2.setTransform(position);
                A09_2.crc2.translate(0, -25 / 2);
                //drawHead
                hCircle.arc(0, 0, r1 * 0.8, 0, 2 * Math.PI);
                A09_2.crc2.fillStyle = this.color.hColor;
                A09_2.crc2.fill(hCircle);
                A09_2.crc2.setTransform(transform);
            }
        }
        eat(_timeslice) {
            let offset = new A09_2.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            this.eating = !this.eating;
            if (this.position.x > A09_2.crc2.canvas.width)
                this.position.x -= A09_2.crc2.canvas.width;
            if (this.position.x < 0)
                this.position.x += A09_2.crc2.canvas.width;
        }
    }
    A09_2.SitBird = SitBird;
})(A09_2 || (A09_2 = {}));
//# sourceMappingURL=sittingBirds.js.map