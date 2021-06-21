
    const secondHand = document.querySelector(".second-container");
    const minuteHand = document.querySelector(".minute-container");
    const hourHand = document.querySelector(".hour-container");
setInterval(()=>{
    const date = new Date();
    const sec = date.getSeconds();
    const hr = date.getHours();
    const min = date.getMinutes();
    const hh = 30*hr + min/2;
    secondHand.style.transform = "rotateZ(" + 6*sec +"deg)";
    hourHand.style.transform = "rotateZ(" + hh +"deg)";
    minuteHand.style.transform = "rotateZ(" + 6*min +"deg)";
},1000);