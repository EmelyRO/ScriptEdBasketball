function  promptForPlayerName(player) {
    
    var greeting= player + " What is your name?";
    var Name= prompt (greeting);
    var lengthofN=Name.length;
    if (lengthofN > 15) {
        alert("Wow, That's a long name!!");
    }
    
    return Name;
}

function tryTwoPointShot (){
    var x= Math.Random();
    var y= Math.Random();
    if (x>0.2&& y>0.2) {
        return true;
    } else {
        return false;
    }
}

function tryThreePointShot() {
    var z=Math.Random();
    var x=Math.Random();
    if (z<=0.2 && x>=0.8) {
        return true;
    } else {
        return false;
    }
}

function getShotString( name,points,madeShot){
    // Miguel attempted a 2 point shot it was good/no good
    
    var shotString= name + " attempted a " + points + " point shot. It was ";
    if (madeShot) {
        return shotString + "Good";
    } else {
     return shotString + "No Good";
    }
}

function updateScore(shotMade,currentPoints,shotPoints){
    if (shotMade) {
        return currentPoints + shotPoints;
   } else {
   return currentPoints;
   }
}
 
function isEndOfGame (playerScore, playerName) {
    if (playerScore >= 20) {
        alert ("The game is over, WON!!");
        return true; 
    } else {
        return false; 
    }
   
}