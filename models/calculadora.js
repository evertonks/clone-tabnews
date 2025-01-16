function somar(a, b) {
  console.log(typeof a);

  if (typeof a != 'number' || typeof b != 'number') {
    return 'Erro';
  }

  return a + b;
}

exports.somar = somar;
