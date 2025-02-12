/* podemos contruir vario objeto 
fazer um div complenta com apenas uma linha 
div#card>img+p+button
*/

/*
  Vamos criar um objeto
utilizando as chaves 
 const pessoa {};
*/
/* 
const pessoal = {
  nome:'luiz',
  sobrenome:'mix',
  idades: 25
};
*/

function criarPessoa (nome, sobrenome, idade ){
  return{ nome, sobrenome,idade };
}
const pessoal = criarPessoa('luz','maria',52);

console.log(pessoal);