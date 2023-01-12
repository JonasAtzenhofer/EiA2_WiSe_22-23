namespace A010_2 {
    export class FlyingBird extends Moveable{
        position: Vector;
        velocity: Vector;
        scale: Vector;

        constructor(_position: Vector) {
            this.position = _position;
            this.velocity = new Vector(0, 0);
            this.velocity.random(50, 200);

            this.scale = new Vector(0, 0);
            this.scale.set(this.position.y / 225, this.position.y / 225);
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.scale.x, this.scale.y);

            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.bezierCurveTo(0, -10, -10, -10, -10, 0);
            crc2.moveTo(0, 0);
            crc2.strokeStyle = "#000";
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.bezierCurveTo(0, -10, 10, -10, 10, 0);
            crc2.moveTo(0, 0);
            crc2.strokeStyle = "#000";
            crc2.closePath();
            crc2.stroke();

            crc2.restore();
        }

        

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
        }
    }
    }