// Player

function Player(name) {
    this.name = name;
    this.pointTotal = 0;
    this.turnPointTotal = 0;
    // isTurn;
    // id
}



var dice = {
    sides: 6,
    roll: function() {
        let randoNumber = Math.floor(Math.random()*this.sides)+1;
        return randoNumber
    }
}





// UI Logic
$(document).ready(function(){
    $("#formOne").submit(function(event){
        event.preventDefault();
        var result = dice.roll();
        console.log(result);
        

        /*
        let button = $(".button");
        button.onclick = function () {

            console.log(result);
        } */
    })
    });