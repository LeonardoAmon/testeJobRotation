let texto = "Hello, world!"; 
let resultado = ""; 

for (let i = texto.length - 1; i >= 0; i--) {
  resultado += texto[i]; 
}

console.log(resultado);