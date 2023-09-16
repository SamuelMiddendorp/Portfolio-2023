let darkMode = true;
let changeTheme = () => {
    var root = document.querySelector(':root');
    darkMode = !darkMode;
    let attribs = ["main-bg", "color-text", "color-100","color-300", "color-600" ];

    console.log(darkMode);
    attribs.forEach(tag => {
        root.style.setProperty(`--${tag}`, `var(--${tag}-${darkMode ? "dark" : "light"})`);
    })
}