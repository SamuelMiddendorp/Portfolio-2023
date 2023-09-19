let darkMode = true;
const changeTheme = () => {
    let root = document.querySelector(":root");
    darkMode = !darkMode;
    const attribs = ["main-bg", "color-text", "color-100","color-300", "color-600" ];

    console.log(darkMode);
    attribs.forEach(tag => {
        root.style.setProperty(`--${tag}`, `var(--${tag}-${darkMode ? "dark" : "light"})`);
    })
    darkMode ? applyDarkMode() : applyLightMode();

}

const applyDarkMode = () => {
    let moon = document.getElementsByClassName("moon")[0];
    let sun = document.getElementsByClassName("sun")[0];

    moon.classList.add("active");
    moon.classList.remove("inactive");

    sun.classList.add("inactive");
    sun.classList.remove("active");
}
const applyLightMode = () => {
    let moon = document.getElementsByClassName("moon")[0];
    let sun = document.getElementsByClassName("sun")[0];

    sun.classList.add("active");
    sun.classList.remove("inactive");

    moon.classList.add("inactive");
    moon.classList.remove("active");
}