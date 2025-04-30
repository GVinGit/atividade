//Lista de exercícios 1



//1.O Mago dos Tipo
let feitiço = "Lumos";
let nívelDeMana = 87;
let invisível = false;

console.log(`O feitiço é do tipo: ${typeof feitiço}`);
console.log(`O nível da mana é do tipo: ${typeof nívelDeMana}`);
console.log(`O invisível é do tipo: ${typeof invisível}`);

//2.Dragões e Condições
let idade = 20;
let temEspadaMagica = true;

if (idade > 18 && temEspadaMagica) {
    console.log("Você pode lutar contra o dragão!");
} else {
    console.log("Fuja enquanto é tempo!");
}

//3.A Pizzaria do Código
let temDinheiro = true;
let estaComFome = true;
let hojeEhSexta = true;

if (temDinheiro && estaComFome && hojeEhSexta) {
    console.log("Vamos pedir pizza!");
} else {
    console.log("Hoje não é dia de pizza.");
}

//4.A Máquina de Suco Inteligente
let fruta = "uva";

if (fruta == "laranja") {
    console.log("Preparando suco de laranja!");
} else if (fruta == "uva") {
    console.log("Preparando suco de uva!");
} else if (fruta == "morango") {
    console.log("Preparando suco de morango!");
} else {
    console.log("Essa fruta não está disponível.");
}

//5.Detetive dos Dados
let suspeito1 = "42";
let suspeito2 = 42;

if (suspeito1 === suspeito2) {
    console.log("Eles são exatamente iguais.");
} else if (suspeito1 == suspeito2) { 
    console.log("Eles dizem a mesma coisa, mas de formas diferentes.");
 } else {
    console.log("Eles são diferentes.");
 }

 //6.O Carrinho da Loja
let quantidadeItens = 4;
let valorTotal = 101;

if (quantidadeItens > 3 && valorTotal > 100) {
    console.log("Desconto aplicado!");
} else {
    console.log("Sem desconto dessa vez.");
}

//7.O Robô do Café
let pedido = "café";

if (pedido == "café") {
    console.log("Servindo café!");
} else if (pedido == "capuccino") {
    console.log("Servindo capuccino!");
} else if (pedido == "expresso") {
    console.log("Servindo expresso!");
} else {
    console.log("Desculpe, não temos esse tipo de café.");
}

//8.Missão: Planeta JavaScript
let combustivel = 51;
let clima = "bom";

if ( combustivel > 50 && clima == "bom" ) {
    console.log(" Pouso autorizado!");
} else {
    console.log("Abortar missão!");
}


//9.Presente Secreto
let nomeSecreto = "Ana";

if (nomeSecreto == "Ana") {
    console.log("Compre um chocolate.");
} else if (nomeSecreto == "Carlos") {
    console.log("Compre um livro.");
} else {
    console.log("Compre um presente surpresa.");
}

//10.Jogo de Pontuação
let pontos = 100;

if (pontos >= 100){
    console.log("Você venceu!");
} else {
    console.log("Continue jogando!");
}

//11.Sessão de Cinema

let idadeCinema = 69;

if (idadeCinema <= 12) {
    console.log("Entrada gratuita!");
} else if ( idadeCinema >= 60) {
    console.log("Estrada gratuita!");
} else {
    console.log("Precisa pagar ingresso.");
}

//12.Poção Misteriosa
let ingrediente1 = "pele de sapo";
let ingrediente2 = "asa de morçego";

if ( ingrediente1 == "pele de sapo" && ingrediente2 == "asa de morçego") {
    console.log("Poção pronta!");
} else {
    console.log("Mistura errada!");
}

//13.Festa VIP

let nome1 = "Joana";
let temComvite = true;

if (nome1 == "Joana" || temComvite) {
    console.log("Pode entrar na festa.");
} else {
    console.log("Não pode entrar na festa.");
}

//14.Passeio com o Pet
let previsaoTempo = "sol";
let tempoLivre = true;

if (previsaoTempo == "sol" && tempoLivre) {
    console.log("Hora do passeio!");
} else {
    console.log("Hoje não vai dar...");
}

//15.sorveteria Gelada
let sabor = "morango";

if(sabor === "chocolate" || sabor === "morango" || sabor === "baunilha") {
    console.log(`Servindo sorvete de ${sabor}.`);
} else {
    console.log("Sabor indisponivel.");
}
    
//16.MasterChef Lógico
let temIngredientePrincipal = true;
let temTemperoSecreto = true;

if (temIngredientePrincipal || temTemperoSecreto) {
    console.log("Prato especial pronto!");
} else {
    console.log("Sem os ingredientes necessários.");
}

//17.Laboratório de Comparações
let valor1 = "100";
let valor2 = 100;

if (valor1 == valor2) {
    console.log("== compara apenas os valores.");
} else if (valor1 === valor2) {
    console.log("=== compara apenas os caracteres.");
}

//18.Esqui na Montanha
let idadeEsqui = 16;
let temEquipamento = true;

if (idadeEsqui >= 16 && temEquipamento) {
    console.log("Pode esquiar!")
} else {
    console.log("Não liberado.");
}

//19.Lista de Material Escolar
let tipoEnsino = "fundamental";

if (tipoEnsino == "fundamental") {
    console.log("Leve lápis.");
} else if (tipoEnsino == "médio") {
    console.log("Leve caneta.");
} else {
    console.log("Leve caneta e lápis.");
}

//20.Contato Alienígena
let sinal1 = true;
let sinal2 = false;

if (sinal1 && sinal2) {
    console.log("Sinal de paz eniado!");
} else {
    console.log("Sem contato estabelecido.");
}



//Lista de exercícios 2



//22.Viagem no Tempo      //O QUE HOUVE COM O 21?
let ano = 1999;

if ( ano >= 2020) {
    console.log("Viajando para o passado...");
} else {
    console.log("Rumo ao futuro!");
}

//23.Controle de Jogo
let botaoPressionado = "B";

if (botaoPressionado == "A") {
    console.log("O personagem está pulando.");
} else if (botaoPressionado == "B") {
    console.log("O personagem está correndo.");
}

//24. Vai Pra Praia?
let ehFinalDeSemana = true;
let tempoPraia = true;

if (ehFinalDeSemana && tempoPraia) {
    console.log("Bora praia!");
} else {
    consoçe.log("Melhor ficar em casa.");
}

//25.Sabonete Inteligente
let temAgua = true;
let temSabao = true;

if (temAgua && temSabao) {
    console.log("Espuma ativada!");
} else {
    console.log("Nada acontece.");
}

//26.Parabéns ou Não?
let dia = 18;
let mes = 4;

if (dia == 16 && mes == 6) {
    console.log("Hoje é seu aniversário. Parabéns!");
} else {
    console.log("Ainda não é seu aniversário.");
}

//27.Despertador Falante
let hora = 19;

if (hora >= 12 && hora <= 18) {
    console.log("Boa tarde!");
} else if (hora > 18) {
    console.log("Boa noite!");
} else {
    console.log("Bom dia!");
}

//28.Interruptor Lógico
let interruptor = "ligado";

if (interruptor == "ligado") {
    console.log("Luz acesa.");
} else {
    console.log("Luz apagada.");
}

//29.Caça-Vampiros
let temAlho = true;
let temCruz = true;

if (temAlho || temCruz) {
    console.log("Você venceu o vampiro!");
} else {
    console.log("Você corre perigo!");
}

//30.Código de Desbloqueio
let codigoDigitado = 1234;

if (codigoDigitado == 1234) {
    console.log("Celular desbloqueado.");
} else {
    console.log("Senha incorreta.");
}

//31.Corrida Maluca
let tempoCorredor = 2;

if (tempoCorredor < 10) {
    console.log("Você venceu!");
} else { 
    console.log("Tente novamente.");
}

//32.Cogumelo do Poder
let vida = 24;

if (vida < 50) {
    console.log("Usando cogumelo!");
} else {
    console.log("Não é necessario ainda.");
}

//34.Máquina de Vendas  //ONDE TA O 33?????
let valor = 69;

if (valor >= 5) {
    console.log("Produto liberado!");
} else {
    console.log("Valor insuficiente.");
}

//35.Tiro ao Alvo
let pontosAlvo = 69;

if (pontosAlvo >= 80 && pontosAlvo <= 100) {
    console.log("Você ganhou medalha de ouro!");
} else {
    console.log("Sua medalha não foi de ouro.")
}

//36.Misturando Cores
let cor1 = "roxo";
let cor2 = "preto";

if (cor1 == "azul" && cor2 == "amarelo") {
    console.log("A mistura de cores deu verde,");
} else {
    console.log("Cor inválida.");
}

//37.Entrega Rápida
let diaEntrega = 1;

if (diaEntrega > 2) {
    console.log("Entrega expressa.");
} else {
    console.log("Entrega comun.");
}

//38.Doces ou Travessuras
let data = 31;
let temFantasias;

if (temFantasias && data == 31) {
    console.log("Doces para você!");
} else {
    console.log("Sem doces pra ti.")
}

//39.Teste de Congelamento
let temperatura = -4;

if (temperatura < 0) {
    console.log("Água congelando!");
} else {
    console.log("Precisa estar mais frio pra congelar a água.")
}

//40.Jogo da Memória
let resposta = "azul, verde, vermelho";
let respostaCerta = "azul, verde, vermelho";

if (resposta == respostaCerta) {
    console.log("Você venceu!"); 
} else {
    console.log("Tente novamente.")
}

//41.Dragão Acordado
let dragãoAcordado = true;

if (dragãoAcordado) {
    console.log("Dragão está dormindo, é seguro passar!");
} else {
    console.log("Cuidado! O dragão está acordado!");
}

//42.Level Up
let nivel = 1001;

if (nivel >= 1000) {
    console.log("Você subiu de nível!");
} else {
    console.log("Continue jogando para subir de nível.");
}

//43.Poção Mágica
let ingredientesRaros = true;
let temCaldeirao = true;

if (ingredientesRaros && temCaldeirao) {
    console.log("Poção mágica criada!");
} else {
    console.log("Ingredientes ou caldeirão faltando.");
}

//44.Código Secreto
let codigo = "sombra-lunar";

if (codigo == "sombra-lunar") { 
    console.log("Código correto!");
} else {
    console.log("Código incorreto.");
}

//45.Duelo de Cavaleiros
let energiaJogador1 = 50;
let energiaInimigo = 30;

if (energiaJogador1 > energiaInimigo) {
    console.log("Você venceu o duelo!");
} else if (energiaJogador1 < energiaInimigo) {
    console.log("Você perdeu o duelo.");
} else {
    console.log("Empate!");
}

//46.Previsão do Tempo
let estaNublado = true;
let estaChovendo = true;

if (estaNublado || estaChovendo) {
    console.log("Leve um guarda-chuva.");
} else {
    console.log("O tempo está bom.");
}

//47.Desafio das Cores
let corEscolhida = "azul"; "vermelho"; "verde";

if (corEscolhida == "vermelho" || corEscolhida == "azul" || corEscolhida == "verde") {
    console.log("Cor válida!");
} else {
    console.log("Cor inválida.");
}

//48.Aprovado ou Reprovado
let media = 7;

if (media >= 7) {
    console.log("Aprovado!");
} else{
    console.log("Reprovado.");
} 

//49.Bússola do Herói
let direção = "norte";

if (direção == "norte") {
    console.log("Você está indo para o norte.");
} else if (direção == "sul") {
    console.log("Você está indo para o sul.");
}
else if (direção == "leste") {
    console.log("Você está indo para o leste.");
} else if (direção == "oeste") {
    console.log("Você está indo para o oeste.");
} else {
    console.log("Direção inválida.");
} 

//50.Salvar Progresso
let salrPressionnado = true;

if (salrPressionnado) {
    console.log("Progresso salvo!");
} else {
    console.log("Erro ao salvar progresso.");
}




//ARRAY

//29. Carrinho de Frutas
const carrinho = ["Maçã", "Banana", "Morango", "Abacaxi"];
console.log("Frutas no carrinho:");
carrinho.forEach(fruta => console.log(fruta));
//30. Mira Certa
const pontuacoes = [150, 340, 275, 400, 310];
const maiorPontuacao = Math.max(...pontuacoes);
console.log("Maior pontuação:", maiorPontuacao);
//31. Inventário do Herói
const inventario = ["Espada", "Escudo", "Poção", "Armadura"];
const primeiroItem = inventario[0];
const ultimoItem = inventario[inventario.length - 1];
console.log("Primeiro item:", primeiroItem);
console.log("Último item:", ultimoItem);
//32. Lista de Compras
const listaCompras = ["Arroz", "Feijão", "Leite", "Pão"];
console.log("Total de itens:", listaCompras.length);
//33. Playlist do Dia
const playlist = ["Música 1", "Música 2", "Música 3"];
for (let i = 0; i < playlist.length; i++)
{
console.log(playlist[i]);
}
//34. Soma Total
const numeros = [10, 20, 30, 40];
let soma = 0;
for (let num of numeros)
{

soma += num;
}
console.log("Soma total:", soma);
//35. Corrida de Robôs
const tempos = [12.7, 13.6, 13.5, 14.0];
let total = 0;
for (let tempo of tempos)
{
total += tempo;
}
let mediaTemp = total / tempos.length;
console.log("Tempo médio dos robôs:", mediaTemp.toFixed(2));
//36. Procurando Itens
const lista = ["chave", "carteira", "celular"];
const itemProcurado = "carteira";
if (lista.includes(itemProcurado))
{
console.log("Encontrado!");
}
else
{
console.log("Não está na lista.");
}
//37. Boletim Escolar
const notas = [7.5, 6.0, 8.0, 9.0];
let somaNotas = 0;
for (let nota of notas)
{
somaNotas += nota;
}
let mediaFinal = somaNotas / notas.length;
console.log("Média final:", mediaFinal.toFixed(2));
console.log(mediaFinal >= 7 ? "Aprovado!" : "Reprovado!");
//38. Catálogo de Filmes
const filmes = ["Matrix", "Inception", "Interestelar"];

for (let filme of filmes)
{
console.log(`Você vai assistir: ${filme}`);
}
//39. Teclado Virtual
const teclasPressionadas = ["A", "B", "C", "D"];
console.log(teclasPressionadas.join("-"));
//40. Contagem Regressiva
for (let i = 5; i >= 1; i--)
{
console.log(i);
}
console.log("Decolar!");
