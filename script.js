const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// Splat sound
const splatSound = new Audio('sounds/splat.mp3');

// Get a joke from the API
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const res = await fetch('https://icanhazdadjoke.com', config);
  const data = await res.json();

  jokeEl.textContent = data.joke;
}

// When the button is clicked
jokeBtn.addEventListener('click', () => {
  splatSound.currentTime = 0;
  splatSound.play();

  generateJoke();
});

// Get a joke when the page first opens
generateJoke();