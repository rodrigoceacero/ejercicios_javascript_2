window.addEventListener("DOMContentLoaded", main);

const LETTERS = [
  "A", "B", "C", "D",
  "E", "F", "G", "H",
  "I", "J", "K", "L",
  "M", "N", "Ñ", "O",
  "P", "Q", "R", "S",
  "T", "U", "V", "W",
  "X", "Y", "Z"
];

const WORDS = [
  "happen", "fail", "success",
   "sleep", "develop", "eat", 
   "delete", "add", "obey", "beg"
];

const USED_LETTERS = [];

let attempts = 6;

function main() {
  const buttons = createKeyboard(LETTERS);
  const keyboard = writeKeyboard(buttons);

  let word = generateWord(WORDS);
  let hiddenWord = writeWord(word);

  guessLetter(word, hiddenWord, USED_LETTERS, keyboard, attempts);

  // drawHangman(attempts);
}

//Create button with letters, one param: letters and return all the buttons with their letter
function createKeyboard(letters) {
  let createButtons = "";
  for (let i = 0; i < letters.length; i++) {
    createButtons += `<button value="${letters[i]}">${letters[i]}</button>`;
  }

  return createButtons;
}

//Write a keyboard with button created in createKeyboard, one param: createButtons and return the keyboard done
function writeKeyboard(createButtons) {
  let keyboard = document.getElementById('btnkeyboard');
  keyboard.innerHTML = createButtons;

  return keyboard;
}

//Generate one random word of the array words and return this word.
function generateWord(words) {
  let randomWord = words[Math.floor(Math.random() * words.length)];

  return randomWord;
}

//Write the word created in generateWord but replace all elements to _. One param: randomWord anda return the word replace.
function writeWord(randomWord) {
  let hiddenWord = document.getElementById("word");
  let substitutedWord = randomWord.replace(/[a-zA-Z]/g, "_"); //G replace all letters
  hiddenWord.innerHTML = substitutedWord;

  return hiddenWord;
}

//Guess the hiddenWord using letters and say if win or lose depending attempts. Five params: word, hiddenWord, usedLetters, keyboard, attempts 
function guessLetter(word, hiddenWord, usedLetters, keyboard, attempts) {
  keyboard.addEventListener("click", function () {
    const clickedLetter = event.target.textContent.toLowerCase();

    if (!usedLetters.includes(clickedLetter)) {
      usedLetters.push(clickedLetter);
      if (word.includes(clickedLetter)) {
        let updatedHiddenWord = '';
        for (let i = 0; i < word.length; i++) {
          if (word[i] === clickedLetter) {
            updatedHiddenWord += clickedLetter;
          } else {
            updatedHiddenWord += hiddenWord.textContent[i];
          }
        }
        hiddenWord.textContent = updatedHiddenWord;
        if (!hiddenWord.textContent.includes("_") && attempts > 0) {
          alert(`Congratulations, you win! The word was ${word}`);
          restartGame(word,hiddenWord);
        }
      } else {
        attempts--;
        alert(`The letter isn´t in the word. You have ${attempts} attempts.`);
        if (attempts === 0) {
          alert(`You lose, the word was ${word}. Try again`);
          restartGame(word, hiddenWord);
        }
      }
    } else {
      alert("You have already selected this letter");
    }
  });

  // return attempts;
}

//Restart the game if the previous game is lose or win
function restartGame(word, hiddenWord){
  USED_LETTERS.length = 0;
  attempts = 6;
  hiddenWord.textContent = '';
  word = generateWord(WORDS);
  writeWord(word);
}


// function drawHangman(attempts) {
//   const hangmanContainer = document.querySelectorAll("#hangman img");
//   const imagePath = "../imagenes/";

//   for (let i = attempts; i < attempts; i++) {
//     hangmanContainer[1].src = `${imagePath}${i}.png`;
//     hangmanContainer[1].alt = `${imagePath}${i}`;
//     hangmanContainer.innerHTML = hangmanPart;
//   }
// }

