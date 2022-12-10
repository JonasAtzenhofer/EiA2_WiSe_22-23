namespace L09_OldMcDonald {

    export class Animal {
        name: string;
        sound: string;
        species: string;
        foodType: string;
        foodEaten: number;
        foodAmount: number;
        sing: string;

        constructor(_name: string, _sound: string, _species: string,  _foodType: string,  _foodEaten: number, _foodAmount: number, _sing: string) {
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
}