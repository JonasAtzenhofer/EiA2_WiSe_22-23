var L01_RandomPoem;
(function (L01_RandomPoem) {
    let subjekte = ["Harry", "Hermine", "Snape", "Dumbledore"];
    let prädikate = ["braut", "liebt", "zaubert", "hasst"];
    let objekte = ["Zaubertränke", "Hogwards", "Dementoren", "Butterbier"];
    //console.log(subjekte, prädikate, objekte);
    for (let i = subjekte.length; i > 0; i--) {
        // console.log(i);
        console.log(getVerse(subjekte, prädikate, objekte));
    }
    function getVerse(_subjekte, _prädikate, _objekte) {
        let vers = " ";
        let randomNumber;
        randomNumber = Math.floor(Math.random() * _subjekte.length);
        let zufallsSubjekt = _subjekte.splice(randomNumber, 1);
        randomNumber = Math.floor(Math.random() * _prädikate.length);
        let zufallsPrädikat = _prädikate.splice(randomNumber, 1);
        randomNumber = Math.floor(Math.random() * _objekte.length);
        let zufallsObjekt = _objekte.splice(randomNumber, 1);
        vers = zufallsSubjekt + " " + zufallsPrädikat + " " + zufallsObjekt;
        return vers;
    }
})(L01_RandomPoem || (L01_RandomPoem = {}));
//# sourceMappingURL=script.js.map