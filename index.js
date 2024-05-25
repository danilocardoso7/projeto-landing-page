var Leonardo = window.document.getElementById("leonardo")
var Samanta = window.document.getElementById("samanta")
var Bruna = window.document.getElementById("bruna")
var setRight = window.document.getElementById("set-right")
var setLeft = window.document.getElementById("set-left")

function RolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setRight.style = "display:none"
    setLeft.style = "display:flex; margin-top: 60px"
}
function RolarParaEsquerda() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    setRight.style = "display:flex"
    setLeft.style = "display:none"
}