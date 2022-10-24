window.stateOfGame = {
  level: null,
  screen: 'start',
  time: 0,
  cards: null,
  selectedCards: null,
}

function init() {
  function startGame(event, form) {
    event.preventDefault()

    const formData = new FormData(form)

    const level = formData.get('level')

    if (!level) {
      alert('Выбери сложность!')

      return
    }

    alert(`выбраный уровень ${level}`)

    window.stateOfGame.level = level
  }

  function initGame() {
    const form = document.querySelector('.select-level__form')
    form.addEventListener('submit', (event) => startGame(event, form))
  }

  initGame()
}

window.addEventListener('DOMContentLoaded', init)
