import App from './app';

export default class GoblinController {
  constructor(app) {
    this.app = app;
    this.goblin = app.goblin;
  }

  goblinClick() {
    this.goblin.addEventListener('click', () => {
      this.goblin.classList.add('hide');
    });
  }

  startGame() {
    const btn = document.getElementById('start');
    btn.addEventListener('mousedown', (event) => {
      event.preventDefault();
      clearInterval(this.app.timerInterval);
      this.app.score = 0;
      this.app.faul = 0;
      this.app.hits.innerText = 'Попаданий: 0';
      this.app.miss.innerText = 'Промахов: 0';
      this.app.start();
    });
  }
}

const app = new App();
const goblinController = new GoblinController(app);
goblinController.goblinClick();
goblinController.startGame();
app.start();
