
$("document").ready(function() {
  var frameNo = 1;
  var ball = 1;
  var firstGo;
  var secondGo;
  var frameTotal;
  var game = {frame:[], total: 0};
  
  var randomAngle = function() {
    var angle = Math.floor(Math.random() * 21) - 10;
    $("#throwAngle").val(angle);
  };
  
  randomAngle()

  $("#bowl").click(function() {
    var slider = 10 - Math.abs($("#throwAngle").val());
    var cellOne = $("#frame" + frameNo + " #ball1");
    var cellTwo = $("#frame" + frameNo + " #ball2");
    var cellFrameTot = $("#frame" + frameNo + " #ball3");
    if(frameNo < 11) {
      if(ball === 1) {
        firstGo = slider;
        cellOne.text(firstGo);
        if(firstGo === 10) {
          second = 0;
          game.frame[frameNo] = [{'frameTotal': firstGo}, firstGo, ];
          // if(frameNo 
          game.total += firstGo;
          console.log(game);
          frameNo++;
          randomAngle();
        } else {
          randomAngle();
          ball++;
        }
      } else if(ball === 2 ) {
        secondGo = slider - firstGo < 1 ? 0 : slider - firstGo;
        frameTotal = firstGo + secondGo;
        cellTwo.text(secondGo);
        cellFrameTot.text(frameTotal);
        game.frame[frameNo] = [{'frameTotal':frameTotal}, firstGo, secondGo];
        game.total += frameTotal;
        console.log(game);
        ball = 1;
        frameNo++;
        randomAngle();
      }
    }
  });
});