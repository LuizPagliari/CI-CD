const Calculator = require('../src/calculator');
const assert = require('assert');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add()', () => {
    it('deve somar dois números positivos corretamente', () => {
      assert.strictEqual(calculator.add(2, 3), 5);
    });

    it('deve manipular números negativos', () => {
      assert.strictEqual(calculator.add(2, -8), -6);
    });
  });

  describe('subtract()', () => {
    it('deve subtrair dois números corretamente', () => {
      assert.strictEqual(calculator.subtract(10, 4), 6);
    });

    it('deve retornar número negativo quando o segundo número for maior', () => {
      assert.strictEqual(calculator.subtract(5, 10), -5);
    });
  });

  describe('multiply()', () => {
    it('deve multiplicar dois números corretamente', () => {
      assert.strictEqual(calculator.multiply(3, 4), 12);
    });

    it('deve retornar zero quando multiplicar por zero', () => {
      assert.strictEqual(calculator.multiply(5, 0), 0);
    });
  });

  describe('divide()', () => {
    it('deve dividir dois números corretamente', () => {
      assert.strictEqual(calculator.divide(10, 2), 5);
    });

    it('deve lançar erro ao dividir por zero', () => {
      assert.throws(() => {
        calculator.divide(5, 0);
      }, /Não é possível dividir por zero/);
    });
  });
});