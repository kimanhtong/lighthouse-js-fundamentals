var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));
function hasEnoughPlayers(arrt){
    if (arrt.length >= 7) {
        return true;
    } else {
        return false;
    }
}