//1. O Mago dos Tipo
let feitiço = "Lumos";
let nívelDeMana = 87;
let invisível = false;

console.log(`O feitiço é do tipo: ${typeof feitiço}`);
console.log(`O nível da mana é do tipo: ${typeof nívelDeMana}`);
console.log(`O invisível é do tipo: ${typeof invisível}`);

//2. Dragões e Condições
let idade = 20;
let temEspadaMagica = true;

if (idade > 18 && temEspadaMagica) {
    console.log("Você pode lutar contra o dragão!");
} else {
    console.log("Fuja enquanto é tempo!");
}

//3. A Pizzaria do Código
let temDinheiro = true;
let estaComFome = true;
let hojeEhSexta = true;

if (temDinheiro == true && estaComFome == true && hojeEhSexta == true) {
    console.log("Vamos pedir pizza!");
} else {
    console.log("Hoje não é dia de pizza.");
}

//4. A Máquina de Suco Inteligente
let fruta = "uva";

if (fruta == "laranja") {
    console.log("Preparando suco de laranja");
} else if (fruta == "uva") {
    console.log("Preparando suco de uva");
} else if (fruta == "morango") {
    console.log("Preparando suco de morango");
} else {
    console.log("Essa fruta não está disponível");
}

//5. Detetive dos Dados
let suspeito1 = "42";
let suspeito2 = 42;

if (suspeito1 === suspeito2) {
    console.log("Eles são exatamente iguais.");
} else if (suspeito1 == suspeito2) { 
    console.log("Eles dizem a mesma coisa, mas de formas diferentes.");
 } else {
    console.log("Eles são diferentes.");
 }

 //6. O Carrinho da Loja
let quantidadeItens = 4;
let valorTotal = 101;

if (quantidadeItens > 3 && valorTotal > 100) {
    console.log("Desconto aplicado!");
} else {
    console.log("Sem desconto dessa vez.");
}

//7. O Robô do Café
let pedido = "café";

if (pedido == "café") {
    console.log("Servindo café");
} else if (pedido == "capuccino") {
    console.log("Servindo capuccino");
} else if (pedido == "expresso") {
    console.log("Servindo expresso");
} else {
    console.log("Desculpe, não temos esse tipo de café");
}

//8. Missão: Planeta JavaScript
let combustivel = 51;
let clima = "bom";

if ( combustivel > 50 && clima == "bom" ) {
    console.log(" Pouso autorizado!");
} else {
    console.log("Abortar missão!");
}


//9. Presente Secreto
let nomeSecreto = "Ana";

if (nomeSecreto == "Ana") {
    console.log("Compre um chocolate");
} else if (nomeSecreto == "Carlos") {
    console.log("Compre um livro");
} else {
    console.log("Compre um presente surpresa");
}

//10. Jogo de Pontuação
let pontos = 100;

if (pontos >= 100){
    console.log("Você venceu!");
} else {
    console.log("Continue jogando!");
}

//11. Sessão de Cinema

let idadeCinema = 69;

if (idadeCinema <= 12) {
    console.log("Entrada gratuita!");
} else if ( idadeCinema >= 60) {
    console.log("Estrada gratuita");
} else {
    console.log("Precisa pagar ingresso");
}

//12. Poção Misteriosa
