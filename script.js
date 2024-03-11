let userScore = 0;
let compScore = 0;

const choices =document.querySelectorAll(".choice");

const genChoice = () =>{
    const opts = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return opts[randIdx];
};

const playgame = (userchoice) => {
    console.log("Your choice:",userchoice); 
    // computer choice
    const compChoice = genChoice();
    console.log("comp choice = ",compChoice);
    
    // game logic
    let msg;
    if (userchoice === compChoice) {
        msg = "It's a draw.Play again";
        document.querySelector("#msg").style.backgroundColor="#081b31";
      } else if (
        (userchoice === 'rock' && compChoice=== 'scissors') ||
        (userchoice === 'paper' && compChoice === 'rock') ||
        (userchoice === 'scissors' && compChoice === 'paper')
      ) {
        msg = "your "+ userchoice + " beats " + compChoice + "," + " You win! ";
        document.querySelector("#msg").style.backgroundColor="green";
        userScore++;
      } else {
        msg = compChoice + " beats " + "Your " + userchoice+ "," + " You lose! ";
        document.querySelector("#msg").style.backgroundColor="red";
        compScore++;
      }
 
      document.getElementById('msg').innerText = msg;
      document.getElementById('user-score').innerText = userScore;
      document.getElementById('comp-score').innerText = compScore;

      checkGameOver();
}
// user choice
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
           playgame(userchoice);
    })
})
// game over condition
function checkGameOver() {
    if (userScore === 3) {
      document.getElementById('user-score').innerText = userScore;
      setTimeout(function() {
        alert("Game over! You win!");
        window.location.reload();
      }, 100);
    } else if (compScore === 3) {
      document.getElementById('comp-score').innerText = compScore;
      setTimeout(function() {
        alert("Game over! Computer wins!");
        window.location.reload();
      }, 100);
    }
  }