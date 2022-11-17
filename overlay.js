function openNav() {
  document.getElementById("curtainOverlay").style.transform = "translateX(0)";
}

function closeNav() {
  document.getElementById("curtainOverlay").style.transform =
    "translateX(100%)";
}

const expandMore = document.getElementById("expandMore");
const expandLess = document.getElementById("expandLess");
const openDropdown = document.getElementById("openDropdown");
openDropdown.addEventListener("click", () => {
  document
    .getElementById("overlayDropdown")
    .classList.toggle("display-dropdown-content");

  expandLess.classList.toggle("expand-less");

  if (expandMore.style.display == "none") {
    expandMore.style.display = "flex";
  } else {
    expandMore.style.display = "none";
  }
});

const newExpandMore = document.getElementById("newExpandMore");
const newExpandLess = document.getElementById("newExpandLess");
const openSecondDropdown = document.getElementById("openSecondDropdown");
openSecondDropdown.addEventListener("click", () => {
  document
    .getElementById("secondOverlayDropdown")
    .classList.toggle("display-dropdown-content");

  newExpandLess.classList.toggle("expand-less");

  if (newExpandMore.style.display == "none") {
    newExpandMore.style.display = "flex";
  } else {
    newExpandMore.style.display = "none";
  }
});
