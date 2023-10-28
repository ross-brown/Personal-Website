"use strict";

const backToTop = document.querySelector(".back-to-top");


/** Shows and hides the back to top button depending on
 *  the how far the window is scrolled vertically.
 */
function toggleBackToTop() {
  if (window.scrollY > 100) {
    backToTop.classList.add("active");
  } else {
    backToTop.classList.remove("active");
  }
}

window.addEventListener("load", toggleBackToTop);
document.addEventListener("scroll", toggleBackToTop);
