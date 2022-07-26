const header = document.querySelector("nav");
const topSection = document.querySelector(".header");
const navElem = document.getElementById("navbar");
const navBtns = navElem.children;

const options = {
    rootMargin: "-200px 0px 0px 0px"
};

const topSectionObserver = new IntersectionObserver(function(entries, topSectionObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            navElem.classList.add("scrolled");
        }

        else {
            navElem.classList.remove("scrolled");
        }
    })
}, options);

topSectionObserver.observe(topSection);

var acc = document.getElementsByClassName("accordion-btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}