const readline = require('readline-sync');

const num = parseInt(readline.question('Digite um número inteiro: '));

let a = 0;
let b = 1;
let c;
let pertence = false;

for (let i = 0; i <= num; i++) {
  if (i <= 1) {
    c = i;
  } else {
    c = a + b;
    a = b;
    b = c;
  }

  if (c === num) {
    pertence = true;
    break;
  } else if (c > num) {
    break;
  }
}

if (pertence) {
  console.log(`${num} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${num} não pertence à sequência de Fibonacci.`);
}