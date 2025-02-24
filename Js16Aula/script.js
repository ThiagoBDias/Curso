function meuEscopo(){
  const form = document.querySelector('.form');
/*
  form.onsubmit = function (evento){
    evento.preventDe
    alert(1);
  };
*/
function recebeEventoForm (evento){
   evento.preventDefault();
   console.log(`Form não foi ennviado `$);
}
  form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
