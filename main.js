const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const respostas = [
  'certeza!',
  'Não tenho tanta certeza.',
  'É decididamente sim.',
  'Não conte com isso.',
  'Sem duvidas!',
  'Pergunte novamente mais tarde',
  'Sim, definitivamente!',
  'Minha resposta é não',
  'Você pode contar com isso',
  'Melhor não te dizer agora',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possivel prever agora.',
  'Perspectiva boa.',
  'As perpectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]
// clicar em fazer pergunta
function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Digite sua pergunta')
    return
  }

  buttonPerguntar.setAttribute('disabled', true)

  const pergunta = '<div>' + inputPergunta.value + '</div>'

  // gerar numero aleatorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  console.log(respostas[numeroAleatorio])

  elementoResposta.style.opacity = 1
  // sumir a resposta depois de 3 segundos
  setTimeout(function () {
    elementoResposta.style.opacity = 0
    buttonPerguntar.removeAttribute('disabled')
  }, 3000)
}
