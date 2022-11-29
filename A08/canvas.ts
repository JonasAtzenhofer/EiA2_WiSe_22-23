namespace A08 {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");


        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;


        








    }
}