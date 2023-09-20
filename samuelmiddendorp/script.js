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


let lastKnownScrollPosition = 0;
let ticking = false;

function changeImgPosition(scrollPos) {
    console.log(scrollPos);
    let logoElem = document.getElementById("bamtor");
    let pos = `-${scrollPos * 0.8}px`;
    logoElem.style.left = pos;
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      changeImgPosition(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});