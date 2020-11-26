//x of ball
let x;
//y of ball
let y;
//speed of x ball
let d_x;
//speed of y ball
let d_y;
//direction of ball
let a;
//x of bar
let bar;
//previous x of bar
let p_bar;
//speed of bar
let d_bar;
//width of bar
let w_bar;
//x of ball in relations to bar
let x_on_bar;
//constant width/5
let w;
//constant height/6
let h;
//random constant
let f;
//number of lives
let lives;
//score
let score;
//game mode
let gameMode;
// difficulty ~ d_y
let difficulty;
//want to show vectors of the ball?
let vectors;
//is game running?
let running;
//is the game over?
let gameOver;
//is the home screen open?
let home;

function setup() {
  //createCanvas(5 * windowHeight / 6, windowHeight);  
  w = 0;
  h = 0;  

  Home();
}

function draw() { 
  if(windowWidth / 80 > windowHeight / 95){
    createCanvas(5 * windowHeight / 6, windowHeight);
  }else{
    createCanvas(windowWidth,6*windowWidth/5);
  }
  
  w = width / 5;
  h = height / 6;
  background(0);
  
  if (running) {
    Main();
  }
  if (home) {
    HomeScreen();   
  }
  if (gameOver) {
    GameOverScreen();
  }
   
  
}

function mousePressed() {
  if (home) {
    checkHomeButtons();
  }
  if (gameOver) {
    checkGameOverButtons();
  }
}
