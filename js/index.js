 //navbar effect on scroll-down:
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.backgroundColor = "var(--bg-main)";
  } else {
    document.getElementById("header").style.backgroundColor = "transparent";
    ;
  }
}

//display header's search section
function displaySearch() {
  document.getElementById("search__here").style.display = "block";
  document.getElementById("search__here").style.opacity = 1;
  document.getElementById("search__here").style.animation="Fadein 0.3s linear 0s";
  document.getElementById("search__here").style.animationFillMode="both";
  document.getElementById("nav__content").style.display = "none";
}

//close header's search section
function displayNav() {
  document.getElementById("search__here").style.display = "none";
  document.getElementById("nav__content").style.display = "block";
  document.getElementById("nav__content").style.animation="Fadein 0.3s linear 0.1s";
  document.getElementById("nav__content").style.animationFillMode="both";

}
