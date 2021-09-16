let canvas = document.getElementById("snake"); //chamou canvas html snake
let context = canvas.getContext("2d"); //plano 2d
let box = 32; 32 //pixels cada quadrado
let snake = []; //cobrinha é um array
snake[0] = { //detalhando indices/itens do array
  x: 8 * box,
  y: 8 * box
}
let direction = "right";

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

function iniciarJogo () {
  criarBG();
  criarCobrinha();

  //definir ponto de partida
  //a posição de snake na posição X,Y
  let snakeX = snake[0].x;
  let snakeY = snake[0].y; 

  //se direction for igual a right, acrescenta um box na snakeX
  if (direction == "right") snakeX += box;
  if (direction == "left")  snakeX -= box;
  if (direction == "up") snakeY -= box;
  if (direction == "down") snakeY += box; 

  //função que irá retirar o ultimo elemento do arrya
  snake.pop();

  let newHead = {
    x = snakeX,
    y = snakeY
  }

  snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100); //intervalo de 100 milisec para iniciar o jogo, renovar e dar continuidade ao jogo se travar 