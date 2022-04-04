const btn = document.querySelector('#btn');
const audio = document.querySelector('#myAudio');

document.addEventListener('DOMContentLoaded', () => {
    audio.pause()
})

const time = 8;
let amountTime = time * 60;
let numberOfClick = 0;
let timeID

btn.addEventListener('click', () => {
    numberOfClick++;

    if (audio.paused && numberOfClick%2 != 0) {
        audio.play();
        btn.classList.toggle('pause');
        timeID = setInterval(countDown, 1000)

    }

    else {
        audio.pause();
        btn.classList.toggle('pause');
        clearInterval(timeID)
    }

})

        function countDown() {
            const par = document.querySelector('#par');
            let minute = Math.floor(amountTime/60);
            let second = amountTime%60;
        
            if (second < 10) {
                second = "0" + second;
            }
        
            par.textContent = `${minute} : ${second}`;
            amountTime--;
        
            if (amountTime < 0) {
                stopTimer();
                amountTime = 0;
            }
        
           function stopTimer() {
               clearInterval(timeID);
           }
        }

        const tl = new TimelineMax();

        tl.from('#head', 1.8, {
            opacity: 0,
            y: -100
        })
        
        tl.from('#main', 1.5, {
            opacity: 0,
            x: -300
        })

        gsap.from('#par', 1.5, {
            scale:1.2,
            opacity: 0,
            delay: 1
        })


