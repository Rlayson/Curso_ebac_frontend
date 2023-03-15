const formulario = document.getElementById("meu-formulario");
const campoA = document.getElementById("campo-a");
const campoB = document.getElementById("campo-b");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); 

  if (parseInt(campoB.value) > parseInt(campoA.value)) {

    mensagem.innerHTML = "Formulário válido!";
    mensagem.style.color = "green";
  } else 
  {    
    mensagem.innerHTML = "Formulário inválido!";
    mensagem.style.color = "red";
  }
});
