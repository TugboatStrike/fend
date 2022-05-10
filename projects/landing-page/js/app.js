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



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
let navList = document.getElementById("navbar__list");
console.log(navList);
let newAnchor = document.createElement('a');
console.log(newAnchor);
let newListItem = document.createElement('li');
console.log(newListItem);
/*newListItem.appendChild(document.createTextNode("list item"));*/
newListItem.textContent = 'list item';
console.log(newListItem);
newAnchor.appendChild(newListItem)
console.log(newAnchor);
newAnchor.classList.add("menu__link")
navList.appendChild(newAnchor);
console.log(navList);
let sectionList = document.querySelectorAll('section');
console.log(sectionList);
console.log('printing sections from list\n');
for (const section of sectionList) {
  console.log(section);
  console.log('-------');
}
console.log('done!!!');

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
