namespace A09_2 {
    export class Snowflake {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_position: Vector) {
            console.log("Snowflake constructor");

            let x: number = 800 * Math.random();
            let y: number = 600 * Math.random();
            this.position = new Vector(x, y);
            this.velocity = new Vector(0, 0);
        }

        move(_timeslice: number): void {
            console.log("Snowflake move");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }

        draw(): void {
            console.log("Snowflake draw");
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 2, 0, 2 * Math.PI);
            crc2.stroke();
        }
    }
}