namespace L01_RandomPoem {

    let subjekte: string[] = ["Harry", "Hermine", "Snape", "Dumbledore"];
    let prädikate: string[] = ["braut", "liebt", "zaubert", "hasst"];
    let objekte: string[] = ["Zaubertränke", "Hogwards", "Dementoren", "Butterbier"];

    //console.log(subjekte, prädikate, objekte);

    for (let i: number =  subjekte.length; i > 0 ; i--) {
        // console.log(i);
 console.log(getVerse(subjekte, prädikate, objekte));   
}     

    function getVerse(_subjekte: string[], _prädikate: string[], _objekte: string[]): string {

        let vers: string = " ";
        let randomNumber: number;
        
        randomNumber = Math.floor(Math.random() * _subjekte.length);
        let zufallsSubjekt: string[] = _subjekte.splice(randomNumber, 1);

        randomNumber = Math.floor(Math.random() * _prädikate.length);
        let zufallsPrädikat: string[] = _prädikate.splice(randomNumber, 1);

        randomNumber = Math.floor(Math.random() * _objekte.length);
        let zufallsObjekt: string[] = _objekte.splice(randomNumber, 1);

        vers = zufallsSubjekt + " " + zufallsPrädikat + " " + zufallsObjekt;


        
        return vers;
}}
