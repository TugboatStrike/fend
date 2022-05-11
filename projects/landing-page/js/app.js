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
const alignToBot = {behavior: "smooth", block: "end", inline: "nearest"}

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function navButton(element) {
  const newLi = document.createElement('li');
  newLi.append(element.dataset.nav);/* Add element dataset text as li display text*/
  newLi.classList.add("menu__link");/* Add class "menu__link" to li*/
  newLi.addEventListener('click', scrollToSection);
  newLi.dataset.navId = element.id; /* Add dataset of section ID*/
  newLi.dataset.nav = element.dataset.nav;/* Add nav text as prop to li*/
  return newLi;
  /*element.scrollIntoView(alignToBot);*/
}/* creating nav buttons for the sectionList
assuming it will have the dataset data-nav and class css 'menu__link'
 */


function scrollToSection(event) {
  let scrollToId = document.getElementById(event.target.dataset.navId);
  scrollToId.scrollIntoView(alignToBot);
  /*element.scrollIntoView(alignToBot);*/
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
let navList = document.getElementById("navbar__list");
/*
console.log(navList);
let newListItem = document.createElement('li');
console.log(newListItem);
/*newListItem.appendChild(document.createTextNode("list item"));*/
/*newListItem.textContent = 'test ';
newListItem.append('list item'); /*using the append instead of textContent*/
/*console.log(newListItem);
newListItem.classList.add("menu__link")
navList.appendChild(newListItem);
console.log(navList);*/

let sectionList = document.querySelectorAll('section');
for (const section of sectionList) {
  navList.appendChild(navButton(section));
}
console.log('done!!!');

/*
using this i can move to sections based on id.
https://stackoverflow.com/questions/13735912/anchor-jumping-by-using-javascript
https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
*/
/*
let alignToBot = {behavior: "smooth", block: "end", inline: "nearest"}
sectionList[2].scrollIntoView(alignToBot);*/
/*
testNavButton = navButton(sectionList[1]);
console.log(testNavButton);
navList.appendChild(testNavButton);
navList.appendChild(navButton(sectionList[2]));*/

let testClick = document.querySelector('#section2')
testClick.addEventListener('click', function testingLog(){
  console.log('testing clicked');
})


const box = document.querySelector('#section2');
const rect = box.getBoundingClientRect();

/*
const isInViewport = rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth);

console.log(isInViewport);*/

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

const activeText = "your-active-class";

document.addEventListener('scroll', function() {
  console.log('---start---');
  for (const section of sectionList) {
    if (isInViewport(section)) {
      section.classList.add(activeText)
    } else {
      section.classList.remove(activeText)
    }

    console.log(isInViewport(section));
  }
  console.log('---end---');
})
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
