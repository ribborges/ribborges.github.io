/***** navbar *****/

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