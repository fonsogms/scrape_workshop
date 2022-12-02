let variable = 'this is a string';
console.log(variable);
let twoStrings = variable + ' ' + variable;
console.log(twoStrings);
let stringLength = variable.length;
console.log(stringLength);
let firstLetter = variable[0];
console.log(firstLetter);
let lastLetter = variable[stringLength - 1];
console.log(lastLetter);

let upperCaseVariable = variable.toLocaleUpperCase();
console.log(upperCaseVariable);
/*Mini Kata
Kata: Get innerText of one event and return first and last word and the length of that html element.
Explain further
*/

let numberVariable = 4;
let numberVariableWithDecimals = 4.5;
console.log(numberVariableWithDecimals, 'this are decimals');
let negativeNumberVariable = -numberVariable;
console.log(negativeNumberVariable);

let threeTimesNumberVariable = 3 * numberVariable;
console.log(threeTimesNumberVariable);

let numberVariableDividedBy2 = numberVariable / 2;
console.log(numberVariableDividedBy2);

let numberVariableSquaredBy3 = numberVariable ** 3;
console.log(numberVariableSquaredBy3);

let plusOperationExample = numberVariable + 3;
console.log(plusOperationExample);

let minusOperationExample = numberVariable - 3;
console.log(minusOperationExample);

let stringNumber = 1 + '';
console.log(typeof stringNumber, stringNumber);

let moreComplexString = `This is a variable:${numberVariable} and this is another one:${variable}`;

console.log(moreComplexString);

let undefinedVariable;
console.log(undefinedVariable);

let anotherString = 'ABC';
console.log(anotherString[3]);

undefinedVariable = 'Now is not undefined';
console.log(undefinedVariable);

let newCalculatedVariable = 49;
let number60 = 60;
firstNullVariable = newCalculatedVariable;
console.log(firstNullVariable);

if (newCalculatedVariable > 50) {
  console.log('is bigger than 50');
} else {
  console.log('is not bigger than 50');
}

let isEqualTo60 = number60 === 60;
console.log(isEqualTo60);

if (isEqualTo60) {
  console.log('is equal to 60');
}
let isEqualTo50 = number60 === 50;
console.log(isEqualTo50);

if (isEqualTo50) {
  console.log('is  equal to 50');
} else {
  console.log('is not equal to 50');
}
if (number60 < 50) {
  console.log('is smaller than 50');
} else if (number60 > 20 && number60 < 70) {
  console.log('number is between 20 and 70');
}

if (number60 === 40 || number60 > 1) {
  console.log('is either equal to 40 or bigger than 1');
}

/* Kata:
Make a querySelectorAll() call
Save it a in a variable
If the length of the list is bigger than 10 console.log("more than 10")
If the length of the list is smaller than 10 console.log("less than 10")

If the length of the list is equal than 10 console.log("less than 10")
 */

let animals = ['chicken', 'dog', 'cat', 'Alfonso'];
let numbers = [0, 1, 2, 3, 4];
let booleans = [false, true];
let arrays = [numbers, booleans, animals];

console.log(arrays);
console.log(animals[0], numbers[0]);

animals.push('motherducking dragon');
console.log(animals, animals.length);

for (let animal of animals) {
  console.log('this is an animal:', animal);
}

/* Kata!
Select with querySelectorAll() all of the event cards
and console.log() the innerText of each event.
Advanced:
Split the innerText by "new line" (you might need to research it in google ;))

Kata loop over the event cards se
*/

let pet = {
  name: 'sardino',
  age: 10,
  species: 'dragon',
  owner: 'targaryen family',
};

console.log(pet.name, pet.age, pet.owner);

pet.name = 'not sardino anymore';
console.log(pet.name);

/* kata
Describe your favorite food in an object and then return a string that describes your object making using of the object

 */
