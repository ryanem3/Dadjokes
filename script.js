const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// async version of generateJoke
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

// listener
jokeBtn.addEventListener('click', generateJoke);

// generate a joke when the page first loads
generateJoke();