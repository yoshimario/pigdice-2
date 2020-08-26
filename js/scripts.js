// Player

function Player(name,id,isTurn) {
    this.name = name,
    this.id = id,
    this.isTurn = isTurn,
    this.pointTotal = 0,
    this.turnPointTotal = 0
}



var dice = {
    sides: 6,
    roll: function() {
        let randoNumber = Math.floor(Math.random()*this.sides)+1;
        return randoNumber
    }
}

Player.prototype.roll = function() {
    const roll = dice.roll();
    if (roll === 1) {
        this.turnPointTotal = 0;
        this.isTurn = false;
    } else {
        this.turnPointTotal += roll;
        if ((pointTotal + turnPointTotal) >= 100) {
            // trigger you win function
        } 
    }
}

Player.prototype.hold = function() {
    this.pointTotal += this.turnPointTotal;
    this.turnPointTotal = 0;
    this.isTurn = false;
}


function p1PointTotal () {
  let pointTotal = (randoNumber + turnPointTotal) ;
  if (pointTotal >= 100) {
    alert("You Win!")
  } else if {dice.roll()
    
  }
}


// UI Logic
$(document).ready(function(){
   // Player Sign Up Logic
   let playerOne;
   let playerTwo;
    $("#playerOneSignUp").submit(function(event) {
        event.preventDefault();
        const name = $("input#playerOneName").val();
        playerOne = new Player(name,1,true);
        console.log(playerOne);
        $("#playerOneSignUpGroup").fadeOut(1000,function() {
            $("#playerOneGameGroup").fadeIn(1000);
        });
    })
    $("#playerTwoSignUp").submit(function(event) {
        event.preventDefault();
        const name = $("input#playerTwoName").val();
        playerTwo = new Player(name,2,false);
        console.log(playerTwo);
        //$("#playerTwoSignUpGroup").fadeOut(1000);
    })
});