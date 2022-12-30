//menu navbar
let menu = document.querySelector('.menu-icon');
let nav__links = document.querySelector('.nav__links');

menu.onclick = () => {
    nav__links.classList.toggle("open-menu"); 
    menu.classList.toggle("move");
};
window.onscroll = () => {
    nav__links.classList.remove("open-menu"); 
    menu.classList.remove("move");
}
//project 
let valueDispay = document.querySelectorAll(".num");
let interval = 3000;

valueDispay.forEach((valueDispay) => {
    let startValue = 0;
    let endValue = parseInt(valueDispay.getAttribute ("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDispay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});