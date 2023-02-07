const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");
const title = document.querySelector(".title");
const themeText = document.querySelector(".theme-text");
const input = document.querySelector("#user");
const button = document.querySelector(".btn");

const flipTheme = (theme) => {
  if (theme === "dark") {
    moon.style.display = "none";
    sun.style.display = "block";
    document.body.style.backgroundColor = "#141D2F";
  } else {
  }

  title.classList.toggle("dark");
  themeText.classList.toggle("dark");
};

moon.addEventListener("click", () => flipTheme("dark"));

button.addEventListener("click", (event) => {
  event.preventDefault();
});
