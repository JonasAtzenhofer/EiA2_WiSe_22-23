//A02 EventInspector
//Jonas Atzenhofer MKB 271026
//Quellen: Robert Schindler



namespace L02_EventInspector {

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        //console.log(_event);

        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.querySelector("body").addEventListener("click", logInfo);
        document.querySelector("body").addEventListener("keyup", logInfo);
        document.querySelector("#div0").addEventListener("click", logInfo);
        document.querySelector("#div1").addEventListener("keyup", logInfo);
        document.querySelector("button").addEventListener("click", logButton);



    }

    function setInfoBox(_event: MouseEvent): void {

        let span: HTMLSpanElement = document.querySelector("span");



        let x: Number = _event.screenX;
        let y: Number = _event.screenY;

        span.innerHTML = " x-Achse" + x.toString() + " y-Achse:" + y.toString() + " EventTarget" + _event.target;

        span.style.top = y.toString() + "px";
        span.style.left = x.toString() + "px";



    }

    function logInfo(_event: Event): void {



        console.log(_event.target, _event.currentTarget, _event.type, _event);

    }

    function logButton(_event: MouseEvent): void {

        let button: HTMLElement = <HTMLElement>document.querySelector("button");
        let event: CustomEvent = new CustomEvent("CustomEvent", { bubbles: true });
        dispatchEvent(_event);

    }

    function buttonClickEvent(_event: Event): void {

        console.log(_event);
    }

}