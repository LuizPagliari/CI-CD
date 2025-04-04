/**
 * Módulo de calculadora simples para testar a pipeline CI/CD
 */
class Calculator {
    /**
     * Soma dois números
     * @param {number} a - Primeiro número
     * @param {number} b - Segundo número
     * @returns {number} Resultado da soma
     */
    add(a, b) {
      return a + b;
    }
  
    /**
     * Subtrai dois números
     * @param {number} a - Primeiro número
     * @param {number} b - Segundo número
     * @returns {number} Resultado da subtração
     */
    subtract(a, b) {
      return a - b;
    }
  
    /**
     * Multiplica dois números
     * @param {number} a - Primeiro número
     * @param {number} b - Segundo número
     * @returns {number} Resultado da multiplicação
     */
    multiply(a, b) {
      return a * b;
    }
  
    /**
     * Divide dois números
     * @param {number} a - Dividendo
     * @param {number} b - Divisor
     * @returns {number} Resultado da divisão
     * @throws {Error} Se o divisor for zero
     */
    divide(a, b) {
      if (b === 0) {
        throw new Error("Não é possível dividir por zero");
      }
      return a / b;
    }
  }
  
  module.exports = Calculator;