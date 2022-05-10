/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/
console.log("this works!2");
/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function navButton(element) {
  const newLi = document.createElement('li');
  newLi.append(element.dataset.nav);
  newLi.classList.add("menu__link")
  return newLi;
}/* creating nav buttons for the sectionList
assuming it will have the dataset data-nav and class css 'menu__link'
 */


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
let navList = document.getElementById("navbar__list");

console.log(navList);
let newListItem = document.createElement('li');
console.log(newListItem);
/*newListItem.appendChild(document.createTextNode("list item"));*/
newListItem.textContent = 'test ';
newListItem.append('list item'); /*using the append instead of textContent*/
console.log(newListItem);
newListItem.classList.add("menu__link")
navList.appendChild(newListItem);
console.log(navList);
let sectionList = document.querySelectorAll('section');
console.log(sectionList);
console.log('printing sections from list\n');
for (const section of sectionList) {
  console.log(section);
  console.log(section.id);
  console.log('-------');
}
console.log('done!!!');

/*
using this i can move to sections based on id.
https://stackoverflow.com/questions/13735912/anchor-jumping-by-using-javascript
https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
*/
let alignToBot = {behavior: "smooth", block: "end", inline: "nearest"}
sectionList[2].scrollIntoView(alignToBot);

testNavButton = navButton(sectionList[1]);
console.log(testNavButton);
navList.appendChild(testNavButton);
navList.appendChild(navButton(sectionList[2]));

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
