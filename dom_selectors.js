// https://lr.riverside.rocks/
let randomNumberVariable = 1;

let randomStringVariable = 'main';
let mainTag = document.querySelector(randomStringVariable);
//To select by tag name just put tag name
let aTagInsideMaintag = mainTag.querySelector('a');
//To select by id attribute we use #id
let getElemebentUsingId = document.querySelector('#sort_options');
//To select by class attribute we use .class
let selectedElementByClass = document.querySelector('.selected');

//To select by attribute [attributeName="value"]
let attributedSelectedElement = document.querySelector('[href="/settings"]');

//To select more than one we use querySelectorAll
let allClassPost = mainTag.querySelectorAll('.post');

//Select with combined selectors
let use2Selectors = document.querySelectorAll('div.post#z78r84');
//If you want to select inside of another selectr example all hr tags inside of divs you use spaces
let insideOfExtraSelector = document.querySelectorAll('div hr');

// Explain!!!!! Innertext and innerHtml
console.log(mainTag.innerText, mainTag.innerHTML);

/* 

Basic
Select all p tags inside of each postcard
Advanced
Select all the event cards in the meetup website
 */
