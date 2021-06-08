class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player1_img);
    player1.scale=0.13;

    player2 = createSprite(800,500);
    player2.addImage("player2", player2_img);
    player2.scale=0.13;
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
                         textSize(25);
                         fill("white");
                         text("Player 1 :" +allPlayers.player1.score,50,50);
                        text("Player 2 :" + allPlayers.player2.score, 50, 100);
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     butterflys = createSprite(random(100, 1000), 0, 100, 100);
                     butterflys.velocityY = 6;
                     var rand = Math.round(random(1,3));
                     switch(rand){
                         case 1: butterflys.addImage("butterfly1",butterfly1_img);
                         break;
                         case 2: butterflys.addImage("butterfly1", butterfly2_img);
                         break;
                         case 3: butterflys.addImage("butterfly1", butterfly3_img);
                         break;
                         
                     }
                     butterflyGroup.add(butterflys);
                     
                 }
                 
                  if (player.index !== null) {
                      for (var i = 0; i < butterflyGroup.length; i++) {
                          if (butterflyGroup.get(i).isTouching(players)) {
                              butterflyGroup.get(i).destroy();
                              player.score =player.score+1;
                              player.update();
                              
                          }
                          
                      }
                  }
                

         
         
        
         

    }

    end(){
       console.log("Game Ended");
    }
}