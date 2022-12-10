var L09_OldMcDonald;
(function (L09_OldMcDonald) {
    window.addEventListener("load", handleLoad);
    let animal1 = new L09_OldMcDonald.Animal("Berta", "Muh", "Cow", "Grass", 5, 20, "Old McDonald had a farm, Muh Muh Muh");
    let animal2 = new L09_OldMcDonald.Animal("Shaun", "Bäää", "Sheep", "Leaves", 2, 10, "and on his farm he had a Sheep, Bää bää bää");
    let animal3 = new L09_OldMcDonald.Animal("Hans", "Wuff", "Dog", "Meat", 10, 30, "with a Wuff Wuff here and a Wuff Wuff there");
    let animal4 = new L09_OldMcDonald.Animal("Karl", "Miau", "Cat", "Fish", 1, 5, "here a Miau, there a Miau, everywhere a Miau Miau");
    let animal5 = new L09_OldMcDonald.Animal("Klaus", "Quak", "Duck", "Corn", 3, 15, "Old McDonald had a farm, Quak Quak Quak");
    let foodDisplay;
    let animalDisplay;
    let restartDay;
    function handleLoad(_event) {
        foodDisplay = document.getElementById("food");
        animalDisplay = document.getElementById("animals");
        restartDay = document.getElementById("restartDay");
        document.getElementById("restartDay").addEventListener("click", cow);
        setTimeout(cow, 1500);
        function cow() {
            restartDay.style.display = "none";
            animal1.foodAmount = animal1.foodAmount - animal1.foodEaten;
            animalDisplay.innerHTML += animal1.format();
            updateFoodCount();
            setTimeout(sheep, 1500);
        }
        function sheep() {
            animal2.foodAmount = animal2.foodAmount - animal2.foodEaten;
            animalDisplay.innerHTML += animal2.format();
            updateFoodCount();
            setTimeout(dog, 1500);
        }
        function dog() {
            animal3.foodAmount = animal3.foodAmount - animal3.foodEaten;
            animalDisplay.innerHTML += animal3.format();
            updateFoodCount();
            setTimeout(cat, 1500);
        }
        function cat() {
            animal4.foodAmount = animal4.foodAmount - animal4.foodEaten;
            animalDisplay.innerHTML += animal4.format();
            updateFoodCount();
            setTimeout(duck, 1500);
        }
        function duck() {
            restartDay.style.display = "inline";
            animal5.foodAmount = animal5.foodAmount - animal5.foodEaten;
            animalDisplay.innerHTML += animal5.format();
            updateFoodCount();
        }
        function updateFoodCount() {
            foodDisplay.innerHTML = animal1.food() + animal2.food() + animal3.food() + animal4.food() + animal5.food();
            if (animal1.foodAmount <= 0 || animal2.foodAmount <= 0 || animal3.foodAmount <= 0 || animal4.foodAmount <= 0 || animal5.foodAmount <= 0) {
                alert("Old MacDonald hat nicht genügend Futter da!");
            }
        }
    }
})(L09_OldMcDonald || (L09_OldMcDonald = {}));
//# sourceMappingURL=script.js.map