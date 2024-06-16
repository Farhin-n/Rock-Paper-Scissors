
playNewGame();

function getComputerChoice () {
	let computerSelection = Math.random();
	if(computerSelection <= 0.35) 
		computerSelection = "rock";
	else if(computerSelection > 0.35 && computerSelection <= 0.65) 
		computerSelection = "paper";
	else
	computerSelection = "scissors";
	console.log(computerSelection);
	return computerSelection;
}

function getUserChoice () {
	let userSelection = prompt("Enter your choice (rock, paper, scissors): ");
	userSelection = userSelection.toLowerCase();
	console.log(userSelection);
	return userSelection;
}

function playNewGame () {
	let userScore = 0, computerScore = 0;

	function playRound (user, computer) {

		if( user === computer) {
			console.log("It's a tie!");
		} else if (user === "rock" && computer === "paper") {
			console.log("Paper covers rock. You lose!");
			computerScore++;
		} else if (user === "rock" && computer === "scissors") {
			console.log("Rock crushes scissors. You win!");
			userScore++;
		} else if (user === "paper" && computer === "rock") {
			console.log("Paper covers rock. You win!");
			userScore++;
		} else if (user === "paper" && computer === "scissors") {
			console.log("Scissors cuts paper. You lose!");
			computerScore++;
		} else if (user === "scissors" && computer === "rock") {
			console.log("Rock crushes scissors. You lose!");
			computerScore++;
		} else if (user === "scissors" && computer === "paper") {
			console.log("Scissors cuts paper. You win!");
			userScore++;
		}

		return userScore, computerScore; 
	}	

	let ROUNDS = 5;
	let currentRound = 1;
	for( i = currentRound; i <= ROUNDS; i++) {
		const computerChoice = getComputerChoice();
		const userChoice = getUserChoice();
		playRound(userChoice, computerChoice);
	}

	if(userScore > computerScore) {
		console.log("You win the game!");
	} else if (userScore > computerScore) {
		console.log("You lost the game!");
	} else {
		console.log("It's a tie!");
	}
}

