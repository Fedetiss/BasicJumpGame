class Score{
  constructor(){
    this.score = 0;
  }

  scoreUp(){
    this.score++;
  }

  show(){
    ctx.font = "20px Georgia";
    ctx.fillText("Score : " + this.score,100,100);
  }
}
