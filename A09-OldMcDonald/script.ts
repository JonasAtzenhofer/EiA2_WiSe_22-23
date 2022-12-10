namespace L09_OldMcDonald {
    window.addEventListener("load", handleLoad);

    let animal1: Animal = new Animal("Berta", "Muh", "Cow", "Grass", 5, 20, "Old McDonald had a farm, Muh Muh Muh");
    let animal2: Animal = new Animal("Shaun", "Bäää", "Sheep", "Leaves", 2, 10, "and on his farm he had a Sheep, Bää bää bää");
    let animal3: Animal = new Animal("Hans", "Wuff", "Dog", "Meat", 10, 30, "with a Wuff Wuff here and a Wuff Wuff there");
    let animal4: Animal = new Animal("Karl", "Miau", "Cat", "Fish", 1, 5, "here a Miau, there a Miau, everywhere a Miau Miau");
    let animal5: Animal = new Animal("Klaus", "Quak", "Duck", "Corn", 3, 15, "Old McDonald had a farm, Quak Quak Quak");

    let foodDisplay: HTMLDivElement;
    let animalDisplay: HTMLDivElement;
    let restartDay: HTMLButtonElement;


    function handleLoad(_event: Event): void {

        foodDisplay = <HTMLDivElement>document.getElementById("food");
        animalDisplay = <HTMLDivElement>document.getElementById("animals");
        restartDay = <HTMLButtonElement>document.getElementById("restartDay");

        document.getElementById("restartDay").addEventListener("click", cow);
        setTimeout(cow, 1500);

        function cow(): void {
            restartDay.style.display = "none";
            animal1.foodAmount = animal1.foodAmount - animal1.foodEaten;
            animalDisplay.innerHTML += animal1.format();
            updateFoodCount();
            setTimeout(sheep, 1500);
        }

        function sheep(): void {
            animal2.foodAmount = animal2.foodAmount - animal2.foodEaten;
            animalDisplay.innerHTML += animal2.format();
            updateFoodCount();
            setTimeout(dog, 1500);
        }

        function dog(): void {
            animal3.foodAmount = animal3.foodAmount - animal3.foodEaten;
            animalDisplay.innerHTML += animal3.format();
            updateFoodCount();
            setTimeout(cat, 1500);
        }

        function cat(): void {
            animal4.foodAmount = animal4.foodAmount - animal4.foodEaten;
            animalDisplay.innerHTML += animal4.format();
            updateFoodCount();
            setTimeout(duck, 1500);
        }

        function duck(): void {
            restartDay.style.display = "inline";
            animal5.foodAmount = animal5.foodAmount - animal5.foodEaten;
            animalDisplay.innerHTML += animal5.format();
            updateFoodCount();
            
        }

        function updateFoodCount(): void {
            foodDisplay.innerHTML = animal1.food() + animal2.food() + animal3.food() + animal4.food() + animal5.food();
            
            if (animal1.foodAmount <= 0 || animal2.foodAmount <= 0 || animal3.foodAmount <= 0 || animal4.foodAmount <= 0 || animal5.foodAmount <= 0) {
                alert("Old MacDonald hat nicht genügend Futter da!");
                
            }
        }

       


    }
}
