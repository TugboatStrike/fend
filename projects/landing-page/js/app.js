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

/* based on selected target the nav button calls this to scroll to associated
section. */
function scrollToSection(event) {
  if (typeof(event.target.dataset.navId) != "undefined") {
    console.log(event.target.dataset.navId);
    let scrollToId = document.getElementById(event.target.dataset.navId);
    scrollToId.scrollIntoView(alignToBot);
    event.preventDefault();/* preventing anchors from doing its normal action*/
  }

}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

navList.addEventListener('click', scrollToSection);

// build the nav


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
  /*return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );*/
  return (
        rect.top >= 0 &&
        rect.left >= 0 );
}

function checkActiveSection() {
  for (const section of sectionList) {
    if (isInViewport(section)) {
      section.classList.add(activeText)
    } else {
      section.classList.remove(activeText)
    }
  }
}

document.addEventListener('scroll', checkActiveSection);
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
