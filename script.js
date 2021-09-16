let canvas = document.getElementById("snake"); //chamou canvas html snake
let context = canvas.getContext("2d"); //plano 2d
let box = 32; 32 //pixels cada quadrado
let snake = []; //cobrinha é um array
snake[0] = { //detalhando indices/itens do array
  x: 8 * box,
  y: 8 * box
}
let direction = "right";
let food = {
  //aleatório
  //floor retira partes flutuantes do random, que retorna aleatório até 16, ou o tamanho do canvas
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box
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

function drawFood() {
  context.fillStyle = "red";
  //coordenadas
  //food x food y altura e largura
  context.fillRect(food.x, food.y, box, box)
}
//evento de escuta que executa update
document.addEventListener('keydown', update);
//argumento é o evento de tecla, o keyCode
function update (event){
  if(event.keyCode == 37 && direction != "right") direction = "left";
  if(event.keyCode == 38 && direction != "down") direction = "up";
  if(event.keyCode == 39 && direction != "left") direction = "right";
  if(event.keyCode == 40 && direction != "up") direction = "down";
}
function iniciarJogo () {
  //plano cartesiano, de 0 a 16 eyxos x,y -x, -y
  //quando chega no 16 x, passa para o 0 x
  if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
  if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
  if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
  if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

  criarBG();
  criarCobrinha();
  drawFood();

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
    x : snakeX,
    y : snakeY
  }

  snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100); //intervalo de 100 milisec para iniciar o jogo, renovar e dar continuidade ao jogo se travar 
