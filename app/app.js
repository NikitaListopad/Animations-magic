const aboutText = 'Hello Shop  is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet.';
const aboutTitle = 'Welcome to Hello World Shop';
const contactButtonText = 'Contact us';

(function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show')
            }
        })
    })

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el))
} ());

function getMousePosition(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const anchor = document.getElementById('anchor');
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

    return {angleDeg, anchor}
}

document.addEventListener('mousemove', (e) => {

    const {angleDeg, anchor} = getMousePosition(e)

    const eyes = document.querySelectorAll('.eye');

    if (!anchor.onmouseover) {
        eyes.forEach(eye => {
            eye.style.transform = `rotate(${-45 + angleDeg}deg)`
        })
    }
})

function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;

    const rad = Math.atan2(dy,dx);
    return rad * 180 / Math.PI;
}

(function () {
    const aboutTitleTag = document.querySelector('.aboutTitle');
    const aboutTextTag = document.querySelector('.aboutText');
    const contactButton = document.querySelector('.contact');

    const titleArray = aboutTitle.split(' ');
    aboutTitleTag.innerHTML = `${titleArray.slice(0, 2).join(' ')} </br> <b>${titleArray.slice(2).join(' ')}</b>`

    aboutTextTag.textContent = aboutText;
    contactButton.textContent = contactButtonText;
} ())

function hideHomer() {
    const homerContainer = document.querySelector('.eyesContainer');
    homerContainer.classList.add('hideHomer')
}

function showHomer() {
    const homerContainer = document.querySelector('.eyesContainer');
    setTimeout(() => {
        homerContainer.classList.remove('hideHomer')
        homerContainer.style = ''
    }, 1000)
    homerContainer.style.transform = `translateX(0)`

}