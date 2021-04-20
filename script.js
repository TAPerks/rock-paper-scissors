let compgo = Math.floor(Math.random() * 3) + 1;

function computerPlay () {
    if (compgo == 1) {
        return "Rock";
    } else if (compgo == 2) {
        return "Paper";
    } else  
        return "Scissors";
}

console.log (computerPlay());