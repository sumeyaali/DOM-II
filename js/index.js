// Your code goes here

// This is the Event Listener for 'Mouseover'
const bus = document.querySelector(".bus");
bus.addEventListener("mouseenter",() => {
bus.style.transform = "scale(1.3)";
bus.style.transition = "transform 0.3s";
})

// This is the Event Listener for 'Mouseleave'

bus.addEventListener("mouseleave",() => {
bus.style.transform = "scale(1)";
bus.style.transition = "transform 0.3s";
})


// // This is the Event Listener for `click`

const body = document.querySelector("body");

body.addEventListener("click", () => {
 body.style.backgroundColor="lightGrey";
  console.log("end")
})

// This is the Event Listener for 'wheels

// const body = document.querySelector('.intro');
// body.addEventListener('wheel', () => {
//   body.style.background='lightCyan';
// })
function zoom(event) {
    event.preventDefault();
  
    if (event.deltaY < 0) {
      // Zoom in
      scale *= event.deltaY * -2;
    }
    else {
      // Zoom out
      scale /= event.deltaY * 2;
    }
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('.welcome');
  document.onwheel = zoom;

// This is the Event Listener for 'greyScale'
const firstPic = document.querySelector('.go')
firstPic.addEventListener('click', () => {
    firstPic.style.filter='grayscale(80%)';
})

// This is the Event Listener for 'doubleclick'

const secondPic = document.querySelector('.adventure')
secondPic.addEventListener('dblclick', () => {
    secondPic.style.filter='blur(5px)';
})


// This is the Event Listener for 'resize'

const newPic = document.querySelector("body");
window.addEventListener("resize", () => {
   newPic.style.color = "pink"
})

// // This is the Event Listener for 'boxshadow' 

const logo = document.querySelector(".logo-heading");
logo.addEventListener("mouseenter", () => {
    logo.style.boxShadow = "10px 20px 30px gold";
})


// // This is the Event Listener for 'load'

// window.addEventListener('load', () => {
//         alert('Enjoy Fun Bus!');
//       });
      function myFunction() {
        alert("Enjoy The Ride!");
      }
     

// scroll

const nav = document.querySelectorAll('.main-navigation');
nav.addEventListener("onscroll", () => {
    nav.style.backgroundColor = 'orange'
})

// mouseDown 

// const location = document.querySelector('.content-destination h2');
// location.addEventListener ('onmousedown', () => { 
// location.style.border = '2px dotted orange'
// })
