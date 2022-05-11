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
/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/
const alignToBot = {behavior: "smooth", block: "end", inline: "nearest"}
const activeText = "your-active-class";
const navList = document.getElementById("navbar__list");
const sectionList = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 *
*/


/* creating nav buttons for the sectionList assuming it will have the
dataset data-nav and class css 'menu__link'*/
function navButton(element) {
  const newLi = document.createElement('li');
  newLi.innerHTML += `<a href="#">${element.dataset.nav}</a>`;
  const newA = newLi.firstChild;
  newA.setAttribute("style", "cursor: default");
  newA.classList.add("menu__link");
  newA.dataset.navId = element.id; /* Add dataset of section ID*/
  /*newA.addEventListener('click', scrollToSection);*/
  return newLi;
}


/* Check if element is in the viewport*/
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  /* Saved for checking full window instead of just top of element.*/
  /*return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );*/
  return (
        rect.top >= -200 &&
        rect.left >= -200 &&
        rect.top < 400 &&
        rect.left < 400
      );
}





/**
 * End Helper Functions
 * Begin Main Functions
 *
*/


// build the nav
/* For each section create a navigation button.*/
for (const section of sectionList) {
  navList.appendChild(navButton(section));
}
const menuList = document.querySelectorAll(".menu__link")

// Add class 'active' to section when near top of viewport
/* Add active class to section if its in viewport*/
function checkActiveSection() {
  let sectionCount = 0;
  for (const section of sectionList) {
    if (isInViewport(section)) {
      section.classList.add(activeText)
      menuList[sectionCount].setAttribute("style", "opacity: 0.2");
    } else {
      section.classList.remove(activeText)
      menuList[sectionCount].setAttribute("style", "opacity: 1.0");
    }
    sectionCount += 1;
  }
}


// Scroll to anchor ID using scrollTO event
/* based on selected target the nav button calls this to scroll to associated
section. */
function scrollToSection(event) {
  if (typeof(event.target.dataset.navId) != "undefined") {
    let scrollToId = document.getElementById(event.target.dataset.navId);
    scrollToId.scrollIntoView(alignToBot);
    event.preventDefault();/* preventing anchors from doing its normal action*/
  }
}



/**
 * End Main Functions
 * Begin Events
 *
*/


// Build menu
/* This doesn't make sense to have an event to build the menu.*/


// Scroll to section on link click
/* Created single event listener for the navigation buttons */
navList.addEventListener('click', scrollToSection);


// Set sections as active
/* Add scroll listener to check for active section. */
document.addEventListener('scroll', checkActiveSection);
