// Your code goes here

// MOUSEOVER and MOUSELEAVE

const logoHeading = document.querySelector(".logo-heading");

logoHeading.addEventListener("mouseover", () => {
  logoHeading.style.transform = "scale(1.2)";
  logoHeading.style.transition = "all 0.3s";
});

logoHeading.addEventListener("mouseleave", () => {
  logoHeading.style.transform = "scale(1)";
  logoHeading.style.transition = "all 0.3s";
});

const bodyElement = document.querySelector("body");


// KEYDOWN

// keydown should be applied on the document
// event is also needed in the as a parameter
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 66) {
    bodyElement.style.fontWeight = "600";
  } 
  return;
});

const contentImages = document.querySelectorAll(".img-content img");

// KEYUP

document.addEventListener("keyup", (event) => {
  if (event.keyCode === 66) {
    bodyElement.style.fontWeight = "inherit";
  }
  return;
});

// WHEEL

let scale = 1;

contentImages[0].addEventListener("wheel", (event) => {
  event.preventDefault();
  scale = scale + event.deltaY * -0.001; // how much the scaling effect increments, the smaller the less obvious
  scale = Math.min(Math.max(.75, scale), 1.15); 
  // the second argument in Math.min shows the max limit
  // the first argument in Math.min(Math.max()) shows the min limit
  contentImages[0].style.transform = `scale(${scale})`;
});

contentImages[1].addEventListener("wheel", (event) => {
  event.preventDefault();
  scale = scale + event.deltaY * -0.001;
  scale = Math.min(Math.max(.75, scale), 1.15); 
  contentImages[1].style.transform = `scale(${scale})`;
});

contentImages.forEach((image) => {
  image.title = "Scroll to resize"
});

const mainNav = document.querySelector(".main-navigation");
mainNav.style.zIndex = "1"; // this was needed, otherwise scaling pic will overlap the navbar

// LOAD

// applied to window
window.addEventListener("load", () => {
  console.log("Page has fully loaded.");
})

// preventDefault on a tags

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  })
})

// DOUBLE CLICKS

let introImage = document.querySelector(".intro img");
introImage.addEventListener("dblclick", () => {
  introImage.style.display = "none";
})

introImage.title = "Double click to remove"

// FOCUS and BLUR

const searchBar = document.createElement("input");
searchBar.type = "text";

searchBar.style.width = "100px";

const navBar = document.querySelector(".nav");

navBar.style.alignItems = "center";

navBar.append(searchBar);
