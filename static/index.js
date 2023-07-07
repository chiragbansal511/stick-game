let but = document.getElementById("rule_but");
let rule = document.getElementById("rule");
let start = document.getElementById("start");
let game = document.getElementById("game");
let turn = document.getElementById("turn");
let result = document.getElementById("result");

let stick = ['stick1', 'stick2', 'stick3', 'stick4', 'stick5', 'stick6', 'stick7', 'stick8', 'stick9', 'stick10', 'stick11', 'stick12', 'stick13', 'stick14', 'stick15'];

but.addEventListener("mouseover", () => {
    rule.style.visibility = "visible";
});

but.addEventListener("mouseleave", () => {
    rule.style.visibility = "hidden";
});

function start_game() {
    start.style.visibility = "hidden";
    game.style.opacity = "1";
    game.style.transitionDuration = ".5s"; 
}
let count = 0;
let num = 0;

function stick_click() {
    document.getElementById(stick[count]).style.filter = "brightness(50%)";
    count++;
    num++;
    if (num == 4) {
        computer_call();
    }
}

function computer_call() {
    turn.innerHTML = "Computer";
    for (i = 0; i < (5 - num); i++) {
        document.getElementById(stick[count]).style.filter = "brightness(50%)";
        document.getElementById(stick[count]).style.transitionDuration = "1s";
        count++;
    }
    
    turn.innerHTML = "Your";
    num =0;

    if(count == "15")
    {
        result.style.visibility = "visible";
        Game.style.opacity = ".9";
    }
}
