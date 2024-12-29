const choices = ['Rock', 'Paper', 'Scissors']
const body = document.querySelector('body');
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const logArea = document.createElement('div');
let userScore = 0;
let computerScore = 0;

rockBtn.textContent = 'Rock';
paperBtn.textContent = 'Paper';
scissorsBtn.textContent = 'Scissors';

body.append(rockBtn, paperBtn, scissorsBtn, logArea);



function getComputerChoice(){
    let index = Math.floor(Math.random()*3);
    return choices[index];
}

function appendNewLine(text){
    logArea.innerHTML += '<br>';
    logArea.innerHTML += text;
}

function playRound(userSelection){
    let computerSelection = getComputerChoice();
    switch(choices.indexOf(userSelection) - choices.indexOf(computerSelection)){
        case 0:
            appendNewLine(`Nobody win, your choice is ${userSelection}, computer is ${computerSelection}`);
            //return 'tie';
            break;
        case 1:
            appendNewLine(`You win, ${userSelection} beats ${computerSelection}`)
            userScore += 1;
            //return 'userWin';
            break;
        case 2:
            appendNewLine(`You lose, ${computerSelection} beats ${userSelection}`)
            computerScore += 1;
            //return 'computerWin';
            break;
        case -1:
            appendNewLine(`You lose, ${computerSelection} beats ${userSelection}`)
            computerScore += 1;
            //return 'computerWin';
            break;
        case -2:
            appendNewLine(`You win, ${userSelection} beats ${computerSelection}`)
            userScore += 1;
            //return 'userWin';
            break;     
    }
    appendNewLine(`Your score is ${userScore}. Computer's score is ${computerScore}!`);
}

function winTheGame(){
    if(userScore === 5){
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        appendNewLine('You win!')
    }
    
    if(computerScore === 5){
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        appendNewLine('Computer win!')
    }
}

rockBtn.addEventListener('click', () => {
    playRound('Rock');
    winTheGame();
})

paperBtn.addEventListener('click', () => {
    playRound('Paper');
    winTheGame();
})

scissorsBtn.addEventListener('click',() => {
    playRound('Scissors');
    winTheGame();
})


/*
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
*/

/*
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
*/