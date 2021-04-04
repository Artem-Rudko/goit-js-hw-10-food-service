const themeToggleEl = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector("body");

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

savedThemeCheck();

function onThemeToggleChange(event) {
    if (themeToggleEl.checked) {
        localStorage.setItem('theme',Theme.DARK);
        bodyEl.classList.add(Theme.DARK);
        bodyEl.classList.remove(Theme.LIGHT);
    } else {
        localStorage.setItem('theme',Theme.LIGHT);
        bodyEl.classList.add(Theme.LIGHT);
        bodyEl.classList.remove(Theme.DARK);
    }
};

themeToggleEl.addEventListener('change', onThemeToggleChange);

function savedThemeCheck() {
    const savedTheme = localStorage.getItem('theme');
    // console.log(localStorage.getItem('theme'));

    if (savedTheme === Theme.DARK) {
        themeToggleEl.checked = true;
        bodyEl.classList.add(Theme.DARK);
    }
}