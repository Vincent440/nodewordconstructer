/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
var Word = require("./Word.js");

var inquirer = require("inquirer");

let currentWord = "";//global var to hold the current word the user is guessing
let wordsArray = ["Astronaut","Neil Armstrong","International Space Station","Rocket","Satellite",
"Solar System","big bang theory","binary star","astronomer","astronomy","telescope","asteroid","dwarf star","dwarf planet","meteor shower","planet","light-year"];
let guessesAvailable = 10;

// Randomly selects a word and uses the Word constructor to store it
function grabCurrentWordFromArr(curWord,wordArr){
    curWord = "";//clears current word to ensure it is an empty string
    i = Math.floor(Math.random()*wordArr.length); //grabs random index from the word arr
    curWord = wordArr[i];
    wordArr = wordArr.splice(i,1);
    return curWord; 
}

function promptWordGuess( word, guessedalready = [], guessesMade = 0 ){
    if(guessesMade >= guessesAvailable ) { 
        displayPromptSetWordArray()
    }
    debugger;
    inquirer.prompt([
    {   name: "guess",
        type: "input",
        message:"Guess a letter!",
        validate: char =>{
            let re = new RegExp(/[a-z]+/g);

            if (char.length >= 2  || !re.test(char)) {return "Valid guess must be one character long!";}
            else if(guessedalready.includes(char)){
                return "You have guessed that already!";
            }  
            else {return true;}
        }
    }]).then(userPick=>{
        char = userPick.guess

        guessedalready.push(userPick.guess);

        word.guessLetter(userPick.guess)
        debugger;

        //checkThisGuess(word,userPick.guess)
        //if()
        promptWordGuess(word ,guessedalready,guessesMade);
    });
}


function displayPromptSetWordArray(gameWordArray=wordsArray){
    //gameWord = new Word(grabCurrentWordFromArr(currentWord,gameWordArray));
    currentWord =  new Word("light-year");
    debugger;
    //console.log("\n"+gameWord.display()+"\n");
    currentWord.guessLetter("");
    promptWordGuess(currentWord);
}


displayPromptSetWordArray();