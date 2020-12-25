
const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if(!audio) return;

    key.classList.add('playing')
    audio.currentTime = 0;
    audio.play();
}

const removeTransition = (e) => {
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown',playSound);

const sounds = document.querySelectorAll(".soundy");
const keysForClick = document.querySelectorAll(".keys div");
keysForClick.forEach((k, index) => {
    k.addEventListener("click", function() {
        k.classList.add('playing')
        sounds[index].currentTime = 0;
        sounds[index].play();
    });
});