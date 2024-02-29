const input = require('readline-sync'); // Importação do readline para entrada de dados via teclado
const Calculadora = require('./src/Calculadora'); // Importa a classe Calculadora


// Variáveis globais
let opcao; // utilizada para pegar a opção dentro do loop
let nomeOperacaoEscolhida = ""; // utilizada para guardar o nome da última operação realizada
let resultadoUltimaOperacao = ""; // utilizada para guardar o resultado da última operação realizada


// Instância da classe Calculadora - Criação do objeto tornando-o utilizá-vel
const calc = new Calculadora();



// Executa o programa realizando as operações conforme opção selecionada
do {
    exibirMenu(); // Exibe o menu

    opcao = input.questionInt("Informe a opcao que deseja: "); // Solicita entrada de dado

    // Sai do loop
    if (opcao === 0)
        break;

    // Verifica se foi informado uma opção válida
    if (opcao >= 1 && opcao <= 6) {
        console.log("Resultado: ", realizarCalculo()); // Realiza o cálculo e imprime-o
    } else if (opcao === 7) {
        console.log('=== Última operação realizada ===');
        // Imprime o nome e valor da última operação realizada
        console.log(`Operação: ${nomeOperacaoEscolhida} -> resultado: ${resultadoUltimaOperacao}`);
    } else {
        console.log("Operação inválida!");
    }

} while (true);

console.log('Programa finalizado!');


// FUNÇÕES 
function exibirMenu() {
    console.log("=================================");
    console.log("           CALCULADORA           ");
    console.log("=================================");
    console.log("-------------- Menu -------------");
    console.log("1 - Somar");
    console.log("2 - Subtrair");
    console.log("3 - Multiplicar");
    console.log("4 - Dividir");
    console.log("5 - Potenciação");
    console.log("6 - Radiciação");
    console.log("7 - Resultado da última operação");
    console.log("0 - Sair");
    console.log("---------------------------------");
};


// Implementação da função realizarCalculo(num1, num2)
function realizarCalculo(num1, num2) {
    console.clear(); console.clear(); // Limpa o console

    // Definição de variáveis e Entrada de dados
    let n1 = input.questionFloat("Informe um numero: "); // 1º número: é solicitado em todas as operações
    let n2;

    // 2º número: é solicitado em todas as operações, exceto na opcao 6 (radiciação)
    if (opcao != 6)
        n2 = input.questionFloat("Informe outro numero: ");


    let resultado; // Utilizada para salvar o valor da operação

    // Verifica a opção escolhida e realiza ações com base nela
    switch (opcao) {
        case 1:
            nomeOperacaoEscolhida = 'soma'; // Salva o nome da operação realizada
            resultado = calc.somar(n1, n2); // Atribui o resultado da operação à variável
            resultadoUltimaOperacao = resultado; // Salva o valor do resultado na variável 'resultadoUltimaOperacao'
            return resultado; // Retorna o valor resultado

        case 2:
            nomeOperacaoEscolhida = 'subtração';
            resultado = calc.subtrair(n1, n2);
            resultadoUltimaOperacao = resultado;
            return resultado;

        case 3:
            nomeOperacaoEscolhida = 'multiplicação';
            resultado = calc.multiplicar(n1, n2);
            resultadoUltimaOperacao = resultado;
            return resultado;

        case 4:
            nomeOperacaoEscolhida = 'divisão';
            resultado = calc.dividir(n1, n2);
            resultadoUltimaOperacao = resultado;
            return resultado;

        case 5:
            nomeOperacaoEscolhida = 'potenciação';
            resultado = calc.potencia(n1, n2);
            resultadoUltimaOperacao = resultado;
            return resultado;

        case 6:
            nomeOperacaoEscolhida = 'raiz quadrada';
            resultado = calc.raizQuadrada(n1);
            resultadoUltimaOperacao = resultado;
            return resultado;
    };

};