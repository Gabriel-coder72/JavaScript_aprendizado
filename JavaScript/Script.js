 let n1;
let n2;

n1 = 10;
n2 = 20;

console.log("Variavel N1 = " + n1);
console.log(typeof n1);
console.log("Variavel N1 + N2 = " + (n1 + n2));

n1 = "miko";

console.log(typeof n1);

console.log("Variavel N1 = " + n1);

// ===== PRÁTICA: TIPOS E CONVERSÕES =====

// 01 - Concatenação
let a = 12;
let b = "3";
console.log("Concatenação: " + (a + b));

// 02 - Subtração
console.log("Subtração: " + (a - b));

// 03 - Conversão
let texto = "25";
let numero = Number(texto);
console.log("Conversão: " + (numero + 5));
console.log(typeof texto);
console.log(typeof numero);

// ===== PRÁTICA: VARIÁVEIS =====

// 01 - Dados pessoais
const nome = "Nicolas";
const idade = 23;
console.log("Meu nome é " + nome + " e tenho " + idade + " anos.");

// 02 - Contador
let tentativas = 0;
tentativas = tentativas + 1;
tentativas = tentativas + 1;
tentativas = tentativas + 1;
console.log("Tentativas: " + tentativas);

// 03 - Escopo
if (true) {
    let mensagem = "Estou dentro do if";
    console.log(mensagem);
}
// console.log(mensagem); // ReferenceError: let só existe dentro do bloco do s                                                                                           yyy

// ===== PRÁTICA: TIPOS DE DADOS =====

// 01 - Identifique os tipos
let nomeAluno = "Nicolas";
let idadeAluno = 23;
let matriculaAtiva = true;
let telefone = null;

console.log(typeof nomeAluno);
console.log(typeof idadeAluno);
console.log(typeof matriculaAtiva);
console.log(typeof telefone);

// 02 - Null ou undefined?
let semValor;
let vazio = null;

console.log(semValor, typeof semValor);
console.log(vazio, typeof vazio);

// 03 - Desafio rápido
let decimal = 18.5;
let textoNumerico = "18";

console.log(typeof decimal);
console.log(typeof textoNumerico);

// ===== PRÁTICA: OPERADORES =====

// 01 - Comparações
let valorA = 15;
let valorB = 10;
console.log("15 > 10: " + (valorA > valorB));
console.log("15 < 10: " + (valorA < valorB));
console.log("15 === 10: " + (valorA === valorB));

// 02 - Igualdade
console.log('7 == "7": ' + (7 == "7"));
console.log('7 === "7": ' + (7 === "7"));

// 03 - Condição composta
let idadeUsuario = 20;
let autorizado = true;
console.log("Pode entrar: " + (idadeUsuario >= 18 && autorizado));

// ===== PRÁTICA: LAÇO FOR =====

// 01 - Contagem
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 02 - Tabuada
numero = 7; // "numero" já foi criada lá em cima com let, então só muda o valor
for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}

// 03 - Percorrer lista
let nomes = ["Nicolas", "Maina", "Gabriel", "Vinicius"];
for (let i = 0; i < nomes.length; i++) {
    console.log(i + " - " + nomes[i]);
}    
 numero = 5;

while (numero >= 1) {
  console.log(numero);
  numero--;
}

// 02 - Somando
let n = 1;
let soma = 0;

while (n <= 20) {
  soma += n;
  n++;
}

console.log("Soma final: " + soma);

// 03 - Atenção ao loop
let vezes = 1;

while (vezes <= 3) {
  console.log("Execução " + vezes);
  vezes++;
}