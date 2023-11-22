// rules: 
// - Scissors cut Paper
// - Paper covers Rock
// - Rock crushes Lizard
// - Lizard poisons Spock
// - Spock smashes Scissors
// - Scissors decapitate Lizard
// - Lizard eats Paper
// - Paper disproves Spock
// - Spock vaporizes Rock
// - Rock crushes Scissors

// HTML WRITING VARIABLES
var result = document.getElementById("result");
var userScore = document.getElementById("userScore");
var computerScore = document.getElementById("computerScore");
var html_user_image = document.getElementById("user_image");
var html_cpu_image = document.getElementById("cpu_image");
var num_games = document.getElementById("games");

// SET THE USER AND COMPUTER VARIABLES      
var computerChoices = ["r", "p", "s", "l", "sp"];
var userScore_count = 0;
var computerScore_count = 0;
var num_games_count = 0;
var userGuess;
var computerGuess = function () { return computerChoices[Math.floor(Math.random() * computerChoices.length)]; };
var computerReturn = function (play) {

    switch (play) {
        case "r":
            html_cpu_image.src = "assets/images/rock.png";
            break;
        case "p":
            html_cpu_image.src = "assets/images/paper.png";
            break;
        case "s":
            html_cpu_image.src = "assets/images/scissors.png";
            break;
        case "l":
            html_cpu_image.src = "assets/images/lizard.png";
            break;
        case "s":
            html_cpu_image.src = "assets/images/spock.png";
            break;
    }
    return text;
};

// USER PLAYS ROCK
document.getElementById("rock").onclick = function () {
    userGuess = "r";
    html_user_image.src = "assets/images/rock.png";
    console.log(computerGuess());
    let play = computerGuess();
    return game(userGuess, play);
};

// USER PLAYS PAPER
document.getElementById("paper").onclick = function () {
    userGuess = "p";
    html_user_image.src = "assets/images/paper.png";
    console.log(computerGuess());
    let play = computerGuess();
    return game(userGuess, play);
};

// USER PLAYS SCISSORS
document.getElementById("scissors").onclick = function () {
    userGuess = "s";
    html_user_image.src = "assets/images/scissors.png";
    console.log(computerGuess());
    let play = computerGuess();
    return game(userGuess, play);
};

// USER PLAYS LIZZARD
document.getElementById("lizard").onclick = function () {
    userGuess = "l";
    html_user_image.src = "assets/images/lizard.png";
    console.log(computerGuess());
    let play = computerGuess();
    return game(userGuess, play);
};

// USER PLAYS SPOCK
document.getElementById("spock").onclick = function () {
    userGuess = "sp";
    html_user_image.src = "assets/images/spock.png";
    console.log(computerGuess());
    let play = computerGuess();
    return game(userGuess, play);
};

// RUNNING THE GAME CONDITIONS

let game = function (user, computer) {

    if (user == computer) {
        result.textContent = "Tie!";
        result.style = "color: rgb(245, 188, 74)";

    } else if (user == "r") {
        if (computer == "s") {
            userScore_count = userScore_count + 1;
            // userScore_count ++;
            result.textContent = "WIN";
            result.style = "color: rgb(99, 189, 187)";
            console.log(userScore_count);
        } else if (computer == "l") {
            userScore_count = userScore_count + 1;
            result.textContent = "WIN";
            result.style = "color: rgb(99, 189, 187)";
            console.log(userScore_count);
        } else if (computer == "p") {
            computerScore_count = computerScore_count + 1;
            result.textContent = "LOSS";
            result.style = "color: rgb(243, 102, 82)";
        } else if (computer == "sp") {
            computerScore_count = computerScore_count + 1;
            result.textContent = "LOSS";
            result.style = "color: rgb(243, 102, 82)";
        }

    } else if (user == "p") {
        if (computer == "r") {
            userScore_count = userScore_count + 1;
            result.textContent = "WIN";
            result.style = "color: rgb(99, 189, 187)";
            console.log(userScore_count);
        } else if (computer == "sp") {
            userScore_count = userScore_count + 1;
            result.textContent = "WIN";
            result.style = "color: rgb(99, 189, 187)";
            console.log(userScore_count);
        } else if (computer == "s") {
            computerScore_count = computerScore_count + 1;
            result.textContent = "LOSS";
            result.style = "color: rgb(243, 102, 82)";
        } else if (computer == "l") {
            computerScore_count = computerScore_count + 1;
            result.textContent = "LOSS";
            result.style = "color: rgb(243, 102, 82)";
        }

    } else if (user == "s") {
        if (computer == "p") {
            userScore_count = userScore_count + 1;
            result.textContent = "WIN";
            result.style = "color: rgb(99, 189, 187)";
            console.log(userScore_count);
        } else if (computer == "l") {
            userScore_count = userScore_count + 1;
            result.textContent = "WIN";
            result.style = "color: rgb(99, 189, 187)";
            console.log(userScore_count);
        } else if (computer == "r") {
            computerScore_count = computerScore_count + 1;
            result.textContent = "LOSS";
            result.style = "color: rgb(243, 102, 82)";
        } else if (computer == "sp") {
            computerScore_count = computerScore_count + 1;
            result.textContent = "LOSS";
            result.style = "color: rgb(243, 102, 82)";
        }

    } else if (user == "l") {
        if (computer == "sp") {
            userScore_count = userScore_count + 1;
            result.textContent = "WIN";
            result.style = "color: rgb(99, 189, 187)";
            console.log(userScore_count);
        } else if (computer == "p") {
            userScore_count = userScore_count + 1;
            result.textContent = "WIN";
            result.style = "color: rgb(99, 189, 187)";
            console.log(userScore_count);
        } else if (computer == "s") {
            computerScore_count = computerScore_count + 1;
            result.textContent = "LOSS";
            result.style = "color: rgb(243, 102, 82)";
        } else if (computer == "r") {
            computerScore_count = computerScore_count + 1;
            result.textContent = "LOSS";
            result.style = "color: rgb(243, 102, 82)";
        }

    } else if (user == "sp") {
        if (computer == "s") {
            userScore_count = userScore_count + 1;
            result.textContent = "WIN";
            result.style = "color: rgb(99, 189, 187)";
            console.log(userScore_count);
        } else if (computer == "r") {
            userScore_count = userScore_count + 1;
            result.textContent = "WIN";
            result.style = "color: rgb(99, 189, 187)";
            console.log(userScore_count);
        } else if (computer == "l") {
            computerScore_count = computerScore_count + 1;
            result.textContent = "LOSS";
            result.style = "color: rgb(243, 102, 82)";
        } else if (computer == "p") {
            computerScore_count = computerScore_count + 1;
            result.textContent = "LOSS";
            result.style = "color: rgb(243, 102, 82)";
        }

    }

    userScore.textContent = userScore_count;
    computerScore.textContent = computerScore_count;
};
