//A02 EventInspector
//Jonas Atzenhofer MKB 271026
//Quellen: Robert Schindler
var L02_EventInspector;
(function (L02_EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
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
    function setInfoBox(_event) {
        let span = document.querySelector("span");
        let x = _event.screenX;
        let y = _event.screenY;
        span.innerHTML = " x-Achse" + x.toString() + " y-Achse:" + y.toString() + " EventTarget" + _event.target;
        span.style.top = y.toString() + "px";
        span.style.left = x.toString() + "px";
    }
    function logInfo(_event) {
        console.log(_event.target, _event.currentTarget, _event.type, _event);
    }
    function logButton(_event) {
        let button = document.querySelector("button");
        let event = new CustomEvent("CustomEvent", { bubbles: true });
    }
    function buttonClickEvent(_event) {
        console.log(_event);
    }
})(L02_EventInspector || (L02_EventInspector = {}));
//# sourceMappingURL=script.js.map