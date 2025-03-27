function rollD()
{
   var player1 = Math.ceil(Math.random() *6);
    //generates a random number between 1 and 6
    var player2 = Math.ceil(Math.random() *6);
    

  var dice1image = "images for class/dice1.jpeg"; 
  var dice2image = "images for class/dice2.jpeg";
  var dice3image = "images for class/dice3.jpeg";
  var dice4image = "image sfor class/dice4.jpeg";
  var dice5image = "images for class/dice5.jpeg";
  var dice6image = "images for class/dice6.jpeg";
//The if statement is for when the player does roll this number that will be true
 if (player1 == 1)
  
{
document.getElementById("player1img").src = dice1image;     
}
//Else if statement is for when there is a chance this coule be true as well
else if (player1 == 2)
  
{
document.getElementById("player1img").src = dice2image;     
}
{
document.getElementById("player1img").src = dice3image;     
}
{
document.getElementById("player1img").src = dice4image;     
}
{
document.getElementById("player1img").src = dice5image;     
}
{
document.getElementById("player1img").src = dice6image;     
}
if(player2 == 4)
{
  document.getElementById("player2img").src = dice5image;
}
else if (player2== 6)

{ 
document.getElementById("player1img").src = dice1image;     
}
{
document.getElementById("player1img").src = dice2image;     
}
{
document.getElementById("player1img").src = dice3image;     
}
{
document.getElementById("player1img").src = dice4image;     
}
{
document.getElementById("player1img").src = dice6image;     
}
}
