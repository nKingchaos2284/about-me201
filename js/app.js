'use strict';

console.log('HELLO WORLD');

let userAskName = prompt('Greetings and Salutations Codefellows Citizen!' + ' What is your name?').toLowerCase();

alert('WELCOME TO THE JUNGLE ' + userAskName + '!!!!!');

let askQuestion1 = prompt(' Do you want to play a game? ' + userAskName).toLowerCase();

alert('HINT- It does not matter what you want, WE ARE PLAYING!!! BUWAHAHAHAHA!!! You MUST answer Yes or No.');

let userQuestion1 = prompt('is my name Joey?').toLowerCase();
if (userQuestion1 === 'y' || userQuestion1 === 'yes') {
  alert('You are correct!');
}
else if (userQuestion1 === 'n' || userQuestion1 === 'no') {
  alert('Sorry, you are WRONG');
}

let userQuestion2 = prompt('Do I have 3 sons?').toLowerCase();
if (userQuestion2 === 'y' || userQuestion2 === 'yes') {
  alert('You are correct!');
}
else if (userQuestion2 === 'n' || userQuestion2 === 'no') {
  alert('Sorry, you are WRONG')
}

let userQuestion3 = prompt('Am I from PERU??');
if (userQuestion3 === 'y' || userQuestion3 === 'yes') {
  alert('DING DING DING You are correct!');
}
else if (userQuestion3 === 'n' || userQuestion3 === 'no') {
  alert('Sorry, you are WRONG');

}
let userQuestion4 = prompt('I am a military veteran?').toLowerCase();
if (userQuestion4 === 'y' || userQuestion4 === 'yes') {
  alert('You are correct!');
}
else if (userQuestion4 === 'n' || userQuestion4 === 'no') {
  alert('Sorry, you are WRONG');
}

let userQuestion5 = prompt('Did I live in Africa?').toLowerCase();
if (userQuestion5 === 'n' || userQuestion5 === 'no') {
  alert('You are correct!');
}
else if (userQuestion5 === 'y' || userQuestion5 === 'yes') {
  alert('Sorry, you are WRONG');
}

let bonusQuestion = prompt('HEY, one final question ' + userAskName + ' Do you like PEPSI or COKE?');

alert('FATAL ERROR 404 ' + userAskName + ' Goodbye.');




