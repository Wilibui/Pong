function SetupHome() {
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  
  gameMode = 1;
  difficulty = 2; 
}

function HomeScreen() {
  showHomeButtons();
  tradeMark();  
  f = 0.63333 * w;
}

function tradeMark(){
  textSize(0.2 * w);
  fill(255);
  text("Made By Wilibui", 2.5 * w, 0.25 * h);
}

function showHomeButtons() {
  textSize(0.6 * w);

  if (gameMode == 1) {
    stroke(0, 255, 0);
    strokeWeight(0.1 * w);
  } else {
    noStroke();
  }
  fill(100);
  rect(2.5 * w, 1 * h, 4 * w, 0.9 * h);
  fill(0);
  noStroke();
  text("Location", 2.5 * w, 1.05 * h);

  if (gameMode == 2) {
    stroke(0, 255, 0);
    strokeWeight(0.1 * w);
  } else {
    noStroke();
  }
  fill(100);
  rect(2.5 * w, 2 * h, 4 * w, 0.9 * h);
  fill(0);
  noStroke();
  text("Speed", 2.5 * w, 2.05 * h);

  if (gameMode == 3) {
    stroke(0, 255, 0);
    strokeWeight(0.1 * w);
  } else {
    noStroke();
  }
  fill(100);
  rect(2.5 * w, 3 * h, 4 * w, 0.9 * h);
  fill(0);
  noStroke();
  text("Both", 2.5 * w, 3.05 * h);

  textSize(0.8 * w);

  if (difficulty == 1) {
    stroke(0, 255, 0);
    strokeWeight(0.1 * w);
  } else {
    noStroke();
  }
  fill(100);
  rect(0.5 * w + f, 4 * h, 2*f, 0.9 * h);
  fill(0);
  noStroke();
  text("1", 0.5 * w + f, 4.05 * h);

  if (difficulty == 2) {
    stroke(0, 255, 0);
    strokeWeight(0.1 * w);
  } else {
    noStroke();
  }
  fill(100);
  rect(2.5 * w, 4 * h, 2*f, 0.9 * h);
  fill(0);
  noStroke();
  text("2", 2.5 * w, 4.05 * h);

  if (difficulty == 3) {
    stroke(0, 255, 0);
    strokeWeight(0.1 * w);
  } else {
    noStroke();
  }
  fill(100);
  rect(4.5 * w - f, 4 * h, 2*f, 0.9 * h);
  fill(0);
  noStroke();
  text("3", 4.5 * w - f, 4.05 * h);
 
  fill(0, 255, 0);
  noStroke();
  rect(2.5 * w, 5 * h, 4 * w, 0.9 * h);
  fill(0);
  text("start", 2.5 * w, 5 * h); 
}

function checkHomeButtons() {
  if (mouseX >= 0.5 * w && mouseX <= 4.5 * w) {   
    if (mouseY >= 0.55 * h && mouseY <= 1.45 * h) {
      gameMode = 1;
    } else if (mouseY >= 1.55 * h && mouseY <= 2.45 * h) {
      gameMode = 2;
    } else if (mouseY >= 2.55 * h && mouseY <= 3.45 * h) {
      gameMode = 3;
    } else if (mouseY >= 3.55 * h && mouseY <= 4.45 * h) {
      if (mouseX >= 0.5 * w && mouseX <= 0.5 * w + 2*f) {
        difficulty = 1;
      } else if (mouseX >= 2.5 * w - f && mouseX <= 2.5 * w + f) {
        difficulty = 2;
      } else if (mouseX >= 4.5 * w - 2*f && mouseX <= 4.5 * w) {
        difficulty = 3;
      }
    } else if (mouseY >= 4.55 * h && mouseY <= 5.45 * h) {
      Start();
    }
  }
}
