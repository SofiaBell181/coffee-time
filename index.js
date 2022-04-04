const tl = new TimelineMax();

tl.to('h1', 1, {
    opacity: 1,
})

tl.to('a', 1.5, {
    opacity: 1,
    stagger:1,
})


const text = '4 вида кофе для перерыва...';

let i = 0;
let speed = 100;

function display() {
    if (i < text.length) {
        document.querySelector('.par').textContent += text.charAt(i);
        i++;
        setTimeout(display, speed)
    }
}

display()


