// Classe Calculadora com os métodos implementados
class Calculadora {

    somar(num1, num2) {
        return num1 + num2;
    };

    subtrair(num1, num2) {
        return num1 - num2;
    };

    multiplicar(num1, num2) {
        return num1 * num2;
    };

    dividir(num1, num2) {
        return num1 / num2;
    };

    potencia(num1, num2) {
        return Math.pow(num1, num2);
    };

    raizQuadrada(num1) {
        return Math.sqrt(num1);
    };

};

module.exports = Calculadora; // Exporta a classe para ser utilizada fora deste arquivo