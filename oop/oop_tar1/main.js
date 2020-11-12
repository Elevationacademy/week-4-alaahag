// class Animal {
//   constructor(name, numLegs) {
//       this.name = name
//       this.numLegs = numLegs
//       this.children = []
//   }

//   giveBirth(name){
//       this.children.push(name)
//   }
// }

// class Human {
//   constructor(name, age, isFriendly) {
//       this.name = name
//       this.age = age
//       this.isFriendly = isFriendly
//   }
// }

// class Vehicle {
//   constructor(x, y, speed, fuel) {
//       this.x = x;
//       this.y = y;
//       this._speed = speed;
//       this._fuel = fuel
//   }

//   get fuel() {
//       return this._fuel
//   }

//   set fuel(amount) {
//       if (amount > 150) { return console.log("Too much") }
//       if (amount < 0) { return console.log("Not reasonable") }
//       this._fuel = amount
//   }
// }

// let veh = new Vehicle(1,2,10,44);
// veh.fuel = 160;
// console.log(veh.fuel);

class Zoo
{
  constructor()
  {
      this.animals = [];
  }

  addAnimal(animal)
  {
      this.animals.push(animal);
      console.log("Added " + animal.name + " to the zoo");
  }

  showAnimals()
  {
      this.animals.forEach(a => console.log(a.name));

  }
}

class Animal
{
  constructor(name, numLegs)
  {
      this.name = name;
      this.numLegs = numLegs;
  }
}

const cat = new Animal("Puss", 4);
const zoo = new Zoo();

zoo.addAnimal(cat); // prints "Added Puss to the zoo"
zoo.showAnimals(); // prints "Puss"