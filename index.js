var randomnumber1 = Math.floor(Math.random()*6+1)
var randomnumber2 = Math.floor(Math.random()*6+1)

var randomimage1 = "/dice"+randomnumber1+".png";
var randomimagesource1 = "images"+randomimage1;
document.querySelector("img.img1").setAttribute("src",randomimagesource1);

var randomimage2 = "/dice"+randomnumber2+".png";
var randomimagesource2 = "images"+randomimage2;
document.querySelector("img.img2").setAttribute("src",randomimagesource2);

if(randomnumber1 > randomnumber2){
  document.querySelector("h1").textContent = "🚩Player 1 Wins!";
}
else if(randomnumber1 < randomnumber2){
  document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}else{
  document.querySelector("h1").textContent = "Draw!";
}
