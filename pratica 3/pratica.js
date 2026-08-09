// console.log("Danilo Munhepe")

// let idade = 34
// let idade3 = 6

// let somar = idade + idade3

// console.log(somar)

//EXERCICIO 1
// const compras = ["arroz", "feijao", "leite"]
// console.log(compras)

// compras.push("cafe") //adiciona no final
// console.log(compras)

// compras.unshift("pao") //adiciona no inicio
// console.log(compras)

// compras.shift() //remove o inicio
// console.log(compras)

// const imprimirIndex = compras.indexOf("feijao")
// if(imprimirIndex !== -1){
//     compras.splice(imprimirIndex, 1)
// }

// console.log(compras)

//EXERCICIO 2
// const numeros = [10, 25, 30, 45, 50]

// console.log(numeros.includes(30)) // para verificar se existe ou nao

// console.log(numeros.indexOf(30)) // para verficiar a posicao do elemnto

// const maiorQueVinte = numeros.find(number => number > 20) // encontrart numero maior que 20
// console.log(maiorQueVinte)

//EXERCICIO 3
// const usuario = {
//     nome : "Danilo Munhepe",
//     idade : 27,
//     email : "danilomunhepe25@gmail.com"
// }

// const usandoPonto = usuario.nome
// console.log(usandoPonto)

// const usandoColchetes = usuario["email"]
// console.log(usandoColchetes)

// const campo = "idade"
// const tryAcessar = campo["idade"]
// console.log(tryAcessar)

// EXERCICIO 4
// const carrinho = {
//     itens : [],

//     adicionarItem(nome) {
//         this.itens.push(nome)
//     },

//     total(){
//         return this.itens.length
//     }
// }

// carrinho.adicionarItem("Banana")
// carrinho.adicionarItem("Tomate")

// console.log(carrinho.itens)
// console.log(carrinho.total())

// EXERCICIO 5
// const alunos = [
//   { nome: "Ana", nota: 8 },
//   { nome: "Bruno", nota: 5 },
//   { nome: "Carla", nota: 9 }
// ]

// let somarNotas = 0

// for (let i = 0; i < alunos.length; i++) {
//      const aluno = alunos[i]
//      console.log(`${aluno.nome} tirou ${aluno.nota}`)

//      somarNotas = somarNotas + aluno.nota
// }

// const media = somarNotas / alunos.length
// console.log(media.toFixed(0))

// EXERCICIO 6
// const numeros = [];

// for (let i = 1; i <= 30; i++) {
//   numeros.push(i);
// }

// console.log("Usando continue:");

// for (const numero of numeros) {
//   if (numero % 3 === 0) {
//     continue; // Pula os múltiplos de 3
//   }

//   console.log(numero);
// }

// console.log("\nUsando break:");

// for (const numero of numeros) {
//   if (numero > 20) {
//     break; // Para o loop ao encontrar o primeiro número maior que 20
//   }

//   console.log(numero);
// }

// EXERCICIO 7
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
// console.log("");

// for (let numero = 1; numero <= 5; numero++) {
//   for (let n = 1; n <= 10; n * n++) {
//     console.log(`${numero} x ${n} = ${numero * n}`);
//   }
//   console.log("");
// }

// EXERCICIO 8
// let numero = 1;
// let par = 0;
// let impar = 0;

// while (numero <= 50) {
//   if (numero % 2 === 0) {
//     par++;
//   } else {
//     impar++;
//   }

//   numero++;
// }

// console.log(par);
// console.log(impar);

// EXERCICIO 9
// const carrinho = {
//   itens: [],
//   precoTotal: 0,
// };
// const mediaSoma = 0;

// function adicionarItem(nome, preco) {
//   carrinho.itens.push(nome);
//   carrinho.precoTotal = carrinho.precoTotal + preco;
// }

// adicionarItem("Caneta", 2.5);
// adicionarItem("Caderno", 15);

// const media = carrinho.precoTotal / carrinho.itens.length;

// console.log("Itens: " + carrinho.itens);
// console.log("Total: " + carrinho.precoTotal.toFixed(2));
// console.log(`Preço médio: ${media}`);

// EXERCICIO 10
// const notas = [7, 9, 6.5, 10, 8];
// function encontrarMaior(lista) {
//   let maior = 0;
//   for (let i = 0; i <= lista.length; i++) {
//     if (lista[i] > maior) {
//       maior = lista[i];
//     }
//   }
//   return maior;
// }

// console.log("Maior nota: " + encontrarMaior(notas));

// function contarAprovados(lista) {
//   let total = 0;
//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i] >= 7) {
//       total = total + 1;
//     }
//   }
//   return total;
// }

// console.log("Aprovados (nota >= 7): " + contarAprovados(notas));
