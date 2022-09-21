'use strict';

console.log('hello world, I AM ALIVE!!')
let userName
function introUser() {

  userName = prompt('what is your name');

  alert(`WELCOME TO THE JUNGLE ${userName} ! lets play a game. you have to answer yes or no. get it?`);
}

introUser();

let userPoints = 0;



function nameJoey() {

  let userQuestionOne = prompt('is my name Joey?')
  let lowerCase = userQuestionOne.toLowerCase();
  console.log(userQuestionOne)
  if (userQuestionOne === 'y' || userQuestionOne === 'yes') {

    alert('You are correct!');
    userPoints++;
  } else if (userQuestionOne === 'n' || userQuestionOne === 'no') {

    alert('Sorry, you are WRONG');
  }

}

nameJoey();


function sons() {

  let userQuestionTwo = prompt('Do I have 3 sons?').toLowerCase();
  console.log(userQuestionTwo);
  if (userQuestionTwo === 'y' || userQuestionTwo === 'yes') {
    alert('You are correct!');
    userPoints++;

  }
  else if (userQuestionTwo === 'n' || userQuestionTwo === 'no') {

    alert('Sorry, you are WRONG');
  }
}

sons();


function peru() {
  let userQuestionThree = prompt('Am I from PERU??').toLowerCase();
  console.log(userQuestionTwo);
  if (userQuestionThree === 'y' || userQuestionThree === 'yes') {
    alert('DING DING DING You are correct!');
    userPoint++
  }

  else if (userQuestionThree === 'n' || userQuestionThree === 'no') {

    alert('Sorry, you are WRONG');

  }

  peru();

}

function vet() {

  let userQuestionFour = prompt('I am a military veteran?').toLowerCase();
  if (userQuestionFour === 'y' || userQuestionFour === 'yes') {
    alert('You are correct!');
  }
  else if (userQuestionFour === 'n' || userQuestionFour === 'no') {

    alert('Sorry, you are WRONG');
  }
}

vet();

function africa() {

  let userQuestionFive = prompt('Did I live in Africa?').toLowerCase();
  if (userQuestionFive === 'y' || userQuestionFive === 'yes') {
    alert('You are correct!');

  } else if (userQuestionFive === 'n' || userQuestionFive === 'no') {
    alert('Sorry, you are WRONG');
  }
}

africa();


function bonus() {

  let bonusQuestion = prompt('HEY, one final question ' + userName + ' Do you like PEPSI or COKE?');

  alert('FATAL ERROR 404 ' + userName + ' Goodbye.');
}

bonus();


function whatWhat() {

  let attempts = 4;
  while (attempts > 0) {
    let userQuestionSix = prompt('Whats my favorite number? 1- 20');
    attempts--;
    if (userQuestionSix === 13) {
      console.log(userQuestionSix);

      alert('CORRECT! 13 is My Lucky number!');
      userPoints++;
      break;

    } else if (userQuestionSix > 13) {
      alert('SORRY! You are high as a kite young buck!');
    }
    if (attempts === 0)
      alert('tsk, tsk, tsk, smh, my FAVORITE and LUCKY number is 13');
  }
}

whatWhat();

function southPark() {

  const cartoons = ['doc mcstuffins ', ' thundercats', ' rick and morty', ' south park', 'american dad', 'family guy', 'my little pony'];


  let numTrys = 0;
  let correct = false;

  while (numTrys < 6 && correct === false) {
    let userQuestionSeven = prompt('can you guess my favorite cartoon?').toLowerCase();

    for (let i = 0; i < cartoons.length; i++) {
      if (cartoons[i] === userQuestionSeven) {
        alert(`well, well, I like to laugh. who you were correct! ${cartoons}.`);
        correct = true;
        userPoints++;
        break;
      }
    }
    
  }
    if (correct === false) {
    alert('EEEEEEEEHHHHKK. WRONG');
  }
if (correct === false) {
  alert(`tsk, tsk, look at it again ${cartoons}.`);
}numTrys++;
}
southPark();

{
  alert(`Thanks for taking my quiz, ${userName}. Your score was ${userPoints} out of 7`);
}

