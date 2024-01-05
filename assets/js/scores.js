let highscores = JSON.parse(localStorage.getItem('highscores'));

function compareByHighscores(a, b) {
    return b.score - a.score;
}

highscores.sort(compareByHighscores);

const highscoresOlEl = document.getElementById('highscores');

for (i = 0; i < highscores.length; i++) {
    const highscoreLiEl = document.createElement('li');
    highscoreLiEl.textContent = highscores[i].initial + ' - ' + highscores[i].score;
    highscoresOlEl.append(highscoreLiEl);
}

const clearBtn = document.getElementById('clear');

function clearHighscores() {
    localStorage.clear();
    highscoresOlEl.innerHTML = '';
}

clearBtn.addEventListener('click', clearHighscores)