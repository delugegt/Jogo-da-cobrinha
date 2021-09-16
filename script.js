let canvas = document.getElementById("snake"); //chamou canvas html snake
let context = canvas.getContext("2d"); //plano 2d
let box = 32; 32 //pixels cada quadrado

function criarBG() {
  context.fillStyle = "lightgreen"; //aplica cor ao  context
  context.fillRect(0, 0, 16 * box, 16 * box); //tamanho de 16 px
}

criarBG();