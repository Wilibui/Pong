function SetupGameOver() {
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
}

function GameOverScreen() {
  showGameOverText();
  showGameOverButtons();
}

function showGameOverText() {
  fill(255);
  textSize(0.7 * w);
  text("GAME OVER", 2.5 * w, 0.5 * h);
  textSize(2 * w);
  text(score, 2.5 * w, 2 * h);
}

function showGameOverButtons() {
  textSize(0.7 * w);
  fill(100);
  rect(2.5 * w, 4 * h, 4 * w, 0.9 * h);
  fill(0);
  text("Replay", 2.5 * w, 4.05 * h);

  fill(100);
  rect(2.5 * w, 5 * h, 4 * w, 0.9 * h);
  fill(0);
  text("Home", 2.5 * w, 5.05 * h);
}

function checkGameOverButtons() {
  if (mouseX >= 0.5 * w && mouseX <= 4.5 * w) {   
    if (mouseY >= 3.55 * h && mouseY <= 4.45 * h) {
      Start();
    } else if (mouseY >= 4.55 * h && mouseY <= 5.45 * h) {
      Home();
    }
  }
}
