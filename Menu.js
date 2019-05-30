class Menu{
  constructor(s){
    this.valor = 1;
    this.score = s;
  }
  show(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canv.width,canv.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(0,400,canv.width,5);
    ctx.font = "50px Georgia";
    ctx.fillText("Press up to start",220,300);
    ctx.fillText("Score : " + this.score,310,100);
  }
}
