function Home(){ 
  home = true;
  running = false;
  gameOver = false;
    
  SetupHome();
}

function Start() { 
  home = false;
  running = true;
  gameOver = false;
  
  SetupMain();
}

function GameOver(){
  home = false;
  running = false;
  gameOver = true;
  
  SetupGameOver();
}
