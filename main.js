const choices = ['Rock', 'Paper', 'Scissors']

function getComputerChoice(){
    let index = Math.floor(Math.random()*3);
    return choices[index];
}

function getUserChoice(){
    let input = prompt("Give me a choice among 'Rock', 'Paper', 'Scissors'. ");
    let userInput = input.toLowerCase();
    userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);
    if (choices.includes(userInput)){
        return userInput;
    }
    else{
        console.log("Your choice has to be in 'Rock', 'Paper', 'Scissors'.");
        console.log(`Your choice is ${input}`);
        getUserChoice();
    }
}



function playRound(userSelection, computerSelection){
    switch(choices.indexOf(userSelection) - choices.indexOf(computerSelection)){
        case 0:
            console.log(`Nobody win, your choice is ${userSelection}, computer is ${computerSelection}`);
            return 'tie';
        case 1:
            console.log(`You win, ${userSelection} beats ${computerSelection}`)
            return 'userWin';
        case 2:
            console.log(`You lose, ${computerSelection} beats ${userSelection}`)
            return 'computerWin';
        case -1:
            console.log(`You lose, ${computerSelection} beats ${userSelection}`)
            return 'computerWin';
        case -2:
            console.log(`You win, ${userSelection} beats ${computerSelection}`)
            return 'userWin';       
    }
}

function playGame(){
    
    let userScore = 0;
    let computerScore = 0;

    for (let i=0; i<5; i++){
        let userSelection = getUserChoice();
        let computerSelection = getComputerChoice();

        let result = playRound(userSelection, computerSelection);

        switch(result){
            case 'Tie':
                break;
            case 'userWin':
                userScore += 1;
                break;
            case 'computerWin':
                computerScore += 1;
                break;
        }
    }

    if (userScore == computerScore){
        console.log(`Tie! The score is ${userScore}:${computerScore}.`)
    }
    else if(userScore > computerScore){
        console.log(`Your win! The score is ${userScore}:${computerScore}.`)
    }
    else {
        console.log(`Your lose! The score is ${userScore}:${computerScore}.`)
    }

}

playGame()