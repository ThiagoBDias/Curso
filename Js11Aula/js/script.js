const numero = Number(prompt( 'Escreva um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML =`<p>seu numero - 2 é ${numero-2}.<\p> `;
 