const tl = new TimelineMax();

tl.from('h1', 1.5, {
    delay:1,
    opacity: 0,
    y: -100,
})

tl.to('a', .8, {
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


