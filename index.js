const input = require('readline-sync'); // Importação do readline para entrada de dados via teclado
const Calculadora = require('./src/Calculadora'); // Importa a classe Calculadora


// Variáveis globais
let opcao; // utilizada para pegar a opção dentro do loop
let nomeOperacaoEscolhida = ""; // utilizada para guardar o nome da última operação realizada
let resultadoUltimaOperacao = ""; // utilizada para guardar o resultado da última operação realizada


// To Do: Instancie a classe Calculadora



// Executa o programa realizando as operações conforme opção selecionada
do {
    // To DO: Chame a função para exibir o menu


    opcao = input.questionInt("Informe a opcao que deseja: "); // Solicita entrada de dado

    // Sai do loop
    if(opcao === 0)
        break;

    // To DO: Realize verificações com If, else if, else para determinar o que será realizado: Cálculo, Exibição do último resultado ou a impressão da mensagem 'Operação inválida' - Leia a documentação do projeto


    
} while (true);

console.log('Programa finalizado!');



// FUNÇÕES 

// To Do: Implemente a função exibirMenu()




// To DO: Implemente a lógica que falta dentro da função
function realizarCalculo(num1, num2) {
    console.clear(); // Limpa o console

    // Definição de variáveis e Entrada de dados
    let n1 = input.questionFloat("Informe um numero: "); // 1º número: é solicitado em todas as operações
    let n2;

    // 2º número: é solicitado em todas as operações, exceto na opcao 6 (radiciação)
    if(opcao != 6)
        n2 = input.questionFloat("Informe outro numero: "); 
    

    let resultado; // Utilizada para salvar o valor da operação

    // To DO: Implemente o Switch para verificar a opcao informada e realize as ações conforme solicitado na documentação do projeto
    

};