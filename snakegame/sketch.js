let rez = 10;
let snake;
let food;
let points = 0;

function setup() {
  createCanvas(400, 400);
  
  snake = new Snake();
  food = new Food(rez);
  
}

function draw() {
  document.getElementById("points").innerHTML = `Points: ${points}`;
  fill(255);
  noStroke();
  frameRate(20);
  textSize(2);
 
  scale(rez);
  background(220);
  
  //desenha a cobra
  snake.update();
  if(snake.getXpos() == food.getXpos() && snake.getYpos() == food.getYpos()){
     food.update(); 
     snake.grow();
     points += 100;
  }
  snake.show();
  if(snake.dieCheck()){
     noLoop();
  }
    
  //desenha a comida
  fill(100);
  food.show();
  
  
}

function keyPressed() {
   if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if(keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if(keyCode === UP_ARROW) {
    snake.setDir(0, -1);   
  }
}