var L09_OldMcDonald;
(function (L09_OldMcDonald) {
    class Animal {
        name;
        sound;
        species;
        foodType;
        foodEaten;
        foodAmount;
        sing;
        constructor(_name, _sound, _species, _foodType, _foodEaten, _foodAmount, _sing) {
            this.name = _name;
            this.sound = _sound;
            this.species = _species;
            this.foodType = _foodType;
            this.foodEaten = _foodEaten;
            this.foodAmount = _foodAmount;
            this.sing = _sing;
        }
        format() {
            return `<br>The ${this.species} named ${this.name} makes "${this.sound}", and eats ${this.foodEaten} Kg of ${this.foodType} and sings :  ${this.sing}.<br>`;
        }
        food() {
            return `${this.foodType} : ${this.foodAmount} Kg//  `;
        }
    }
    L09_OldMcDonald.Animal = Animal;
})(L09_OldMcDonald || (L09_OldMcDonald = {}));
//# sourceMappingURL=animal.js.map