const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const fireworks = document.getElementById('fireworks');

// Fireworks and message when "Yes" is clicked
yesBtn.addEventListener('click', () => {
    fireworks.classList.remove('hidden');
    setTimeout(() => {
        alert("Yay! I can't wait to spend forever with you!");
    }, 2000);
});

// Move "No" button randomly when hovered over
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});