window.onload = function(){
  canv = document.getElementById("gc");
  ctx = canv.getContext("2d");
  let modelo = new Player(-40,20);
  let scoreboard = new Score();
  let menu = new Menu(scoreboard.score);
  let obstaculo = new Obstacle(-40,(Math.random()*100)+10);
  document.addEventListener("keydown",function(evt){
    keyPush(evt,modelo,menu,scoreboard)
  });
  intervalo = setInterval(function(){
    game(modelo,scoreboard,obstaculo,menu)
  },1000/30);
}

function game(jugador,scoreboard,obstaculo,menu){
  if(menu.valor != 1){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canv.width,canv.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(0,400,canv.width,5);
    jugador.update();
    jugador.show();
    scoreboard.scoreUp();
    scoreboard.show();
    obstaculo.update(scoreboard);
    obstaculo.show();
    colision(jugador,obstaculo,scoreboard,menu);
  }else{
    menu.show();
  }


}
function colision(j,o,s,m){
  if(o.x <= (j.x + j.fat) && (o.x + o.width) >= j.x){
    if((j.y - j.tall) > o.y){
      o.reset();
      m.valor = 1;
      m.score = s.score;
    }
  }
}
function keyPush(evt,m,menu,s){
  if(evt.keyCode == 38){
    if(menu.valor == 1){
      s.score = 0;
      menu.valor = 0;

    }else{
      m.plusJump();
    }
  }
}
