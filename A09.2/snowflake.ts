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
            this.velocity = new Vector(0, 20);
        }

         move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.y < 0) {

                this.position.y += crc2.canvas.height;
            }

            if (this.position.y > crc2.canvas.height) {

                this.position.y -= crc2.canvas.height;
            }
           
            
         
        }

    draw(): void {
        console.log("Snowflake draw");
        crc2.beginPath();
        let radiusSnowflake: number = Math.random() * 3 + 1;
        crc2.beginPath();
        crc2.arc(this.position.x, this.position.y, radiusSnowflake, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
    }
}
}