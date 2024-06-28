
window.addEventListener("DOMContentLoaded", (event) => {
	const buttons = document.getElementsByClassName("choice");
	const buttonsArray = Array.prototype.slice.call(buttons);
	let userScore = 0, computerScore = 0;

	buttonsArray.forEach(button => {
		button.addEventListener("click", function() {
			const computerChoice = getComputerChoice();
			const userChoice = button.id;
			const currentWinner = playRound(userChoice, computerChoice);
			currentWinner === "user" ?  userScore++ : computerScore++;
			setScore(userScore, computerScore);
			updateWinner(userScore, computerScore, buttonsArray);
		});
	});

	let playAgain = document.getElementById("playAgain");
	playAgain.addEventListener("click", function() {
		userScore = 0;
		computerScore = 0;
		setScore(userScore, computerScore);
		document.getElementById("text").textContent = "";
		document.getElementById("finalWinner").textContent = "";
		buttonsArray.forEach(btn => {
			btn.disabled = false;
			btn.classList.remove("disabled");
		});
		playAgain.style.display = "none";
	});
});

function getComputerChoice() {
	let move = Math.random();
	if(move <= 0.35) 
		move = "rock";
	else if(move > 0.35 && move <= 0.65) 
		move = "paper";
	else
	move = "scissors";
	return move;
}

function playRound (user, computer) {
	let text = document.getElementById("text");
	let winner = "";
	if(user === computer) {
		text.textContent = "It's a tie!";
	} else if (user === "rock" && computer === "paper") {
		text.textContent = "Paper covers rock. You lose!";
		winner = "computer";
	} else if (user === "rock" && computer === "scissors") {
		text.textContent = "Rock crushes scissors. You win!";
		winner = "user";
	} else if (user === "paper" && computer === "rock") {
		text.textContent = "Paper covers rock. You win!";
		winner = "user";
	} else if (user === "paper" && computer === "scissors") {
		text.textContent = "Scissors cuts paper. You lose!";
		winner = "computer";
	} else if (user === "scissors" && computer === "rock") {
		text.textContent = "Rock crushes scissors. You lose!";
		winner = "computer";
	} else if (user === "scissors" && computer === "paper") {
		text.textContent = "Scissors cuts paper. You win!";
		winner = "user";
	}

	return winner;
}

function setScore(user, computer) {
	let userScoreContent = document.getElementById("userScore");
	let computerScoreContent = document.getElementById("computerScore");
	userScoreContent.textContent = user;
	computerScoreContent.textContent = computer;
}

function updateWinner(user, computer, ele) {
	let winner = document.getElementById("finalWinner");
	if(user === 5 || computer === 5) {
		if(user === 5) {
			winner.textContent = "You win!";
		} else {
			winner.textContent = "You lose!";
		}
		ele.forEach(btn => {
			btn.disabled = true;
			btn.classList.add("disabled");
		});
		document.getElementById("playAgain").style.display = "block";
	}
	
}