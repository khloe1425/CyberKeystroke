var checkbox = document.querySelector("input[name=theme]");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    trans();

    document.documentElement.setAttribute("data-theme", "dark");

    document.getElementById("setLight").style.visibility = "visible";
    document.getElementById("setDark").style.visibility = "hidden";
    document.getElementById("map-bg").style.opacity = 0.05;
  } else {
    trans();

    document.documentElement.setAttribute("data-theme", "light");

    document.getElementById("setDark").style.visibility = "visible";
    document.getElementById("setLight").style.visibility = "hidden";

    document.getElementById("map-bg").style.opacity = 1;
  }
});

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};
