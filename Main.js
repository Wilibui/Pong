function SetupMain() { 
  w_bar = 1 * w;

  a = PI/1.9 ; 
  x = 2.5 * w;
  y = 1 * h; 
  d_y = 4 * difficulty;

  lives = 5;
  score = 0;
}

function Main() {
  updateBal(); 
  updateBar();
  checkBar();
  checkBorders();

  if (vectors) {
    showVectors(10);
  }  
  show();
  
  checkLives();
}

function show() {
  stroke(255, 0, 0);
  strokeWeight(0.1 * w);
  point(x, y);
  noStroke();
  fill(255);
  rectMode(CENTER);
  rect(bar, 4.5 * h, w_bar, 0.1 * w);

  fill(255);
  textSize(30);
  textAlign(RIGHT, TOP);
  text("lives : " + lives, width - 0.1 * w, 0 + 0.1 * h);  
  textAlign(LEFT, TOP);
  text("Score : " + score, 0.1 * w, 0 + 0.1 * h);
}

function showVectors(s) {
  stroke(100);
  strokeWeight(1);
  line(x, y, x + (d_x * s), y);
  line(x, y, x, y + (d_y * s));
  stroke(200);
  line(x, y, x + (d_x * s), y + (d_y * s));
}

function checkBar() {
  if (x <= (bar + w_bar/2) && x >= (bar - w_bar/2)) {
    if (y >= 4.40 * h && y <= 4.60 * h) {
      d_y = d_y * -1;
      score++;
      if (gameMode == 1) {
        a = map(x_on_bar, -w_bar/2, w_bar/2, PI/4, 3*PI/4);
      }
      if (gameMode == 2) {
        d_x += d_bar;
        a = atan(d_y / d_x);
      }
      if (gameMode == 3) {
        a = map(x_on_bar, -w_bar/2, w_bar/2, PI/4, 3*PI/4);
        d_x = (d_y / tan(a));
        d_x += d_bar;
        a = atan(d_y / d_x);
      }
    }
  }
}

function checkBorders() {
  if (x >= width) {
    a = PI - a;
  }
  if (x <= 0) {
    a = PI - a ;
  }
  if (y >= height) {
    lives--;
    x = 2.5 * w;
    y = 1 * h;
    a = PI / 2; 
  }
  if (y <= 0) {
    d_y = d_y * -1;
    a = PI - a;
  }
}

function checkLives() {
  if (lives == 0) {
    GameOver();
  }
}

function updateBal() { 
  d_x = (d_y / tan(a));
  x += d_x;
  y += d_y;
}

function updateBar() {
  bar = mouseX;   
  d_bar = bar - p_bar;
  p_bar = bar;
  x_on_bar = x - bar;
}
