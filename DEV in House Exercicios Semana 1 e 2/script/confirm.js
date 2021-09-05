function confirmar() {
  var mensagem;
  var retorno = confirm("Ir para a página de imagens?");
  if (retorno == true) {
    location.href = '../index/img.html'
  }
  else {
    mensagem = "Você cancelou a operação";
    alert(mensagem);
  }
}



