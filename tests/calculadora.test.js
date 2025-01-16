const calculadora = require('../models/calculadora');

test('Espera que 2 + 2 seja 4', () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test('Espera que 2 + 3 seja 5', () => {
  const resultado = calculadora.somar(2, 3);
  expect(resultado).toBe(5);
});

test('Esepra que banana + 2 = Erro', () => {
  const resultado = calculadora.somar('banana', 2);
  expect(resultado).toBe('Erro');
});
