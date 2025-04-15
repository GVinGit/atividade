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
    console.log("Vamos pedir pizza!")
} else {
    console.log("Hoje não é dia de pizza.")
}

//4. A Máquina de Suco Inteligente
let fruta = caju;

if(fruta == laranja) {
    console.log("Preparando suco de laranja")
} else if (fruta == uva) {
    console.log("Preparando suco de uva")
} else if (fruta == morango) {
    console.log("Preparando suco de morango")
} else {
    console.log("Essa fruta não está disponível")
}

//5. Detetive dos Dados
let suspeito1 = "42";
let suspeito2 = 42;

if (suspeito1 === suspeito2) {
    console.log("Eles dizem a mesma coisa, mas de formas diferentes.")
} else if (suspeito1 == suspeito2) { 
    console.log("Eles são exatamente iguais.")
 } else {
    console.log("Eles são diferentes.")
 }

 //6. O Carrinho da Loja
