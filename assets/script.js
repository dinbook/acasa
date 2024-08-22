let sun = document.getElementById('sun');
let mountains = document.getElementById('mountains');
let clouds = document.getElementById('clouds');
let hills = document.getElementById('hills');
let right = document.getElementById('right');
let left = document.getElementById('left');
let book = document.getElementById('book');

window.addEventListener('scroll', function() {
    let value = this.window.scrollY;

    sun.style.bottom = 125 - value*0.2 + 'vw';
    mountains.style.bottom = 100 - value*0.15 + 'vw';
    clouds.style.right = 40 - value*0.1 + 'vw';
    clouds.style.bottom = 120 - value*0.15 + 'vw';
    hills.style.bottom = 7 - value*0.12 + 'vw';
})

let textElement = document.querySelector('.text');
let textContent = textElement.textContent;
textElement.innerHTML = '';

for (let char of textContent) {
    let span = document.createElement('span');
    span.textContent = char;
    textElement.appendChild(span);
}

let spans = textElement.querySelectorAll('span');
// add scroll event listener; window.innerWidth < 480
window.addEventListener('scroll', () => {
    console.log('scroll');
    let scrollDistance = window.scrollY;
    spans.forEach((span, index) => {
        if (scrollDistance >= (index + 1) * 1.5) {
            span.classList.add('active');
        } else {
            span.classList.remove('active');
        }
    })
})