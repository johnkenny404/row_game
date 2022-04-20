// document.querySelector('.message').textContent =
// 'Correct Number'
// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent =10
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //if no number is entered
  if (!guess) {
    // document.querySelector('.message').textContent=
    // 'No Number!';
    displayMessage("No Number !");

    // if the guess number wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent =
    // 'correctNumber';
    displayMessage("correctNumber");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = " #60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? 'Too high' : 'Too low';
      displayMessage(guess > secretNumber ? "Too high" : "Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector('.message').textContent =
      // 'You loss the game';
      displayMessage("You loss the game");
      document.querySelector(".score").textContent = 0;
    }
  }

  // if the guess no is greater than the secret number
  // } else if(guess > secretNumber){
  //     if(score > 1){
  //         document.querySelector('.message').textContent =
  //         "Too Hight!";
  //         score--;
  //         document.querySelector('.score').textContent=
  //         score;
  //     }else{
  //         document.querySelector('.message').textContent =
  //         'You loss the game';
  //         document.querySelector('.score').textContent=
  //         0;
  //     }

  // // if the guess no is less than the secret number
  // }else if(guess < secretNumber){
  //     if(score > 1){
  //         document.querySelector('.message').textContent =
  //         "Too Low !";
  //         score--;
  //         document.querySelector('.score').textContent=
  //         score;
  //     }else{
  //         document.querySelector('.message').textContent =
  //         'You loss the game';
  //         document.querySelector('.score').textContent=
  //         0;
  //     }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").style.width = "15rem";
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent =
  // 'Start guessing...';
  displayMessage("Start guessing...");

  document.querySelector("body").style.backgroundColor = " #222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
});

const camelCase = function (str) {
  let insert = [];
  let joinWord = 0;
  for (let i = 0; i < str.length; i++)
    if (str[i] === str[i].toUpperCase()) {
      insert.push(str[i]);
      joinWord = insert.length + 1;
    }

  console.log(joinWord);
};
camelCase("helloMrJohn");
camelCase("howOldAreYouSoFar");
camelCase("howFar");
/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/
function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}
// or

function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}

// const countSheep = function (num) {
//   for (let i = 0; i < num.length; i++)
//     if (num > 0) {
//       return `murmur: ${i} ${num.length} sheep...`;
//     }
// };

// console.log(countSheep(3));

/*
write a program that receive a list of variable names written in
underscore_case and convert them to camelCase.


the input will come from a textarea inserted into the DOM (see code below), conversion
will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
first_name
same_variable
calculate_AGE
deleyed_departure

SHOULD PRODUCE THIS OUTPUT IS seperate console.log
output)

underscoreCase
firstName
someVariable
calculateAge
deleyedDeparture

HINT 1: Remember which character defines a new line
in the textarea
HINT 2: The solution only needs to work for a
variable name out of the words, like a_b
HINT 3: Start without worrying about the, Tackle
that only afer you have the variable name conversion
working
HINT4: This challenge is difficult on purpose
so start watching the solution in case you're 
stuck, then pause and contiune!
Afterwards, test with your own test data

 */
