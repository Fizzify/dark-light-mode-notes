const CSS_STYLESHEET = document.getElementById("theme-css");
const TOGGLE_BTN = document.getElementById("toggle-theme");

if (TOGGLE_BTN) TOGGLE_BTN.addEventListener("click", changeTheme);

function changeTheme() {
  // get the current theme
  const oldTheme = getTheme();
  // insert the theme

  const newTheme = oldTheme === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  CSS_STYLESHEET.href = `app/css/${newTheme}.css`;

  // save the new theme and show it
}

function getTheme() {
  let theme = localStorage.getItem("theme");

  if (theme == null) {
    theme = "dark";
    localStorage.setItem("theme", theme);
  }

  return theme;
}

(() => {
  let theme = getTheme();
  CSS_STYLESHEET.href = `app/css/${theme}.css`;
})();
