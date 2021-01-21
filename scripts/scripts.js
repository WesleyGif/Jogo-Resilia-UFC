var text_1 = document.getElementById("text1")
var text_2 = document.getElementById("text2")
var botao1 = document.getElementById("botao1")
var botao2 = document.getElementById("botao2")

function startGame() {
    if(iniciarOgame == false){
        clicarNao();
    }else{
        clicarSim();
    }
}

function clicarSim() {
    text_1.innerHTML = `<img src=./imagens/card1.jpeg>`
    text_2.innerHTML = `Hoje teremos uma luta mais que especial, de um lado <br> Hall vs Silva <br> E apareceu um apostador no site, perguntando se você quer apostar?`
    botao1.onclick = aceitoApostar
    botao2.onclick = nao500
}

function clicarNao() {
    text_1.innerHTML = `<img src=./imagens/card1.jpeg>`
    text_2.innerHTML = `Sério que você vai perder essa Luta Historica?`
    botao1.onclick = gameOver
    botao2.onclick = clicarSim
}

function aceitoApostar() {
    text_1.innerHTML = '<img src=./imagens/dinheiro.jpg>'
    text_2.innerHTML = 'Então você deseja apostar $500 Dolares?<br> Nossas apostas só aceita esse valor.'
    botao1.onclick = aceito500
    botao2.onclick = nao500
}

function nao500(){
    text_1.innerHTML = '<img src=./imagens/dinheiro.jpg>'
    text_2.innerHTML = 'Então você vai perder a sua chance de apostar e ganhar muito dinheiro?'
    botao1.onclick = naoQuero
    botao2.onclick = aceitoApostar
}

function aceito500(){
    text_1.innerHTML = '<img src=./imagens/silva.jpeg>'
    text_2.innerHTML = 'Você deseja que sua aposta vá para o Anderson Silva?'
    botao1.onclick = noAnderson
    botao2.onclick = noHall
}

function noAnderson(){
    text_1.innerHTML = '<img src=./imagens/silva.jpeg>'
    text_2.innerHTML = 'Parabéns pela escolha! Boa sorte! Clique em qualquer botão para proseguir!'
    botao1.onclick = card
    botao2.onclick = card
}

function card(){
    text_1.innerHTML = '<img src=./imagens/card1.jpeg>'
    text_2.innerHTML = 'Horas se passaram e chegou o tão sonhado momento da Luta entre <br> Anderson Silva vs Hall'
    botao1.onclick = card_2
    botao2.onclick = card_2
}

function card_2(){
    text_1.innerHTML = '<img src=./imagens/inicioluta.jpg>'
    text_2.innerHTML = 'A Luta começa com anderson perdendo o primeiro round,<br> Mas logo no segundo round ele acerta um gancho de direita e da o chute giro mortal dele, acertando o chute no pé da orelha do Hall.<br> CLIQUE em qualquer botão para saber quem venceu a luta!'
    botao1.onclick = card_3
    botao2.onclick = card_3
}
function card_3(){
    text_1.innerHTML = '<img src=./imagens/silva.jpeg>'
    text_2.innerHTML = 'Hall cai no chão nocauteado..., Inacreditavel Anderson Silva ganhou o Cinturão!! <br> Em seguida aparece um POP falando sobre a aposta! <br> Parabéns você acaba de ganhar $1.000 Dolares! aperte em qualquer botão para receber o valor em sua conta! '
    botao1.onclick = fimGG
    botao2.onclick = fimGG
}
function fimGG(){
alert ("Foi transferido o valor de $1.000 Dolares para sua conta cadastrada no Site!<br>Espero poder telo novamente aqui para mais transmissões!!!<br><strong>!!FIM!!</strong>")

}
function noHall(){
    text_1.innerHTML = '<img src=./imagens/hall.jpg>'
    text_2.innerHTML = 'Então quer apostar no nosso Lutador Hall?'
    botao1.onclick = queroSim
    botao2.onclick = naoQuero
}
function queroSim(){
    text_1.innerHTML = '<img src=./imagens/hall.jpg>'
    text_2.innerHTML = 'Parabéns! Sua aposta foi computada pelo sistema! Tenha uma boa Sorte!!! aperte em qualquer botão para continuar!'
    botao1.onclick = hall_1
    botao2.onclick = hall_1
}

function hall_1(){
    text_1.innerHTML = '<img src=./imagens/card1.jpeg>'
    text_2.innerHTML = 'O Card Principal chegou!<br> Hall começa ganhando o primeiro round, mas logo que começa o segundo anderson silva o acerta com um suco no olho, tendo que parar a luta para ser atendido pelo medico... deseja continuar para saber?'
    botao1.onclick = hallMedico
    botao2.onclick = hallMedico
}

function hallMedico(){
    text_1.innerHTML = '<img src=./imagens/medico.jpg>'
    text_2.innerHTML = 'O medico entrou na arena para verificar o olho de Hall, e adivinha? O olho dele tele um deslocamento de retina e não podera continuar <br. Então o juiz finaliza a luta, dando a vitoria para o Anderson Silva...<br> Logo em seguida aparece um POP falando sobre sua aposta... <br> Você deseja abrir?'
    botao1.onclick = abrirPop
    botao2.onclick = hackerInvasao
}
function abrirPop(){
    text_1.innerHTML = '<img src=./imagens/vitoria.jpeg>'
    text_2.innerHTML = 'Você perdeu a aposta, Transfira o valor de $500 Dolares para conta Agencia:8945 / Conta:541544-9 / CPF: 182.421.422-00 <br> Você vai pagar?'
    botao1.onclick = ireiPagar
    botao2.onclick = hackerInvasao
}

function ireiPagar(){
    text_1.innerHTML = '<img src=./imagens/card2.jpg>'
    text_2.innerHTML = 'Obrigado por pagar o que deve, Volte sempre em nosso site e aposte mais com a gente!! <br> Deseja continuar no Site?'
    botao1.onclick = startGame
    botao2.onclick = sairSite
}
function sairSite(){
    text_1.innerHTML = '<img src=./imagens/logocapa.jpg>'
    text_2.innerHTML = 'Obrigado por assistir a Luta conosco!<br> <strong>Volte Sempre!</strong>'
    botao1.onclick = startGame
    botao2.onclick = startGame
}
function hackerInvasao(){
    alert("Você acaba de ser hackeado... Você perdeu a aposta e me deve $500 Dolares")
    text_1.innerHTML = '<img src=./imagens/anonimo.jpg>'
    text_2.innerHTML = 'Me pague o valor $500 Dolares ou então eu hackeio sua conta bancaria que está cadastrada no site.<br> Pagar valor?'
    botao1.onclick = ireiPagar
    botao2.onclick = naoPagou
}
function naoPagou(){
    alert("<strong>VOCÊ FOI HACKEADO E PERDEU TODO DINHEIRO DE SUA CONTA BANCARIA.</strong>")
}

function naoQuero(){
    text_1.innerHTML = '<img src=./imagens/negocio.jpg>'
    text_2.innerHTML = 'Tudo bem, Tenha uma otima luta!<br> Deseja Prosseguir?'
    botao1.onclick = andersonOn
    botao2.onclick = fim2
}
function fim2(){
    alert("Tudo bem, obrigado por ter vindo até aqui!")
}

function andersonOn(){
    text_1.innerHTML = '<img src=./imagens/inicioluta.jpg>'
    text_2.innerHTML = 'Anderson Silva começa perdendo no primeiro Round, mas acaba ganhando no segundo Round, depois de chutar o rosto do Hall...<br> Escolha um dos botões para continuar'
    botao1.onclick = fim
    botao1.onclick = fim
}

function fim(){
    text_1.innerHTML = '<img src=./imagens/logocapa.jpg>'
    text_2.innerHTML = 'Obrigado por assistir nossa primeira transmição ao vivo e 100% ONLINE <br> Deseja continuar de volta para o inicio?'
    botao1.onclick = startGame
    botao1.onclick = alerta
}
function alerta(){
    alert("Obrigado por nos Assistir! ")
}

function gameOver() {
    text_1.innerHTML = '<img src=./imagens/card2.jpg>'
    text_2.innerHTML = 'Você perdeu uma das melhores noites do UFC ONLINE <br> FIM'
    botao1.onclick = startGame
}