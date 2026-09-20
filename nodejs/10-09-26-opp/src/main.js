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
// class Animal {
//   constructor(race) {
//     this.race = race;

//     // 13. Abstract class - Classe abstrata
//     if (new.target === Animal) {
//       throw new Error("A classe Animal não pode ser instanciada diretamente");
//     }
//   }

//   walk() {
//     console.log(`${this.race} está andando`);
//   }

//   eat() {
//     console.log(`${this.race} está comendo`);
//   }

//   // 10. Polimorfismo - O mesmo método pode ter comportamentos diferentes em subclasses
//   makeSound() {
//     throw new Error("O método makeSound() deve ser implementado na subclasse");
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log(`${this.race} está latindo`);
//   }

//   makeSound() {
//     console.log(`${this.race} está latindo`);
//   }
// }

// class Snake extends Animal {
//   // 9. Method overriding - Subscrição de método
//   walk() {
//     console.log(`${this.race} está rastejando`);
//   }

//   makeSound() {
//     console.log(`${this.race} está sibilando`);
//   }
// }

// class Fish extends Animal {
//   // 11. Static method - Método estático
//   static walk() {
//     console.log(`${this.race} está nadando`);
//   }

//   makeSound() {
//     console.log(`${this.race} está borbulhando`);
//   }
// }

// class Person extends Animal {
//   constructor(race, salary) {
//     // 8. Super
//     super(race);
//     this.salary = salary;
//   }

//   speak() {
//     console.log(`${this.race} está falando`);
//   }

//   // 12. Abstração
//   #complexityOfMakingSound() {}

//   makeSound() {
//     // Passo complexo
//     this.#complexityOfMakingSound();
//     console.log(`${this.race} está gritando`);
//   }
// }

// const dog = new Dog("Cachorro");
// const person = new Person("Pessoa", 100);
// const snake = new Snake("Cobra");
// const fish = new Fish("Peixe");
// // const animal = new Animal("Animal");
// console.log(Fish.walk());
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

//EXERCICIOS
// **1. Refatorar para Classe**
// Pegue este objeto e converta para uma classe com constructor e método.
// ```js
// const carro = { marca: "Toyota", velocidade: 0, acelerar() { this.velocidade += 10; } };
// ```
// Depois crie 3 instâncias e acelere cada uma de forma diferente.

// class Carro {
//   constructor(marca) {
//     this.marca = marca;
//     this.velocidade = 0;
//   }

//   acelerar() {
//     this.velocidade += 10;
//   }
// }

// // Criando 3 instâncias
// const carro1 = new Carro("Toyota");
// const carro2 = new Carro("BMW");
// const carro3 = new Carro("Mazda");

// // Acelerando de formas
// carro1.acelerar();

// carro2.acelerar();
// carro2.acelerar();

// carro3.acelerar();
// carro3.acelerar();
// carro3.acelerar();

// console.log(carro1);
// console.log(carro2);
// console.log(carro3);

//------------------------------------------------------------------------------------------------------------------------------------------

// 2. Encapsulamento — Conta Bancária Crie uma classe ContaBancaria com:

// #saldo privado (começa em 0)
// Métodos depositar(valor) e sacar(valor)
// sacar deve lançar erro se valor > saldo
// Um getter get saldo() (somente leitura de fora)
// Impeça acesso direto como conta.#saldo ou conta.saldo = 999.

// class ContaBancaria {
//   #saldo = 0;

//   depositar(valor) {
//     this.#saldo += valor;
//   }

//   sacar(valor) {
//     if (valor > this.#saldo) {
//       throw new Error("Saldo insuficiente");
//     }

//     this.#saldo -= valor;
//   }

//   get saldo() {
//     return this.#saldo;
//   }
// }

// const conta = new ContaBancaria();

// conta.depositar(1000);

// console.log(conta.saldo); // 1000

// conta.sacar(300);

// console.log(conta.saldo); // 700

//-----------------------------------------------------------------------------------------------------------------------------------------------

//3. Classe Utilitária Estática Crie uma classe MathHelper com métodos estáticos: somar(...nums), media(...nums), max(...nums). Depois mostre que new MathHelper()
//  ainda funciona mas é inútil — e explique por quê static é melhor aqui.

// class MathHelper {
//   static somar(...nums) {
//     return nums.reduce((total, num) => total + num, 0);
//   }

//   static media(...nums) {
//     const soma = nums.reduce((total, num) => total + num, 0);
//     return soma / nums.length;
//   }

//   static max(...nums) {
//     return Math.max(...nums);
//   }
// }

// console.log(MathHelper.somar(10, 20, 30));
// console.log(MathHelper.media(10, 20, 30));
// console.log(MathHelper.max(10, 20, 30));

// const helper = new MathHelper();

// console.log(helper); // MathHelper {}

//--------------------------------------------------------------------------------------------------------------------------------------------

// 4. Getters/Setters — Temperatura Crie uma classe Temperatura:

// Armazena Celsius internamente como #celsius
// get fahrenheit / set fahrenheit convertem automaticamente
// Valide: definir abaixo do zero absoluto (-273.15°C) lança erro

// class Temperatura {
//   #celsius;

//   constructor(celsius) {
//     if (celsius < -273.15) {
//       throw new Error("Temperatura abaixo do zero absoluto");
//     }

//     this.#celsius = celsius;
//   }

//   get fahrenheit() {
//     return (this.#celsius * 9 / 5) + 32;
//   }

//   set fahrenheit(valor) {
//     const celsius = (valor - 32) * 5 / 9;

//     if (celsius < -273.15) {
//       throw new Error("Temperatura abaixoo do zero absoluto");
//     }

//     this.#celsius = celsius;
//   }
// }

// const temp = new Temperatura(25);

// // Consultar em Fahrenheit
// console.log(temp.fahrenheit);

//Alterando através de Fahrenheit
// temp.fahrenheit = 86;

// console.log(temp.fahrenheit);

//---------------------------------------------------------------------------------------------------------------------------------------------

// 5. Hierarquia Animal Construa Animal (abstrata) → Cachorro, Gato, Passaro.

// Cada um sobrescreve fazerSom()
// Animal lança erro se instanciada diretamente
// Adicione um método compartilhado comer() que loga "${nome} está comendo"
// Depois percorra um array de animais misturados e chame fazerSom() em cada um.

// class Animal {
//   constructor(nome) {
//     if (new.target === Animal) {
//       throw new Error("Animal nao pode ser instanciada diretamente");
//     }

//     this.nome = nome;
//   }

//   fazerSom() {
//     throw new Error("O método fazerSom() deve ser implementado");
//   }

//   comer() {
//     console.log(`${this.nome} esta a comer`);
//   }
// }

// class Cachorro extends Animal {
//   fazerSom() {
//     console.log(`${this.nome}: Au au!`);
//   }
// }

// class Gato extends Animal {
//   fazerSom() {
//     console.log(`${this.nome}: Miau!`);
//   }
// }

// class Passaro extends Animal {
//   fazerSom() {
//     console.log(`${this.nome}: Piu piu!`);
//   }
// }

// const cachorro = new Cachorro("Rex");
// const gato = new Gato("Mimi");
// const passaro = new Passaro("Pico");

// const animais = [cachorro, gato, passaro];

// animais.forEach((animal) => {
//   animal.fazerSom();
// });

//-----------------------------------------------------------------------------------------------------------------------------------------------

// **6. Calculadora de Área de Formas** `Forma` abstrata com `area()` e `perimetro()` abstratos. Implemente `Circulo`, `Retangulo`, `Triangulo`.
// Adicione um **static** `Forma.comparar(a, b)` que retorna a forma com maior área.

// class Forma {
//   constructor() {
//     if (new.target === Forma) {
//       throw new Error("A classe Forma nao pode ser instanciada diretamente");
//     }
//   }

//   area() {
//     throw new Error("O método area() deve ser implementado");
//   }

//   perimetro() {
//     throw new Error("O método perimetro() deve ser implementado");
//   }

//   static comparar(a, b) {
//     if (a.area() > b.area()) {
//       return a;
//     }

//     return b;
//   }
// }

// // CiRCULO
// class Circulo extends Forma {
//   constructor(raio) {
//     super();
//     this.raio = raio;
//   }

//   area() {
//     return Math.PI * this.raio ** 2;
//   }

//   perimetro() {
//     return 2 * Math.PI * this.raio;
//   }
// }

// // RETaNGULO
// class Retangulo extends Forma {
//   constructor(largura, altura) {
//     super();
//     this.largura = largura;
//     this.altura = altura;
//   }

//   area() {
//     return this.largura * this.altura;
//   }

//   perimetro() {
//     return 2 * (this.largura + this.altura);
//   }
// }

// // TRIaNGULO
// class Triangulo extends Forma {
//   constructor(base, altura, lado1, lado2, lado3) {
//     super();
//     this.base = base;
//     this.altura = altura;
//     this.lado1 = lado1;
//     this.lado2 = lado2;
//     this.lado3 = lado3;
//   }

//   area() {
//     return (this.base * this.altura) / 2;
//   }

//   perimetro() {
//     return this.lado1 + this.lado2 + this.lado3;
//   }
// }

// const circulo = new Circulo(5);
// const retangulo = new Retangulo(10, 5);
// const triangulo = new Triangulo(6, 4, 5, 5, 6);

// console.log("Área círculo:", circulo.area());
// console.log("Perímetro círculo:", circulo.perimetro());

// console.log("Área retângulo:", retangulo.area());
// console.log("Perímetro retângulo:", retangulo.perimetro());

// console.log("Área triângulo:", triangulo.area());
// console.log("Perímetro triângulo:", triangulo.perimetro());

// const maior = Forma.comparar(circulo, retangulo);

// console.log("Forma com maior area:", maior);

//----------------------------------------------------------------------------------------------------------------------------------------------

// 7. Polimorfismo com Funcionários Funcionario (abstrata, tem nome, salarioBase) → Gerente, Desenvolvedor, Estagiario.

// Cada um tem calcularSalario() diferente (Gerente ganha bônus, Estagiário ganha metade).
// Percorra 5 funcionários e imprima a folha de pagamento total.

// class Funcionario {
//   constructor(nome, salarioBase) {
//     if (new.target === Funcionario) {
//       throw new Error("Funcionario é uma classe abstrata");
//     }

//     this.nome = nome;
//     this.salarioBase = salarioBase;
//   }

//   calcularSalario() {
//     throw new Error("O método calcularSalario() deve ser implementado");
//   }
// }

// class Gerente extends Funcionario {
//   constructor(nome, salarioBase, bonus) {
//     super(nome, salarioBase);
//     this.bonus = bonus;
//   }

//   calcularSalario() {
//     return this.salarioBase + this.bonus;
//   }
// }

// class Desenvolvedor extends Funcionario {
//   calcularSalario() {
//     return this.salarioBase;
//   }
// }

// class Estagiario extends Funcionario {
//   calcularSalario() {
//     return this.salarioBase / 2;
//   }
// }

//
// const funcionarios = [
//   new Gerente("Carlos", 50000, 10000),
//   new Desenvolvedor("Ana", 40000),
//   new Desenvolvedor("Pedro", 35000),
//   new Estagiario("João", 20000),
//   new Estagiario("Maria", 16000)
// ];

//
// let totalFolha = 0;

// funcionarios.forEach((funcionario) => {
//   const salario = funcionario.calcularSalario();

//   console.log(`${funcionario.nome}: ${salario}`);

//   totalFolha += salario;
// });

// console.log(`Total da folha: ${totalFolha}`);

//--------------------------------------------------------------------------------------------------------------------------------------------

// 8. Processador de Pagamento MetodoPagamento abstrata com pagar(valor) abstrato. Implemente CartaoCredito, PayPal, Cripto.
// Adicione uma função checkout(carrinho, metodoPagamento) que funciona com qualquer método — prove o polimorfismo passando os três.

// class MetodoPagamento {
//   constructor() {
//     if (new.target === MetodoPagamento) {
//       throw new Error(
//         "MetodoPagamento é uma classe abstrata"
//       );
//     }
//   }

//   pagar(valor) {
//     throw new Error(
//       "O método pagar() deve ser implementado"
//     );
//   }
// }

// class CartaoCredito extends MetodoPagamento {
//   pagar(valor) {
//     console.log(`Pagamento de ${valor} realizado com Cartão de Crédito.`);
//   }
// }

// class PayPal extends MetodoPagamento {
//   pagar(valor) {
//     console.log(`Pagamento de ${valor} realizado com PayPal.`);
//   }
// }

// class Cripto extends MetodoPagamento {
//   pagar(valor) {
//     console.log(`Pagamento de ${valor} realizado com Criptomoeda.`);
//   }
// }

// function checkout(carrinho, metodoPagamento) {
//   console.log(`Total do carrinho: ${carrinho}`);

//   metodoPagamento.pagar(carrinho);
// }

//
// const cartao = new CartaoCredito();
// const paypal = new PayPal();
// const cripto = new Cripto();

//
// checkout(1000, cartao);
// checkout(2000, paypal);
// checkout(3000, cripto);

//---------------------------------------------------------------------------------------------------------------------------------------------
// 9. Mixin — Serializable + Loggable Crie dois mixins:

// const Serializable = { serializar() { return JSON.stringify(this); } };
// const Loggable = { logar() { console.log(`[LOG] ${this.constructor.name}:`, this); } };
// Aplique ambos nas classes Usuario e Produto. Depois serialize + logue as instâncias.

// const Serializable = {
//   serializar() {
//     return JSON.stringify(this);
//   }
// };

// const Loggable = {
//   logar() {
//     console.log(`[LOG] ${this.constructor.name}:`, this);
//   }
// };

// class Usuario {
//   constructor(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//   }
// }

// class Produto {
//   constructor(nome, preco) {
//     this.nome = nome;
//     this.preco = preco;
//   }
// }

// Object.assign(Usuario.prototype, Serializable, Loggable);
// Object.assign(Produto.prototype, Serializable, Loggable);

// const usuario = new Usuario("Carlos", 25);
// const produto = new Produto("Notebook", 45000);

// console.log(usuario.serializar());
// console.log(produto.serializar());

// usuario.logar();
// produto.logar();

//------------------------------------------------------------------------------------------------------------------------------------------

// 10. Composição sobre Herança Construa um Personagem de jogo usando composição em vez de herança:

// const podeVoar = { voar() { return `${this.nome} voa`; } };
// const podeNadar = { nadar() { return `${this.nome} nada`; } };
// const podeLutar = { lutar() { return `${this.nome} luta`; } };
// Crie um Pato (voar + nadar), um Peixe (nadar) e um SuperHeroi (voar + lutar). Sem herança de classe — apenas espalhamento de objetos.

// const podeVoar = {
//   voar() {
//     return `${this.nome} voa`;
//   }
// };

// const podeNadar = {
//   nadar() {
//     return `${this.nome} nada`;
//   }
// };

// const podeLutar = {
//   lutar() {
//     return `${this.nome} luta`;
//   }
// };

// const pato = {
//   nome: "Donald",
//   ...podeVoar,
//   ...podeNadar
// };

// const peixe = {
//   nome: "Nemo",
//   ...podeNadar
// };

// const superHeroi = {
//   nome: "Superman",
//   ...podeVoar,
//   ...podeLutar
// };

// console.log(pato.voar());
// console.log(pato.nadar());

// console.log(peixe.nadar());

// console.log(superHeroi.voar());
// console.log(superHeroi.lutar());

//----------------------------------------------------------------------------------------------------------------------------------------------

// 11. Refatorar Herança Profunda → Composição Dado este design ruim:

// class Veiculo {}
// class Carro extends Veiculo {}
// class CarroEsportivo extends Carro {}
// class CarroEsportivoEletrico extends CarroEsportivo {}
// Refatore usando composição (ex: comportamentos Motor, Rodas, Bateria) para que adicionar um "carro voador elétrico" não exija uma nova classe numa cadeia de 5 níveis.
//  Explique o tradeoff.

// const Motor = {
//   acelerar() {
//     return `${this.nome} está acelerar`;
//   }
// };

// const Rodas = {
//   dirigir() {
//     return `${this.nome} está dirigr`;
//   }
// };

// const Bateria = {
//   carregar() {
//     return `${this.nome} está carregar a bateria`;
//   }
// };

// const Voo = {
//   voar() {
//     return `${this.nome} está voando`;
//   }
// };

//---------------------------------------------------------------------------------------------------------------------------------------------

// 12. Privado + Estático + Factory Crie uma classe Usuario:

// #id privado auto-incrementado via contador static
// #senha privada — definida no constructor, nunca legível
// Static Usuario.fromJSON(json) factory que constrói um usuário a partir de um objeto plano
// Método verificarSenha(senha) que compara internamente

// class Usuario {
//   static #contador = 0;

//   #id;
//   #senha;

//   constructor(nome, senha) {
//     Usuario.#contador++;

//     this.#id = Usuario.#contador;
//     this.nome = nome;
//     this.#senha = senha;
//   }

//   get id() {
//     return this.#id;
//   }

//   verificarSenha(senha) {
//     return this.#senha === senha;
//   }

//   static fromJSON(json) {
//     return new Usuario(json.nome, json.senha);
//   }
// }

// const usuario1 = new Usuario("Carlos", "1234");
// const usuario2 = new Usuario("Ana", "abcd");

// console.log(usuario1.id); // 1
// console.log(usuario2.id); // 2

// console.log(usuario1.verificarSenha("1234")); // true
// console.log(usuario1.verificarSenha("9999")); // false

// const dados = {
//   nome: "Pedro",
//   senha: "pedro123"
// };

// const usuario3 = Usuario.fromJSON(dados);

// console.log(usuario3.id);   // 3
// console.log(usuario3.nome); // Pedro

// console.log(usuario3.verificarSenha("pedro123")); // true

//----------------------------------------------------------------------------------------------------------------------------------------------
//13.

//-----------------------------------------------------------------------------------------------------------------------------------------------

// 14. Padrão Observer Crie uma classe Loja com:

// Array privado #inscritos
// inscrever(fn), desinscrever(fn), notificar(dados)
// Um setState(novoEstado) que chama notificar
// Depois crie dois inscritos e prove que ambos são notificados na mudança de estado

// class Loja {
//   #inscritos = [];
//   #estado;

//   inscrever(fn) {
//     this.#inscritos.push(fn);
//   }

//   desinscrever(fn) {
//     this.#inscritos = this.#inscritos.filter(
//       inscrito => inscrito !== fn
//     );
//   }

//   notificar(dados) {
//     this.#inscritos.forEach(inscrito => {
//       inscrito(dados);
//     });
//   }

//   setState(novoEstado) {
//     this.#estado = novoEstado;

//     this.notificar(novoEstado);
//   }
// }

// const cliente1 = (dados) => {
//   console.log(`Cliente 1 recebeu: ${dados}`);
// };

// const cliente2 = (dados) => {
//   console.log(`Cliente 2 recebeu: ${dados}`);
// };

// const loja = new Loja();

// loja.inscrever(cliente1);
// loja.inscrever(cliente2);

// loja.setState("Novo produto disponível!");
