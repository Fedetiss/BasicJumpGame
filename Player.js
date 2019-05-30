class Player{
  constructor(t,f){
    this.tall = t;
    this.fat = f;
    this.y = 400;
    this.x = 10;
    this.gravedad = 5;
    this.aceleracion = -45;
    this.velocidad = 0;
  }

  update(){
    if(this.y < 400){
      this.velocidad += this.gravedad;
      if((this.y + this.velocidad) > 400){
        this.y = 400;
      }else{
        this.y += this.velocidad;
      }
    }
    if(this.y == 400){
      this.velocidad = 0;
    }
  }

  show(){
      ctx.fillStyle = 'white';
      ctx.fillRect(this.x,this.y,this.fat,this.tall);
  }

  plusJump(){
    if(this.y == 400){
      this.velocidad += this.aceleracion;
      this.y--;
    }
  }
}
