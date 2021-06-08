var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var butterflys;
var butterflyGroup;
var butterfly1_img, butterfly2_img, butterfly3_img;
var player_img;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("images/field1.jpg");
  player1_img = loadImage("images/girl1net.png");
  player2_img = loadImage("images/girl2net.png");
  butterfly1_img = loadImage("images/butterfly1.png");
  butterfly2_img = loadImage("images/butterfly2.png");
  butterfly3_img = loadImage("images/butterfly3.png");
  butterflyGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}