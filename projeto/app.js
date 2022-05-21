const form = document.querySelector('form')

function validarNome(nome) {
  return nome.trim().length > 0;
}

function validarEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}

form.onsubmit = function(e) {
  e.preventDefault()

  const nome = document.querySelector('#nome').value;
  if (!validarNome(nome)) {
    alert('O nome fornecido não é válido')
    return;
  }

  const email = document.querySelector('#email').value;
  if (!validarEmail(email)) {
    alert('O email fornecido não é válido')
    return;
  }

  alert(`A inscrição de ${nome} foi realizada com sucesso. Um email será enviado para ${email} com a confirmação`)
}