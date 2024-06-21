
window.addEventListener("DOMContentLoaded", (event) => {
	const el = document.getElementById("goBtn");
	if(el) {
		el.addEventListener("click", playNewGame, false);
	}
});

function createImgEl (id, val) {
	let img = document.createElement("img");
	let sourceEl = id;
	switch(val) {
		case 'rock': {
			img.src = "Images/Rock.jpg";
			img.alt = "Rock";
			break;
		}
		case 'paper': {
			img.src = "Images/Paper.jpg";
			img.alt = "Paper";
			break;
		}
		case 'scissors': {
			img.src = "Images/Scissors.jpg";
			img.alt = "Scissors";
			break;
		}
		default: break;
	}
	sourceEl.appendChild(img);
	let h3 = document.querySelector("h3");
	h3.classList.remove("hide");
}

function playNewGame() {
	let userScore = 0, computerScore = 0;
	let text = document.getElementById("score");
	const computer = getComputerChoice();
	const user = document.getElementById("userInput").value.toLowerCase();
	
	createImgEl(computerMove, computer);
	createImgEl(userMove, user); 
	
	if( user === computer) {
		text.innerHTML = "It's a tie!";
	} else if (user === "rock" && computer === "paper") {
		text.innerHTML = "Paper covers rock. You lose!";
	} else if (user === "rock" && computer === "scissors") {
		text.innerHTML = "Rock crushes scissors. You win!";
	} else if (user === "paper" && computer === "rock") {
		text.innerHTML = "Paper covers rock. You win!"
	} else if (user === "paper" && computer === "scissors") {
		text.innerHTML = "Scissors cuts paper. You lose!"
	} else if (user === "scissors" && computer === "rock") {
		text.innerHTML = "Rock crushes scissors. You lose!";
	} else if (user === "scissors" && computer === "paper") {
		text.innerHTML = "Scissors cuts paper. You win!";
	}

	return userScore, computerScore, text; 
}

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
