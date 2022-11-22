  var arrayofImages = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
  var randNumber1 = Math.floor(Math.random() * 6);
  document.querySelectorAll("img")[0].setAttribute("src", arrayofImages[randNumber1]);

  var randNumber2 = Math.floor(Math.random() * 6);
  document.querySelectorAll("img")[1].setAttribute("src", arrayofImages[randNumber2]);

  if(randNumber1 > randNumber2){
    document.querySelector("h1").textContent = "🚩 Player1 Wins";
  }
  else if(randNumber1 < randNumber2){
    document.querySelector("h1").textContent = "Player2 Wins 🚩";
  }else{
    document.querySelector("h1").textContent = "D R A W 🙁";
  }
