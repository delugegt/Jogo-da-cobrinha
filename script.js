let canvas = document.getElementById("snake"); //chamou canvas html snake
let context = canvas.getContext("2d"); //plano 2d
let box = 32; 32 //pixels cada quadrado
let snake = []; //cobrinha é um array
snake[0] = { //detalhando indices/itens do array
  x: 8 * box,
  y: 8 * box
}
function criarBG() {
  context.fillStyle = "lightgreen"; //aplica cor ao  context
  context.fillRect(0, 0, 16 * box, 16 * box); //tamanho de 16 px
}

function criarCobrinha() {
  for (i = 0; i < snake.length; i++){
    context.fillStyle = "green";
    context.fillRect(snake[i].x, snake[i].y, box, box)
  }
}

criarBG();
criarCobrinha();