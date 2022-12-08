namespace L09_OldMcDonald {
    window.addEventListener("load", handleLoad);

    class Animal {
        name: string;
        sound: string;
        species: string;
        amount: number;
        food: string;

        constructor(_name: string, _sound: string, _species: string, _amount: number, _food: string) {
            this.name = _name;
            this.sound = _sound;
            this.species = _species;
            this.amount = _amount;
            this.food = _food;
        }
    }



    function handleLoad(_event: Event): void {

        let animal: Animal[] = [];
        animal.push(new Animal("Paula", "Muuuh", "Cow", 20, "Grass"));
        animal.push(new Animal("Peppa", "Oink", "Pig", 3, "Corn"));
        animal.push(new Animal("Karl", "Määäh", "Sheep", 4, "Wheat"));
        animal.push(new Animal("Bello", "Wuff", "Dog", 4, "Dogfood"));
        animal.push(new Animal("Kitty", "Miau", "Cat", 4, "Catfood"));

        let animalDiv: HTMLDivElement = document.createElement("div");
        animalDiv.classList.add("animal");
        console.log(this);
        animalDiv.innerHTML = "<h3>" + animal[0].name + "</h3><p>" + animal[0].sound + "<h3><p>" + animal[0].species + "<h3><p>" + animal[0].amount + "<h3><p>" + animal[0].food + "</p>";
        document.body.appendChild(animalDiv);



       




        




    }
}
