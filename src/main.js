"strict";

const drodownBtn = document.querySelector("#dropdown-btn");
const menu = document.querySelector("#menu");

console.log(drodownBtn);
console.log(menu);
drodownBtn.addEventListener("click", () => {
  console.log("clicked");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
