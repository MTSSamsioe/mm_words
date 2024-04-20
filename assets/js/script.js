
// fuction to open word site in full screen

const toggler = document.getElementById('toggler');
const post = document.getElementById('post');

if (!document.fullscreenEnabled) {
    toggler.parentNode.removedChild(toggler);
    throw new Error('Helskärm är ej tillgänglig');
}

toggler.addEventListener('click', () => {
    if(document.fullscreenElement) {
        document.exitFullscreen();
        
    } else {
        document.documentElement.requestFullscreen();
        
    }
})

document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
        toggler.textContent= 'Stäng Helskärm';
    } else {
        toggler.textContent= 'Helskärm';
    }
})


// ord glow

const words =document.querySelectorAll('.mm-word');

words.forEach(word => {
    word.addEventListener('click', event => {
        word.classList.toggle('word-active')
    })
})