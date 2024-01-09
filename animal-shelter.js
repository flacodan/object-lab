const animalData = require('./animal-data.json');

class Animal {
    constructor (name, species, color, hunger=50) {
        this.name = name;
        this.species = species;
        this.color = color;
        this.hunger = hunger;
    }
    greet(){
        console.log(`Hi me llamo ${this.name} soy ${this.species}`);
    };
    feed(){
        this.hunger -= 20;
        console.log(`Yum, I love food`);
    }
}

class Cat extends Animal {
    constructor(name, color, hunger=50){
        super(name, 'cat', color, hunger);
        this.food = 'fish';
    }
    greet(){
        console.log(`Meow I am ${this.name} a ${this.species}`);
    }
    feed(){
        this.hunger -= 20;
        console.log(`Yum, I love ${this.food}`);
    }
}

class Dog extends Animal {
    constructor(name, color, hunger=50){
        super(name, 'dog', color, hunger);
        this.food = 'kibble';
    }
    greet(){
        console.log(`Woof my name's ${this.name} I'm a ${this.species}`);
    }
    feed(){
        this.hunger -= 20;
        console.log(`Yum, I love ${this.food}`);
    }
}

class AnimalShelter {
    constructor () {
        this.animals = [];
    }
    addAnimal(newAnimal){
        this.animals.push(newAnimal);
    }
    adopt(animal){
        this.animals.splice(this.animals.indexOf(animal),1);
    }
    getAnimalsBySpecies(species){
        return this.animals.filter((animal) => animal.species === species);

    }
}

let shelter = new AnimalShelter;
for(let i = 0; i < animalData.length; i++){
    const a = animalData[i];
    const hunger = a.hunger ? a.hunger : 50;
    let newAnimal;
    if(a.species === 'cat') {
        newAnimal = new Cat(a.name, a.color, hunger);
    } else if (a.species === 'dog') {
        newAnimal = new Dog(a.name, a.color, hunger);
    } else {
        newAnimal = new Animal(a.name, a.species, a.color, hunger);
    }
    shelter.addAnimal(newAnimal);
}
// console.log(shelter.animals);
// console.log(shelter.getAnimalsBySpecies('cat'));

for(a of shelter.animals){
    a.greet();
    a.feed();
}