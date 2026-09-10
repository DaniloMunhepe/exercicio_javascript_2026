// 1. Objecto
// const danilo = {
//   name: "Danilo",
//   age: 30,
//   country: "Brasil",
//   height: 1.7,
//   greet: function () {
//     console.log(`Olá, meu nome é ${this.name}`);
//   },
// };

// // danilo.greet(); // Olá, meu nome é Danilo

// // 2. Class -
// class User {
//   #firstname; // Campos privados
//   #lastname;
//   // 4. Constructor
//   constructor(firstname, lastname, age, height, country) {
//     // 6. Encapsulamento
//     this.#firstname = firstname;
//     this.#lastname = lastname;
//     this.name = `${firstname} ${lastname}`;
//     this.age = age;
//     this.height = height;
//     this.country = country;
//     // console.log("Um novo usuário foi criado ", firstname);
//   }

//   greet() {
//     // 5. this
//     console.log(`Olá, meu nome é ${this.#firstname}`);
//   }

//   work() {
//     console.log(`${this.#firstname} está trabalhando`);
//   }
// }

// // 3. Instancias

// const uanela = new User("Uanela", "Silva", 25, 1.65, "Brasil"); // Um novo usuário foi criado
// const joao = new User("João", "Souza", 30, 1.75, "Brasil"); // Um novo usuário foi criado

// // uanela.firstname = "Junior";
// // console.log(uanela.#firstname);
// console.log(uanela.name);
// console.log(uanela.age);
// console.log(uanela.greet());
// // console.log(uanela.work());
// console.log(joao.firstname);
// // console.log(joao.greet());

// 7. Herança
class Animal {
  constructor(race) {
    this.race = race;

    // 13. Abstract class - Classe abstrata
    if (new.target === Animal) {
      throw new Error("A classe Animal não pode ser instanciada diretamente");
    }
  }

  walk() {
    console.log(`${this.race} está andando`);
  }

  eat() {
    console.log(`${this.race} está comendo`);
  }

  // 10. Polimorfismo - O mesmo método pode ter comportamentos diferentes em subclasses
  makeSound() {
    throw new Error("O método makeSound() deve ser implementado na subclasse");
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.race} está latindo`);
  }

  makeSound() {
    console.log(`${this.race} está latindo`);
  }
}

class Snake extends Animal {
  // 9. Method overriding - Subscrição de método
  walk() {
    console.log(`${this.race} está rastejando`);
  }

  makeSound() {
    console.log(`${this.race} está sibilando`);
  }
}

class Fish extends Animal {
  // 11. Static method - Método estático
  static walk() {
    console.log(`${this.race} está nadando`);
  }

  makeSound() {
    console.log(`${this.race} está borbulhando`);
  }
}

class Person extends Animal {
  constructor(race, salary) {
    // 8. Super
    super(race);
    this.salary = salary;
  }

  speak() {
    console.log(`${this.race} está falando`);
  }

  // 12. Abstração
  #complexityOfMakingSound() {}

  makeSound() {
    // Passo complexo
    this.#complexityOfMakingSound();
    console.log(`${this.race} está gritando`);
  }
}

const dog = new Dog("Cachorro");
const person = new Person("Pessoa", 100);
const snake = new Snake("Cobra");
const fish = new Fish("Peixe");
// const animal = new Animal("Animal");
console.log(Fish.walk());
// dog.walk();
// dog.eat();
// dog.bark();
// person.walk();
// person.eat();
// person.speak();
// console.log(person.salary);
// snake.walk();
// fish.walk();
// person.makeSound(); // Lança um erro: O método makeSound() deve ser implementado na subclasse

// 11. instaceof
// console.log(dog instanceof Animal); // false
// console.log(person instanceof Person); // true
// console.log(snake instanceof Snake); // true
// console.log(fish instanceof Fish); // true
