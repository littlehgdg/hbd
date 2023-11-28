// confetti.js

document.addEventListener('DOMContentLoaded', function () {
  const confettiContainer = document.getElementById('confetti-container');

  // Function to create confetti element
  function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confettiContainer.appendChild(confetti);

    // Remove confetti element after animation ends
    confetti.addEventListener('animationend', function () {
      confetti.remove();
    });
  }

  // Function to create multiple confetti elements
  function createConfettiFall() {
    for (let i = 0; i < 50; i++) {
      setTimeout(createConfetti, i * 100); // Create confetti with a delay
    }
  }

  // Trigger confetti fall when the page loads
  createConfettiFall();
});
