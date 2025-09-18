function loadStyle() {
    let savedTheme = localStorage.getItem("theme");
    
    // style1 set as default
    if (savedTheme === null) {
      savedTheme = "style1.css";
    }
    
    document.getElementById('theme-link').setAttribute("href", savedTheme);
  }

function switchStyle() {
    const themeLink = document.getElementById('theme-link');
    const currentTheme = themeLink.getAttribute('href');

    const newTheme = currentTheme === 'style1.css' ? 'style2.css' : 'style1.css';
    
    // store so it's remembered by other pages
    localStorage.setItem("theme", newTheme);
  
    // apply new style
    loadStyle();
}
  
// execute script
loadStyle();

document.addEventListener('DOMContentLoaded', () => {
    const styleSwitcherButton = document.getElementById('style-switcher');
    if (styleSwitcherButton) {
      styleSwitcherButton.addEventListener('click', switchStyle);
    }
});