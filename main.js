// Função para emitir alerta ao clicar nos botões de "Saiba Mais"
function knowMore() {
  alert('Você será redirecionado para nosso Blog!');
}

// Função para emitir alerta ao clicar no botão Submit (Enviar) do formulário de contato.
function contactForm() {
  alert('Seu formulário de contato foi enviado com sucesso!');
}

// Função para aguardar o carregamento completo do DOM para então executar o evento.
document.addEventListener('DOMContentLoaded', function() {

  console.log('DOM carregado');

  // Acessando o botão "Know More" e adicionado o evento ao clicar.
  document.querySelector('.btn-knowMore').addEventListener('click', function(){
    knowMore();
  });

  // Acessando o botão "Submit" e adicionado o evento ao clicar.
  document.querySelector('.btn-contactForm').addEventListener('click', function(){
    contactForm();
     });
  });

                                              
