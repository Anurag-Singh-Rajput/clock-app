
const secondHand = document.querySelector(".second-container");
const minuteHand = document.querySelector(".minute-container");
const hourHand = document.querySelector(".hour-container");
setInterval(() => {
    const date = new Date();
    const sec = date.getSeconds();
    const hr = date.getHours();
    const min = date.getMinutes();
    const hh = 30 * hr + min / 2;
    secondHand.style.transform = "rotateZ(" + 6 * sec + "deg)";
    hourHand.style.transform = "rotateZ(" + hh + "deg)";
    minuteHand.style.transform = "rotateZ(" + 6 * min + "deg)";
}, 1000);

function toggleTheme() {
    const className = document.querySelector(".clock");
    const body = document.getElementsByTagName("body");
    className.classList.toggle("light");
    body[0].classList.toggle("bodyClass");
    document.querySelector("nav").classList.toggle('navbar-light');
    const navClass = document.getElementById("navID");
    if (document.getElementsByTagName("input")[0].checked) {
        if (navClass.classList.contains("light-nav light-text")) {
            navClass.classList.remove("light-nav light-nav");
        }
        navClass.classList.toggle("navbar-dark bg-dark");
    }
    else {
        if (navClass.classList.contains("navbar-dark bg-dark")) {
            navClass.classList.remove("navbar-dark bg-dark");
        }
        navClass.classList.toggle("light-nav light-text ");
    }

}


// const className = document.querySelector(".clock");
// const checkBox = document.getElementsByClassName("cbox");
// if (checkBox.checked == true) {
//     className.classList.add("dark");
// } else {
//     const body = document.getElementsByTagName("body");
//     body[0].classList.add("bodyClass");
//     className.classList.add("light");

// }