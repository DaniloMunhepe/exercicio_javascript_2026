## 🟢 Nível 1 — Básico (1–4)

**1. Refatorar para Classe**
Pegue este objeto e converta para uma classe com constructor e método.
```js
const carro = { marca: "Toyota", velocidade: 0, acelerar() { this.velocidade += 10; } };
```
Depois crie 3 instâncias e acelere cada uma de forma diferente.

---

**2. Encapsulamento — Conta Bancária**
Crie uma classe `ContaBancaria` com:
- `#saldo` privado (começa em 0)
- Métodos `depositar(valor)` e `sacar(valor)`
- `sacar` deve lançar erro se valor > saldo
- Um getter `get saldo()` (somente leitura de fora)

Impeça acesso direto como `conta.#saldo` ou `conta.saldo = 999`.

---

**3. Classe Utilitária Estática**
Crie uma classe `MathHelper` com métodos estáticos: `somar(...nums)`, `media(...nums)`, `max(...nums)`.
Depois mostre que `new MathHelper()` ainda funciona mas é inútil — e explique *por quê* static é melhor aqui.

---

**4. Getters/Setters — Temperatura**
Crie uma classe `Temperatura`:
- Armazena Celsius internamente como `#celsius`
- `get fahrenheit` / `set fahrenheit` convertem automaticamente
- Valide: definir abaixo do zero absoluto (-273.15°C) lança erro

---

## 🟡 Nível 2 — Herança & Polimorfismo (5–8)

**5. Hierarquia Animal**
Construa `Animal` (abstrata) → `Cachorro`, `Gato`, `Passaro`.
- Cada um sobrescreve `fazerSom()`
- `Animal` lança erro se instanciada diretamente
- Adicione um método compartilhado `comer()` que loga `"${nome} está comendo"`

Depois percorra um array de animais misturados e chame `fazerSom()` em cada um.

---

**6. Calculadora de Área de Formas**
`Forma` abstrata com `area()` e `perimetro()` abstratos.
Implemente `Circulo`, `Retangulo`, `Triangulo`.
Adicione um **static** `Forma.comparar(a, b)` que retorna a forma com maior área.

---

**7. Polimorfismo com Funcionários**
`Funcionario` (abstrata, tem `nome`, `salarioBase`) → `Gerente`, `Desenvolvedor`, `Estagiario`.
- Cada um tem `calcularSalario()` diferente (Gerente ganha bônus, Estagiário ganha metade).
- Percorra 5 funcionários e imprima a folha de pagamento total.

---

**8. Processador de Pagamento**
`MetodoPagamento` abstrata com `pagar(valor)` abstrato.
Implemente `CartaoCredito`, `PayPal`, `Cripto`.
Adicione uma função `checkout(carrinho, metodoPagamento)` que funciona com **qualquer** método — prove o polimorfismo passando os três.

---

## 🟠 Nível 3 — Composição & Mixins (9–11)

**9. Mixin — Serializable + Loggable**
Crie dois mixins:
```js
const Serializable = { serializar() { return JSON.stringify(this); } };
const Loggable = { logar() { console.log(`[LOG] ${this.constructor.name}:`, this); } };
```
Aplique ambos nas classes `Usuario` e `Produto`. Depois serialize + logue as instâncias.

---

**10. Composição sobre Herança**
Construa um `Personagem` de jogo usando composição em vez de herança:
```js
const podeVoar = { voar() { return `${this.nome} voa`; } };
const podeNadar = { nadar() { return `${this.nome} nada`; } };
const podeLutar = { lutar() { return `${this.nome} luta`; } };
```
Crie um `Pato` (voar + nadar), um `Peixe` (nadar) e um `SuperHeroi` (voar + lutar). Sem herança de classe — apenas espalhamento de objetos.

---

**11. Refatorar Herança Profunda → Composição**
Dado este design ruim:
```js
class Veiculo {}
class Carro extends Veiculo {}
class CarroEsportivo extends Carro {}
class CarroEsportivoEletrico extends CarroEsportivo {}
```
Refatore usando composição (ex: comportamentos `Motor`, `Rodas`, `Bateria`) para que adicionar um "carro voador elétrico" não exija uma nova classe numa cadeia de 5 níveis. Explique o tradeoff.

---

## 🔴 Nível 4 — Avançado (12–15)

**12. Privado + Estático + Factory**
Crie uma classe `Usuario`:
- `#id` privado auto-incrementado via contador **static**
- `#senha` privada — definida no constructor, nunca legível
- Static `Usuario.fromJSON(json)` factory que constrói um usuário a partir de um objeto plano
- Método `verificarSenha(senha)` que compara internamente

---

**13. Iterator + OOP**
Crie uma classe `Playlist` que:
- Guarda array privado `#musicas`
- Implementa `[Symbol.iterator]()` para que `for (const musica of playlist)` funcione
- Tem `adicionar(musica)`, `remover(musica)` e `get tamanho`

---

**14. Padrão Observer**
Crie uma classe `Loja` com:
- Array privado `#inscritos`
- `inscrever(fn)`, `desinscrever(fn)`, `notificar(dados)`
- Um `setState(novoEstado)` que chama `notificar`

Depois crie dois inscritos e prove que ambos são notificados na mudança de estado.

---

**15. Mini-Sistema Completo — Biblioteca**
Projete um pequeno sistema de biblioteca usando tudo:
- `ItemMidia` abstrata (id, titulo, `getInfo()` abstrato)
- `Livro`, `DVD`, `Revista` estendem ela
- Classe `Biblioteca` com array privado `#itens`
- Métodos: `adicionar(item)`, `remover(id)`, `buscarPorTitulo(titulo)`, `listar()` (iterável)
- Use `instanceof` dentro de `listar()` para contar quantos de cada tipo
- Adicione um mixin `Loggable` na `Biblioteca` para logar cada adição/remoção