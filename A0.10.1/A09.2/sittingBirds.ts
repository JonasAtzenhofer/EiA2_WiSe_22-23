namespace A010_2 {
    export class SitBird {
        position: Vector;
        velocity: Vector;
        color: BirdColor;
        beakColor: string;
        scale: Vector;
        eating: boolean;

        constructor(_position: Vector, _color: BirdColor, _beakColor: string) {
            this.position = _position;
            this.color = _color;
            this.beakColor = _beakColor;
            this.scale = new Vector(0, 0);
            this.scale.set(this.position.y / 500, this.position.y / 500);
            this.velocity = new Vector(0, 0);
            this.velocity.random(50, 100, directions[Math.floor(Math.random() * directions.length)]);
            

            let values: boolean[] = [true, false];
            this.eating = values[Math.floor(Math.random() * values.length)];
        }

        draw(): void {

            if (this.eating != true) {
                let r1: number = 15;
                let transform: DOMMatrix = crc2.getTransform();

                crc2.scale(this.scale.x, this.scale.y);

                //Draw Feet
                crc2.translate(this.position.x, this.position.y);
                crc2.beginPath();
                crc2.moveTo(-10, 10);
                crc2.lineTo(-5, 0);
                crc2.lineTo(0, 10);
                crc2.lineTo(5, 0);
                crc2.lineTo(10, 10);
                crc2.moveTo(0, 10);
                crc2.strokeStyle = "#000";
                crc2.lineWidth = 2;
                crc2.closePath();
                crc2.stroke();

                //Draw Legs
                let leg: Path2D = new Path2D();
                leg.moveTo(0, 0);
                leg.lineTo(0, -20);
                crc2.save();
                crc2.translate(-5, 0);
                crc2.stroke(leg);
                crc2.translate(10, 0);
                crc2.stroke(leg);
                crc2.restore();

                crc2.translate(0, -25);
                let body: DOMMatrix = crc2.getTransform();


                let bCircle: Path2D = new Path2D;
                let hCircle: Path2D = new Path2D;
                let eye: Path2D = new Path2D;

                //drawBody
                bCircle.arc(0, 0, r1, 0, 2 * Math.PI);
                crc2.fillStyle = this.color.bColor;
                crc2.fill(bCircle);

                //drawHead
                crc2.translate(0, -r1);
                hCircle.arc(0, 0, r1 * 0.8, 0, 2 * Math.PI);
                crc2.fillStyle = this.color.hColor;
                crc2.fill(hCircle);
                //drawEye
                crc2.translate(-r1 / 2, -r1 * 0.1);
                eye.arc(0, 0, r1 * 0.1, 0, 2 * Math.PI);
                crc2.fillStyle = this.color.eyeColor;
                crc2.fill(eye);
                //drawEye
                crc2.translate(r1, 0);
                eye.arc(0, 0, r1 * 0.1, 0, 2 * Math.PI);
                crc2.fillStyle = this.color.eyeColor;
                crc2.fill(eye);

                //drawBeak
                crc2.setTransform(body);
                crc2.beginPath();
                crc2.moveTo(0, 0);
                crc2.lineTo(-5, -r1 * 0.8);
                crc2.lineTo(5, -r1 * 0.8);
                crc2.fillStyle = this.beakColor;
                crc2.closePath();
                crc2.fill();

                crc2.setTransform(transform);
            }

            if (this.eating == true) {
                let r1: number = 15;
                let transform: DOMMatrix = crc2.getTransform();

                crc2.scale(this.scale.x, this.scale.y);

                //Draw Feet
                crc2.translate(this.position.x, this.position.y);
                let position: DOMMatrix = crc2.getTransform();

                crc2.beginPath();
                crc2.moveTo(-10, 10);
                crc2.lineTo(-5, 0);
                crc2.lineTo(0, 10);
                crc2.lineTo(5, 0);
                crc2.lineTo(10, 10);
                crc2.moveTo(0, 10);
                crc2.strokeStyle = "#000";
                crc2.lineWidth = 2;
                crc2.closePath();
                crc2.stroke();

                //Draw Legs
                let leg: Path2D = new Path2D();
                leg.moveTo(0, 0);
                leg.lineTo(0, -20);
                crc2.save();
                crc2.translate(-5, 0);
                crc2.stroke(leg);
                crc2.translate(10, 0);
                crc2.stroke(leg);
                crc2.restore();

                crc2.translate(0, -25);
                let body: DOMMatrix = crc2.getTransform();


                let bCircle: Path2D = new Path2D;
                let hCircle: Path2D = new Path2D;

                //drawBody
                bCircle.arc(0, 0, r1, 0, 2 * Math.PI);
                crc2.fillStyle = this.color.bColor;
                crc2.fill(bCircle);

                crc2.setTransform(position);
                //drawBeak
                crc2.translate(0, 5);
                crc2.beginPath();
                crc2.moveTo(0, 0);
                crc2.lineTo(-5, -r1 * 0.8);
                crc2.lineTo(5, -r1 * 0.8);
                crc2.fillStyle = this.beakColor;
                crc2.closePath();
                crc2.fill();

                crc2.setTransform(position);
                crc2.translate(0, -25 / 2);
                
                //drawHead
                
                hCircle.arc(0, 0, r1 * 0.8, 0, 2 * Math.PI);
                crc2.fillStyle = this.color.hColor;
                crc2.fill(hCircle);

                crc2.setTransform(transform);
            }

        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            this.eating = !this.eating;

            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
        }
    }
}