  var numberOfFaces = 3;
  var noName = "Tyrion";
  //var tempName = prompt("Please enter your name: ");
  var highScore = 0;
  var score = 0;
  var theLeftSide = document.getElementById("leftSide");
  var theRightSide = document.getElementById("rightSide");
  var theBody = document.getElementsByTagName("body")[0];

      function generateFaces() {
        for (var i = 0; i < numberOfFaces; i++) {
          var image = document.createElement("img");
          image.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
          var top = Math.floor((Math.random() * 400) + 1);
          var left = Math.floor((Math.random() * 400) + 1);
          image.style.top = top + "px";
          image.style.left = left + "px";
          theLeftSide.appendChild(image);
        }
        var leftSideImages = theLeftSide.cloneNode(true);
        leftSideImages.removeChild(leftSideImages.lastChild);
        theRightSide.appendChild(leftSideImages);
        theLeftSide.lastChild.onclick =
          function nextLevel(event) {
            event.stopPropagation();
            while (theLeftSide.firstChild)
              theLeftSide.removeChild(theLeftSide.firstChild);
            while (theRightSide.firstChild)
              theRightSide.removeChild(theRightSide.firstChild);
            numberOfFaces += 2;
            score++;
            generateFaces();
          };
        theBody.onclick =
          function gameOver() {
            alert("Oops! You touched/clicked on the wrong face! Game Over!" + "\nYour score is : " + score);
            theBody.onclick = null;
            theLeftSide.lastChild.onclick = null;
            //checkHighScore();
          };
      }
      function checkHighScore(){
      	if (score>=highScore){
      		noName=tempName;
      		highScore=score;
      	}
      	//document.getElementById("high").innerHTML = highScore;
      	//document.getElementById("highScoreName").innerHTML = noName;
      }
