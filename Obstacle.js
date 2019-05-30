class Obstacle{
  constructor(h,w){
    this.height = h;
    this.width = w;
    this.x = 800;
    this.y = 400;
    this.velocidad = 10;
    this.i = 0;
  }
  show(){
    ctx.fillRect(this.x,this.y,this.width,this.height);
  }
  update(scoreboard){
    if((scoreboard.score % 500) == 0){
      this.i = 1;
    }
    this.x -= this.velocidad;
    if(this.out()){
      this.width = (Math.random()*100)+10;
      this.x = 800;
      if(this.i==1){
        this.velocidad += 5;
        this.i = 0;
      }
    }

  }
  out(){
    if((this.x + this.width) < 0){
      return true;
    }else{
      return false;
    }
  }
  reset(){
    this.velocidad = 10;
    this.width = (Math.random()*100)+10;
    this.x = 800;
  }
}
