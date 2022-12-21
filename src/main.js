"strict";

const drodownBtn = document.querySelector("#dropdown-btn");
const menu = document.querySelector("#menu");

drodownBtn.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
