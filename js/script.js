let body = document.querySelector('body');

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
body.prepend(wrapper);

const header = document.createElement('header');
header.className = 'header';
wrapper.prepend(header);
const headerCont = document.createElement('div');
headerCont.className = 'header__container container';
header.append(headerCont);

const title = document.createElement('h1');
title.className = 'title';
title.innerText = 'Minesweeper';
headerCont.prepend(title);


const main = document.createElement('main');
main.className = 'main';
wrapper.append(main);

const mainCont = document.createElement('div');
mainCont.className = 'main__container container';
main.append(mainCont);

const mainInfo = document.createElement('div');
mainInfo.className = 'main__info-box';
mainCont.append(mainInfo);

const decorBox = document.createElement('div');
decorBox.className = 'main__decor-box';
mainInfo.append(decorBox);

// const colorsBox = document.createElement('div');
// colorsBox.className = 'main__colors-box';
// decorBox.append(colorsBox);
// const decorText = document.createElement('div');
// decorText.className = 'main__text-color';
// colorsBox.append(decorText);
// decorText.insertAdjacentHTML('beforeend', `
//   <span>M</span>
//   <span>o</span>
//   <span>o</span>
//   <span>d</span>

//   <span>c</span>
//   <span>o</span>
//   <span>l</span>
//   <span>o</span>
//   <span>r</span>
//   `);
// const colors = document.createElement('div');
// colors.className = 'main__colors';
// colorsBox.append(colors);
// const colorsInput = document.createElement('input');
// colorsInput.className = 'main__colors-input';
// colorsInput.type = 'color';
// colorsInput.value = '#62806c';
// colors.append(colorsInput);

const nightDay = document.createElement('div');
nightDay.className = 'main__night-day';
decorBox.append(nightDay);
const toggle = document.createElement('div');
toggle.className = 'main__night-day_toggle';
nightDay.append(toggle);

const tableButton = document.createElement('a');
tableButton.className = 'game__result-button';
tableButton.innerText = 'Results';
tableButton.href = 'javascript:void(0);';
mainInfo.append(tableButton);

const settings = document.createElement('div');
settings.className = 'game__settings settings';
mainInfo.after(settings);


const levelBox = document.createElement('fieldset');
levelBox.className = 'settings__level-box';
settings.append(levelBox);



const inputBox1 = document.createElement('fieldset');
inputBox1.className = 'settings__input-box';
levelBox.append(inputBox1);
const levelEasyIn = document.createElement('input');
levelEasyIn.className = 'settings__level-easy-input level level-input';
levelEasyIn.id = 'easy';
levelEasyIn.type = 'radio';
levelEasyIn.name = 'level';
levelEasyIn.value = 'easy';//надо подумать
levelEasyIn.checked = true;
inputBox1.append(levelEasyIn);
const levelEasy = document.createElement('label');
levelEasy.className = 'settings__level-easy-label level level-label';
levelEasy.setAttribute('for', 'easy');
levelEasy.innerText = 'Easy';
inputBox1.append(levelEasy);

const inputBox2 = document.createElement('fieldset');
inputBox2.className = 'settings__input-box';
levelBox.append(inputBox2);
const levelMediumIn = document.createElement('input');
levelMediumIn.className = 'settings__level-medium-input level level-input';
levelMediumIn.id = 'medium';
levelMediumIn.type = 'radio';
levelMediumIn.name = 'level';
levelMediumIn.value = 'medium';//надо подумать
inputBox2.append(levelMediumIn);
const levelMedium = document.createElement('label');
levelMedium.className = 'settings__level-medium-label level level-label';
levelMedium.setAttribute('for', 'medium');
levelMedium.innerText = 'Medium';
inputBox2.append(levelMedium);

const inputBox3 = document.createElement('fieldset');
inputBox3.className = 'settings__input-box';
levelBox.append(inputBox3);
const levelHardIn = document.createElement('input');
levelHardIn.className = 'settings__level-hard-input level level-input';
levelHardIn.id = 'hard';
levelHardIn.type = 'radio';
levelHardIn.name = 'level';
levelHardIn.value = 'hard';//надо подумать
inputBox3.append(levelHardIn);
const levelHard = document.createElement('label');
levelHard.className = 'settings__level-hard-label level level-label';
levelHard.setAttribute('for', 'hard');
levelHard.innerText = 'Hard';
inputBox3.append(levelHard);



const numbersBox = document.createElement('div');
numbersBox.className = 'settings__numbers-box';
settings.append(numbersBox);

const balanceMineImg = document.createElement('div');
balanceMineImg.className = 'settings__mine-balance-img';
balanceMineImg.innerText = '🚩';
numbersBox.append(balanceMineImg);
const balanceMine = document.createElement('div');
balanceMine.className = 'settings__mine-balance';
balanceMine.innerText = 10;
numbersBox.append(balanceMine);

// const play = document.createElement('a');
// play.className = 'settings__play';
// play.innerText = '▶️';
// play.href = 'javascript:void(0);';
// settings.append(play);
const timeImg = document.createElement('div');
timeImg.className = 'settings__time-img';
timeImg.innerText = '⌛️';
numbersBox.append(timeImg);
const time = document.createElement('div');
time.className = 'settings__time';
time.innerText = 0;
numbersBox.append(time);

// const pause = document.createElement('a');
// pause.className = 'settings__pause';
// pause.innerText = '⏸';
// pause.href = 'javascript:void(0);';
// settings.append(pause);

const clickImg = document.createElement('div');
clickImg.className = 'settings__click-img';
clickImg.innerText = '🎓';
numbersBox.append(clickImg);
const clickBuild = document.createElement('div');
clickBuild.className = 'settings__click';
clickBuild.innerText = 0;
numbersBox.append(clickBuild);


const settingsMine = document.createElement('label');
settingsMine.className = 'settings__mine-label';
settingsMine.setAttribute('for', 'mine');
settingsMine.innerText = '💣';
settings.append(settingsMine);
const settingsMineIn = document.createElement('input');
settingsMineIn.className = 'settings__mine-input';
settingsMineIn.id = 'mine';
settingsMineIn.type = 'range';
settingsMineIn.min = '10';
settingsMineIn.max = '99';
settingsMineIn.setAttribute('value', '10');
settingsMine.append(settingsMineIn);
const settingsMineText = document.createElement('span');
settingsMineText.id = 'numMinesOutput';
settingsMineText.innerText = '10';
settingsMineIn.after(settingsMineText);



const game = document.createElement('div');
game.className = 'main__game game';
mainCont.append(game);
const gameWrapper = document.createElement('div');
gameWrapper.className = 'game__wrapper';
game.append(gameWrapper);

const gameLights = document.createElement('div');
gameLights.className = 'game__lights';
gameWrapper.append(gameLights);

const gameArea = document.createElement('div');
gameArea.className = 'game__area';
gameWrapper.append(gameArea);

const gameBox = document.createElement('div');
gameBox.className = 'game__box';
gameArea.append(gameBox);



const gameButton = document.createElement('a');
gameButton.className = 'game__button';
gameButton.innerText = 'New Game';
gameButton.href = 'javascript:void(0);';
gameWrapper.append(gameButton);

const gameEnd = document.createElement('div');
gameEnd.className = 'game__end';
gameWrapper.append(gameEnd);
const gameEndText = document.createElement('div');
gameEndText.className = 'game__end-text';
gameEnd.append(gameEndText);




const tableBox = document.createElement('div');
tableBox.className = 'main__table table';
mainCont.append(tableBox);
const tableInfo = document.createElement('table');
tableInfo.className = 'table__info';
tableBox.append(tableInfo);



const tableHead = document.createElement('thead');
tableHead.className = 'table__head';
tableHead.innerText = 'Your best results';
tableInfo.append(tableHead);

const tableRowHead = document.createElement('tr');
tableRowHead.className = 'table__head-row';
tableHead.append(tableRowHead);
const tableNumber = document.createElement('th');
tableNumber.className = 'table__head-number head-column';
tableNumber.innerText = '№';
tableRowHead.append(tableNumber);
const tableTime = document.createElement('th');
tableTime.className = 'table__head-time head-column';
tableTime.innerText = 'Time';
tableRowHead.append(tableTime);
const tableMoves = document.createElement('th');
tableMoves.className = 'table__head-moves head-column';
tableMoves.innerText = 'Moves';
tableRowHead.append(tableMoves);
const tableLevel = document.createElement('th');
tableLevel.className = 'table__head-level head-column';
tableLevel.innerText = 'Level';
tableRowHead.append(tableLevel);
const tableMines = document.createElement('th');
tableMines.className = 'table__head-mines head-column';
tableMines.innerText = 'Mines';
tableRowHead.append(tableMines);
const tableBody = document.createElement('tbody');
tableBody.className = 'table__body';
tableInfo.append(tableBody);






const audios = document.createElement('div');
audios.className = 'main__audio audio';
mainCont.append(audios);

const audioClick = document.createElement('audio');
audioClick.className = 'audio__click audio-item';
audioClick.src = './audio/click.mp3';
audios.append(audioClick);
const audioFlag = document.createElement('audio');
audioFlag.className = 'audio__flag audio-item';
audioFlag.src = './audio/flag.mp3';
audios.append(audioFlag);
const audioWin = document.createElement('audio');
audioWin.className = 'audio__win audio-item';
audioWin.src = './audio/win.mp3';
audios.append(audioWin);
const audioDefeat = document.createElement('audio');
audioDefeat.className = 'audio__defeat audio-item';
audioDefeat.src = './audio/defeat.mp3';
audios.append(audioDefeat);

const onOf = document.createElement('button');
onOf.className = 'settings__on-of';
onOf.innerText = 'Sound';
onOf.addEventListener('click', toggleAllAudio);

audios.append(onOf);

const footerA = document.createElement('footer');
footerA.className = 'footer';
wrapper.append(footerA);




const footerCont = document.createElement('div');
footerCont.className = 'footer__container container';
footerA.append(footerCont);

const link = document.createElement('a');
link.className = 'footer__link';
link.href = 'https://github.com/rolling-scopes-school/katerinamysl-JSFE2023Q1/pull/34';
footerCont.append(link);
const iconD = document.createElement('img');
iconD.className = 'footer__icon-d';
iconD.src = './img/github.png';
iconD.alt = 'github icon';
link.append(iconD);
const iconN = document.createElement('img');
iconN.className = 'footer__icon-n';
iconN.src = './img/github-night.png';
iconN.alt = 'github icon';
link.append(iconN);

const textLink = document.createElement('div');
textLink.className = 'footer__text-link';
textLink.innerText = 'Minesweeper';
link.append(textLink);

const nameS = document.createElement('div');
nameS.className = 'footer__name';
nameS.innerText = 'by Kate Mysliuchyk';
footerCont.append(nameS);

// настройки игрового поля



const levelButtons = document.querySelectorAll('.level');
const timer = document.querySelector('.settings__time');
let timerRunning = false;
let startTime = 0;
// let pauseTime = 0;
let seconds = 0;
let elapsedTime = 0;
let intervalId = null;
let gameOver = false;
let selectedLevel;
let selectedLevelRadio;
let selectedRadioButton;
let selectedlevel;
let countnb;
let interval
let cells;
let gameOverSave = localStorage.getItem('gameOverSave');
let click = false;
const clickSave = JSON.parse(localStorage.getItem('clickSave'));

if (clickSave) {
  click = clickSave;
}


if (JSON.parse(gameOverSave) === true) {
  gameOver = true;
} else if (JSON.parse(gameOverSave) === false || gameOverSave === undefined || gameOverSave === null) {
  gameOver = false;
}
localStorage.setItem('gameOverSave', gameOver)



let wrapperActive = document.querySelector('.wrapper');

let wrapperActiveGet = JSON.parse(localStorage.getItem(`wrapperActiveLocal`));

if (wrapperActiveGet === null) {
  wrapperActive.classList.remove('active');

} else {
  wrapperActiveGet.forEach(className => {
    wrapperActive.classList.add(className);
  });
  wrapperActive.classList.add('active');
}






// localStorage.clear();

let boardSize = [10, 10];

let radioButtons = document.querySelectorAll('input[type="radio"]');
let levels = document.querySelectorAll('input[name="level"]');
selectedRadioButton = radioButtons[0];
selectedRadioButton.checked = true;
selectedlevel = selectedRadioButton.value;


// localStorage.setItem('boardSizeSave', JSON.stringify(boardSize))
// localStorage.setItem('savedLevel', selectedlevel);
// localStorage.setItem('selectedRadioButton', selectedRadioButton);

let savedLevelGet = localStorage.getItem('savedLevel');
let savedBoardSize = JSON.parse(localStorage.getItem('boardSizeSave'));

if (savedLevelGet) {

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].value === savedLevelGet) {
      radioButtons[i].checked = true;
      break;
    }
  }
  selectedlevel = savedLevelGet;


  if (savedBoardSize) {
    boardSize = savedBoardSize;

  }
}

const audioElementClick = document.querySelector('.audio__click');
const audioElementFlag = document.querySelector('.audio__flag');
const audioElementWin = document.querySelector('.audio__win');
const audioElementDefeat = document.querySelector('.audio__defeat');



let gameEndContent = '';
let box = document.querySelector('.game__box');
let count = 0;


let countClicksget = localStorage.getItem('countClicks');
if (countClicksget)
  count = Number(countClicksget);

const countClicks = document.querySelector('.settings__click');

if (countClicksget) {
  countClicks.innerText = localStorage.getItem('countClicks');
} else {
  countClicks.innerText = 0;
}



// if (!gameOver) {
//   intervalId = null;
// }

// function endTimer() {
//   stopTimer();
//   clearInterval(intervalId);
//   localStorage.removeItem('timerData');
//   gameEnd.classList.add('active');
// }



const indexClickSave = localStorage.getItem('indexClickSave');
let savedSeconds = localStorage.getItem('seconds');

// const playButton = document.querySelector('.settings__play');
// playButton.addEventListener('click', () => {
//   clearInterval(interval)
//   interval = setInterval(startTimer, 1000)



//   // if (!timerRunning) {
//   //   if (pauseTime !== 0) {
//   //     startTime += new Date().getTime() - pauseTime;
//   //   }
//   //   startTimer();
//   // }

// })
// const pauseButton = document.querySelector('.settings__pause');
// pauseButton.addEventListener('click', () => {
//   clearInterval(interval)


//   // if (timerRunning) {

//   //   stopTimer();
//   // }

// })


if (!JSON.parse(gameOverSave) && indexClickSave === null) {
  seconds = 0;

} else if (JSON.parse(gameOverSave)) {
  seconds = savedSeconds
} else {

  seconds = savedSeconds
  clearInterval(interval)
  interval = setInterval(startTimer, 1000)
}



function startTimer() {

  seconds++
  timer.innerText = seconds
  timerRunning = true;
  //  const savedSeconds = localStorage.getItem('seconds');
  // if (savedSeconds) {
  //   elapsedTime = parseInt(savedSeconds, 10);
  // } else {
  //   elapsedTime = 0;
  // }

  // startTime = new Date().getTime() - elapsedTime;

  // intervalId = setInterval(function () {
  //   if (!gameOver) {
  //     let currentTime = new Date().getTime();
  //     elapsedTime = Math.floor((currentTime - startTime) / 1000);
  //     timer.innerHTML = elapsedTime;

  localStorage.setItem('seconds', seconds)
  //   }
  // }, 1000);
}
function endTimer() {
  clearInterval(interval);
  timerRunning = false;
  // seconds = 0;
  timer.innerText = seconds
  // clearF()
  //   pauseTime = new Date().getTime();
}
// function clearF() {
//   seconds = 0;
//   timer.textContent = 0
// }

// window.addEventListener('load', function () {
//   const savedSeconds = localStorage.getItem('seconds');
//   if (savedSeconds) {
//     elapsedTime = parseInt(savedSeconds, 10);
//     timer.innerHTML = elapsedTime;
//   }
// });



let mines = [];

const minesArray = JSON.parse(localStorage.getItem('minesArray'));

if (minesArray && minesArray.length !== 0) {

  mines = minesArray;

} else if (!minesArray || gameOverSave === undefined || gameOverSave === null || minesArray.length === 0) {

  // mines = [];

  const keysToRemove = ['minesArray'];
  keysToRemove.forEach(key => {
    localStorage.removeItem(key);
  });

}
// localStorage.setItem('minesArray', JSON.stringify(mines));

// localStorage.clear();

let numbers = [];
let numberColors = ['#3498db', '#2ecc71', '#e74c3c', '#9b59b6', '#f1c40f', '#1abc9c', '#34495e', '#7f8c8d',];



let numMinesInput1 = document.querySelector('.settings__mine-input');
let balance = document.querySelector('.settings__mine-balance');


// localStorage.clear();

levelBox.addEventListener('change', () => {
  stopAudio()
  // localStorage.clear();
  clear();
  cells.forEach(cell => {
    let coordinate = cell.getAttribute('data-cell');
    const coordin = coordinate.split(',');
    const x = coordin[0];
    const y = coordin[1];

    const keyToRemove = `cell-${x}-${y}`;
    localStorage.removeItem(keyToRemove);
  });
  const keysToRemove = ['minesArray', 'indexClickSave', 'countClicks', 'seconds', 'mineBalance', 'wrapperActiveLocal', 'gameEndLocal', , 'gameEndLocalText'];
  keysToRemove.forEach(key => {
    localStorage.removeItem(key);
  });
  updateBoardSize();
  createBoard();
  endTimer()


});



function updateBoardSize() {
  let radioButtons = document.querySelectorAll('input[type="radio"]');

  // let selectedLevelRadio = null;
  // console.log(selectedLevelRadio)

  for (let i = 0; i < radioButtons.length; i++) {

    if (radioButtons[i].checked) {
      selectedRadioButton = radioButtons[i];

      break;
    }
  }


  if (selectedRadioButton) {
    selectedLevel = selectedRadioButton.value;

    localStorage.setItem('savedLevel', selectedLevel);
    if (!inputChangedByUser) {
      switch (selectedLevel) {
        case 'easy':
          boardSize = [10, 10];
          numMines = 10;
          break;
        case 'medium':
          boardSize = [15, 15];
          numMines = 40;
          break;
        case 'hard':
          boardSize = [25, 25];
          numMines = 99;
          break;
      }



      localStorage.setItem('boardSizeSave', JSON.stringify(boardSize));
      localStorage.setItem('numMinesSave', numMines);

      numMinesInput1.value = numMines;
      numMinesOutput.innerText = numMines;
      balance.innerText = numMines;

    }
    localStorage.setItem('boardSizeSave', JSON.stringify(boardSize));
    localStorage.setItem('numMinesSave', JSON.stringify(numMines));

    const savedBoardSize = JSON.parse(localStorage.getItem('boardSizeSave'));



    boardSize = savedBoardSize;
    numMinesOutput.innerText = numMines;
    balance.innerText = numMines;
  }





}

let numMines = 10;
const savednumMines = JSON.parse(localStorage.getItem('numMinesSave'));
numMines = savednumMines || 10;
let radioButtons1 = document.querySelectorAll('input[type="radio"]');

let savedLevelGet1


numMinesInput1.addEventListener('input', () => {
  stopAudio()
  clear();
  createBoard();
  // localStorage.clear();
  numMines = parseInt(numMinesInput1.value);
  if (inputChangedByUser) {
    localStorage.setItem('numMinesSave', JSON.stringify(numMines));
    savedLevelGet1 = localStorage.getItem('savedLevel');
    if (savedLevelGet1) {
      for (let i = 0; i < radioButtons1.length; i++) {
        if (radioButtons1[i].value === savedLevelGet1) {
          radioButtons1[i].checked = true;
          break;
        }
      }
      selectedlevel = savedLevelGet1;

      balance.innerText = numMines;

    }

  } else {
    // const savedLevel = localStorage.getItem('savedLevel');
    switch (selectedlevel) {
      case 'easy':
        numMines = 10;
        break;
      case 'medium':
        numMines = 40;
        break;
      case 'hard':
        numMines = 99;
        break;
      default:
        numMines = 10;
    }
    numMinesInput1.value = numMines;
  }
  endTimer()



});

balance.innerText = numMines;


// lS для количества мин
const input = document.querySelector('.settings__mine-input');
const span = document.querySelector('#numMinesOutput');


const valueBalance = document.querySelector('.settings__mine-balance');
let mineBalance = localStorage.getItem('mineBalance')

if (mineBalance) {
  countnb = mineBalance;
  valueBalance.innerText = countnb;

} else {
  valueBalance.innerText = numMines;
}




//   count = Number(countClicksget);

// const countClicks = document.querySelector('.settings__click');
// console.log(countClicksget)
// if (countClicksget) {
//   countClicks.innerText = localStorage.getItem('countClicks');
// } else {
//   countClicks.innerText = 0;
// }




let inputChangedByUser = false; // флаг, указывающий, был ли ввод изменен пользователем


input.value = savednumMines || 10;

//  localStorage.clear();

// Установка значения в lS
input.addEventListener('input', (event) => {
  localStorage.setItem('savedValue', event.target.value);

  span.innerText = event.target.value;
  inputChangedByUser = true;

});
// Загрузка в span
const savedValue = localStorage.getItem('savedValue');
const savedSpan = localStorage.getItem('savedSpan');

if (savedValue === null || savedValue === undefined) {
  span.innerText = input.value;
} else {
}
if (!savedSpan && !savedValue) {
  span.innerText = input.value;
  localStorage.setItem('savedSpan', input.value);
} else if (savedSpan && !inputChangedByUser) {
  span.innerText = input.value;
}

// Установка значения при изменении input
input.addEventListener('change', () => {
  cells.forEach(cell => {
    let coordinate = cell.getAttribute('data-cell');
    const coordin = coordinate.split(',');
    const x = coordin[0];
    const y = coordin[1];

    const keyToRemove = `cell-${x}-${y}`;
    localStorage.removeItem(keyToRemove);
  });
  const keysToRemove = ['minesArray', 'indexClickSave'];
  keysToRemove.forEach(key => {
    localStorage.removeItem(key);
  });
  clear();
  updateBoardSize();
  createBoard();
  endTimer()



  if (inputChangedByUser) {
    localStorage.setItem('savedSpan', input.value);
  }
  inputChangedByUser = false;



});




let indexClick;
let clickCount = document.querySelector('.settings__click');
let firstClick = true;







function createBoard() {



  box.innerHTML = '';
  mines = [];

  for (let i = 0; i < boardSize[0]; i++) {
    const row = document.createElement('div');
    row.className = 'game__row';
    box.append(row);

    for (let j = 0; j < boardSize[1]; j++) {
      const cell = document.createElement('div');
      cell.className = 'game__cell closed';
      row.append(cell);
    }
  }

  let totalCells = boardSize[0] * boardSize[1];

  let massivCells = Array.from({ length: totalCells }, (_, ind) => ind);
  cells = document.querySelectorAll('.game__cell');

  cells.forEach((cell, ind) => {
    const x = Math.floor(ind / boardSize[1]);
    const y = ind % boardSize[1];
    cell.setAttribute('data-cell', `${x},${y}`);
  })

  // Получаем координаты ячейки из атрибута data-cell
  cells.forEach(cell => {
    let coordinate = cell.getAttribute('data-cell');
    const coordin = coordinate.split(',');
    const x = coordin[0];
    const y = coordin[1];

    let savedCell = JSON.parse(localStorage.getItem(`cell-${x}-${y}`)) || {};

  });

  // Итерируемся по сохраненным ячейкам и применяем значения из объекта

  const savedCells = Object.keys(localStorage)
    .filter(key => key.startsWith('cell-'))
    .map(key => ({
      key,
      value: JSON.parse(localStorage.getItem(key))
    }));



  cells.forEach(cell => {
    let coordinate = cell.getAttribute('data-cell');
    const [x, y] = coordinate.split(',');
    const savedCell = savedCells.find(savedCell => savedCell.key === `cell-${x}-${y}`);
    if (savedCell) {
      const { classNames, textColor, num } = savedCell.value;
      if (classNames && classNames.length) {
        cell.setAttribute('class', classNames.join(' '));
      }
      if (textColor) {
        cell.setAttribute('style', `color: ${textColor}`);
      }

      if (num) {
        cell.innerText = num;
      }
    }
  });



  for (let x = 0; x < boardSize[0]; x++) {
    for (let y = 0; y < boardSize[1]; y++) {
      let savedCell = JSON.parse(localStorage.getItem(`cell-${x}-${y}`));
      if (savedCell) {
        let cell = document.querySelector(`.game__cell[data-cell="${x},${y}"]`);
        if (savedCell.classNames) {
          cell.classList = savedCell.classNames.join(' ');
        }
        if (savedCell.innerHTML) {


          cell.innerHTML = savedCell.innerHTML;
        }
        cell.style.color = savedCell.color;
      }
    }
  }


  box = document.querySelector('.game__box')

  box.addEventListener('click', (event) => {

    let cell = event.target.closest('.game__cell');


    if (firstClick && !cell.classList.add('clicked') && !gameOver) {

      clearInterval(interval)
      interval = setInterval(startTimer, 1000)
      // startTimer();
      // Действия при первом клике на ячейку
      cell.classList.add('clicked');

      indexClick = Array.from(cells).indexOf(cell);
      const indexClickSave = localStorage.getItem('indexClickSave');
      if (indexClickSave) {
        indexClick = indexClickSave;
      }

      localStorage.setItem('indexClickSave', indexClick)
      firstClick = false;
      localStorage.setItem('firstClickSave', firstClick)
      if (indexClick || indexClick === 0) {
        click = true;
        localStorage.setItem('clickSave', click)
      } else {
        click = false;
        localStorage.setItem('clickSave', click)
      }


      const minesArray = JSON.parse(localStorage.getItem('minesArray'));
      if (minesArray) {
        mines = minesArray;
      } else {
        mines = [];
      }
      let totalCells = boardSize[0] * boardSize[1];
      let maxMinesToPlace = totalCells - 1;


      let numMinesToPlace = Math.min(numMines, maxMinesToPlace);

      let massiv = Array.from({ length: totalCells }, (_, index) => index);
      let massivIndex = massiv.indexOf(indexClick);
      if (massivIndex > -1) {
        massiv.splice(massivIndex, 1);
      }



      while (mines.length < numMinesToPlace && click) {

        let randomIndex = Math.floor(Math.random() * massiv.length);
        let randomNum = massiv[randomIndex];

        if (!mines.includes(randomNum)) {
          mines.push(randomNum);
          localStorage.setItem('minesArray', JSON.stringify(mines))
        }
      }

      cells = document.querySelectorAll('.game__cell');

      cells.forEach((cell, index) => {

        let numSurroundingMines = 0;
        const x = Math.floor(index / boardSize[1]);
        const y = index % boardSize[1];
        // cell.setAttribute('data-cell', `${x},${y}`);


        if (mines.includes(index)) {
          cell.classList.add('mine');
        } else {
          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              const neighborX = x + i;
              const neighborY = y + j;
              if (i === 0 && j === 0) continue;
              if (neighborX >= 0 && neighborX < boardSize[0] && neighborY >= 0 && neighborY < boardSize[1]) {
                const neighborIndex = neighborX * boardSize[0] + neighborY;
                if (mines.includes(neighborIndex)) {
                  numSurroundingMines++;

                }
              }
            }
          }
        }


        if (numSurroundingMines > 0) {
          cell.setAttribute('data-num', numSurroundingMines);
        }

      });

      if (numMines < mines.length) {
        while (mines.length > numMines) {
          const removedMineIndex = mines.pop();
          cells[removedMineIndex].classList.remove('mine');
        }
      }
      openCell(cell);
    } else if (!gameOver) {

      // Действия при последующих кликах на ячейку
      if (cell.classList.contains('mine')) {
        endGame();
      } else {
        openCell(cell);
      }

    }

  });

  /* rightclick */
  box.oncontextmenu = (e) => {
    let cell = e.target.closest('.game__cell');
    e.preventDefault();
    if (gameOver) return;
    if (!cell.classList.contains('opened')) {
      if (!cell.classList.contains('flagged')) {
        audioElementFlag.play();
        cell.innerHTML = '🚩';
        cell.classList.add('flagged');

        let coordinate = cell.getAttribute('data-cell');
        const coordin = coordinate.split(',');
        const x = coordin[0];
        const y = coordin[1];

        let savedCell = JSON.parse(localStorage.getItem(`cell-${x}-${y}`)) || {};

        if (savedCell.classList) {
          savedCell.classNames = savedCell.classNames.concat(Array.from(cell.classList));
        } else {
          savedCell.classNames = Array.from(cell.classList);
        }
        savedCell.classNames.push('flagged');
        savedCell.innerHTML = '🚩';
        localStorage.setItem(`cell-${x}-${y}`, JSON.stringify(savedCell));


        let nb = parseInt(balance.innerText);
        countnb = nb - 1
        balance.innerText = countnb;
        localStorage.setItem('mineBalance', countnb)
      } else if (cell.classList.contains('flagged')) {
        audioElementFlag.play();
        cell.innerHTML = '';
        cell.classList.remove('flagged');

        let coordinate = cell.getAttribute('data-cell');
        const coordin = coordinate.split(',');
        const x = coordin[0];
        const y = coordin[1];

        let savedCell = JSON.parse(localStorage.getItem(`cell-${x}-${y}`)) || {};

        if (savedCell.classList) {
          savedCell.classNames = savedCell.classNames.concat(Array.from(cell.classList));
        } else {
          savedCell.classNames = Array.from(cell.classList);
        }


        let index = savedCell.classNames.indexOf('flagged');
        if (index !== -1) {
          savedCell.classNames.splice(index, 1);
        }
        savedCell.innerHTML = '';


        localStorage.setItem(`cell-${x}-${y}`, JSON.stringify(savedCell));



        let nb = parseInt(balance.innerText);
        countnb = nb + 1
        balance.innerText = countnb;
        localStorage.setItem('mineBalance', countnb)
      }
    }
  }

  mines = mines.filter(mineIndex => cells[mineIndex].classList.contains('mine'));
}
createBoard();

let firstClickSave = JSON.parse(localStorage.getItem('firstClickSave'));
let gameOverSave1 = JSON.parse(localStorage.getItem('gameOverSave'));
let clickSave1 = JSON.parse(localStorage.getItem('clickSave'));

// console.log(firstClickSave === null)
// console.log(JSON.parse(localStorage.getItem('gameOverSave')))
// console.log(firstClickSave)

// console.log(firstClickSave && JSON.parse(localStorage.getItem('gameOverSave')))


if (firstClickSave === false && gameOverSave1 === false && clickSave1 === true) {

  const minesArray = JSON.parse(localStorage.getItem('minesArray'));

  mines = minesArray;

  cells = document.querySelectorAll('.game__cell');

  cells.forEach((cell, index) => {
    let numSurroundingMines = 0;
    const x = Math.floor(index / boardSize[1]);
    const y = index % boardSize[1];

    if (mines.includes(index)) {
      cell.classList.add('mine');
    } else {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const neighborX = x + i;
          const neighborY = y + j;
          if (i === 0 && j === 0) continue;
          if (neighborX >= 0 && neighborX < boardSize[0] && neighborY >= 0 && neighborY < boardSize[1]) {
            const neighborIndex = neighborX * boardSize[0] + neighborY;
            if (mines.includes(neighborIndex)) {
              numSurroundingMines++;

            }
          }
        }
      }
    }


    if (numSurroundingMines > 0) {
      cell.setAttribute('data-num', numSurroundingMines);
    }

  });
}
//   console.log('g')
//   firstClick = true
// } 
// else {
//   console.log('h')
//   firstClick = false
//   const minesArray = JSON.parse(localStorage.getItem('minesArray'));
//   mines = minesArray;
//   cells = document.querySelectorAll('.game__cell');

//   cells.forEach((cell, index) => {
//     let numSurroundingMines = 0;
//     const x = Math.floor(index / boardSize[1]);
//     const y = index % boardSize[1];

//     if (mines.includes(index)) {
//       cell.classList.add('mine');
//     } else {
//       for (let i = -1; i <= 1; i++) {
//         for (let j = -1; j <= 1; j++) {
//           const neighborX = x + i;
//           const neighborY = y + j;
//           if (i === 0 && j === 0) continue;
//           if (neighborX >= 0 && neighborX < boardSize[0] && neighborY >= 0 && neighborY < boardSize[1]) {
//             const neighborIndex = neighborX * boardSize[0] + neighborY;
//             if (mines.includes(neighborIndex)) {
//               numSurroundingMines++;

//             }
//           }
//         }
//       }
//     }


//     if (numSurroundingMines > 0) {
//       cell.setAttribute('data-num', numSurroundingMines);
//     }

//   });
// }




cells = document.querySelectorAll('.game__cell');



// проверка на бомбу
const openCell = (cell) => {
  audioElementClick.play();
  if (gameOver) return;
  if (cell.classList.contains('opened') || cell.classList.contains('flagged')) return;
  cell.classList.remove('closed');
  cell.classList.add('opened');



  let coordinate = cell.getAttribute('data-cell');
  const coordin = coordinate.split(',');
  const x = coordin[0];
  const y = coordin[1];

  let savedCell = JSON.parse(localStorage.getItem(`cell-${x}-${y}`)) || {};

  if (savedCell.classList) {
    savedCell.classNames = savedCell.classNames.concat(Array.from(cell.classList));
  } else {
    savedCell.classNames = Array.from(cell.classList);
  }
  savedCell.classNames.push('opened');
  localStorage.setItem(`cell-${x}-${y}`, JSON.stringify(savedCell));

  if (!cell.classList.contains('mine')) {

    let num = cell.getAttribute('data-num');
    if (num != null) {
      cell.classList.add('opened');
      cell.classList.remove('closed');
      cell.innerHTML = num;
      cell.style.color = numberColors[num - 1];
      let coordinate = cell.getAttribute('data-cell');
      const coordin = coordinate.split(',');
      const x = coordin[0];
      const y = coordin[1];
      const { dataset, style } = cell;
      let savedCell = JSON.parse(localStorage.getItem(`cell-${x}-${y}`)) || {};
      if (savedCell.classList) {
        savedCell.classNames = savedCell.classNames.concat(Array.from(cell.classList));
      } else {
        savedCell.classNames = Array.from(cell.classList);
      }
      // savedCell['data-num'] = num;
      // savedCell.textColor = numberColors[num - 1];

      savedCell['textColor'] = cell.style.color;
      cell.style.color = numberColors[num - 1];
      Object.keys(dataset).forEach(key => {
        savedCell[key] = dataset[key];
      });

      localStorage.setItem(`cell-${x}-${y}`, JSON.stringify(savedCell));






      setTimeout(() => {
        let opencells = Array.from(document.querySelectorAll('.opened'));

        let totalCells = boardSize[0] * boardSize[1];
        if (opencells.length === totalCells - numMines) {
          checkVictory();
        }
      }, 100);
      return;
    }
    checkCell(cell, coordinate);
  } else if (cell.classList.contains('mine')) {
    endGame();
  }
}


// проверка правильной
const checkCell = (cell, coordinate) => {

  let coords = coordinate.split(',');
  let x = parseInt(coords[0]);
  let y = parseInt(coords[1]);

  // проверка соседних ячеек
  setTimeout(() => {

    if (x > 0) {
      let targetW = document.querySelectorAll(`[data-cell="${x - 1},${y}"`)[0];
      setTimeout(() => openCell(targetW, `${x - 1},${y}`), 25);
    }
    if (x < boardSize[0] - 1) {
      let targetE = document.querySelectorAll(`[data-cell="${x + 1},${y}"`)[0];
      setTimeout(() => openCell(targetE, `${x + 1},${y}`), 25);
    }
    if (y > 0) {
      let targetN = document.querySelectorAll(`[data-cell="${x},${y - 1}"]`)[0];
      setTimeout(() => openCell(targetN, `${x},${y - 1}`), 25);
    }
    if (y < boardSize[1] - 1) {
      let targetS = document.querySelectorAll(`[data-cell="${x},${y + 1}"]`)[0];
      setTimeout(() => openCell(targetS, `${x},${y + 1}`), 25);
    }
    if (x > 0 && y > 0) {
      let targetNW = document.querySelectorAll(`[data-cell="${x - 1},${y - 1}"`)[0];
      setTimeout(() => openCell(targetNW, `${x - 1},${y - 1}`), 25);
    }
    if (x < boardSize[0] - 1 && y < boardSize[1] - 1) {
      let targetSE = document.querySelectorAll(`[data-cell="${x + 1},${y + 1}"`)[0];
      setTimeout(() => openCell(targetSE, `${x + 1},${y + 1}`), 25);
    }

    if (y > 0 && x < boardSize[1] - 1) {
      let targetNE = document.querySelectorAll(`[data-cell="${x + 1},${y - 1}"]`)[0];
      setTimeout(() => openCell(targetNE, `${x + 1},${y - 1}`), 25);
    }
    if (x > 0 && y < boardSize[1] - 1) {
      let targetSW = document.querySelectorAll(`[data-cell="${x - 1},${y + 1}"`)[0];
      setTimeout(() => openCell(targetSW, `${x - 1},${y + 1}`), 25);
    }

  }, 30);
}

let newGameButton = document.querySelector('.game__button');
newGameButton.addEventListener('click', () => {
  stopAudio()
  newGameButton.classList.remove('text-new');
  cells.forEach(cell => {
    let coordinate = cell.getAttribute('data-cell');
    const coordin = coordinate.split(',');
    const x = coordin[0];
    const y = coordin[1];
  
    const keyToRemove = `cell-${x}-${y}`;
    localStorage.removeItem(keyToRemove);
  });
  const keysToRemove = ['minesArray', 'indexClickSave', 'countClicks', 'seconds', 'mineBalance', 'wrapperActiveLocal', 'gameEndLocal', 'gameEndLocalText', 'gameEndLocalButton'];
  keysToRemove.forEach(key => {
    localStorage.removeItem(key);
  });
  clear();
  updateBoardSize();
  createBoard();
  endTimer()


});


const tableresultButton = document.querySelector('.game__result-button');
const tableresult = document.querySelector('.main__table');
const body1 = document.querySelector('body');
let isVisible = false;

tableresultButton.addEventListener('click', () => {

  isVisible = !isVisible;
  if (isVisible) {

    tableresult.style.display = 'block';
    wrapperActive.classList.add('active');
    body1.classList.add('no-scroll');
    tableresultButton.classList.add('text-resize');

  } else {

    tableresult.style.display = 'none';
    wrapperActive.classList.remove('active');
    body1.classList.remove('no-scroll');
    tableresultButton.classList.remove('text-resize');
  }
});
// document.addEventListener('click', (event) => {
//   const target = event.target;
//   if (!tableresultButton.contains(target)) {
//     console.log('b')
//     tableresult.style.display = 'none';
//     wrapperActive.classList.remove('active');
//   }
// });




// localStorage.clear();

box.addEventListener('click', (event) => {
  let oneCell = event.target.classList.contains('game__cell');
  if (oneCell && !gameOver) {
    count = count + 1;
    clickCount.innerText = count;
    localStorage.setItem('countClicks', count)
  }
})



// победа
const checkVictory = () => {
  audioElementWin.play();
  newGameButton.classList.add('text-new');
  gameEndContent = `Hooray! You found all mines in ${seconds} seconds and ${countClicks.innerText} moves!`;
  gameEndText.innerHTML = gameEndContent;
  gameEnd.classList.add('active');
  gameEndText.classList.add('active');
  wrapperActive.classList.add('active');
  localStorage.setItem(`wrapperActiveLocal`, JSON.stringify(Array.from(wrapperActive.classList)));
  localStorage.setItem(`gameEndLocal`, JSON.stringify(Array.from(gameEnd.classList)));
  localStorage.setItem(`gameEndLocalText`, JSON.stringify(Array.from(gameEndText.classList)));
  localStorage.setItem(`gameEndLocalButton`, JSON.stringify(Array.from(newGameButton.classList)));
  gameOver = true;

  localStorage.setItem('gameOverSave', gameOver)


  cells.forEach(cell => {
    if (cell.classList.contains('mine')) {
      cell.classList.remove('flagged');
      cell.classList.remove('closed');
      cell.classList.add('opened', 'mine-bum-win');
      cell.innerHTML = '💣';
      let coordinate = cell.getAttribute('data-cell');
      const coordin = coordinate.split(',');
      const x = coordin[0];
      const y = coordin[1];

      let savedCell = JSON.parse(localStorage.getItem(`cell-${x}-${y}`)) || {};

      if (savedCell.classList) {
        savedCell.classNames = savedCell.classNames.concat(Array.from(cell.classList));
      } else {
        savedCell.classNames = Array.from(cell.classList);
      }
      savedCell.classNames.push('opened', 'mine-bum');
      savedCell.innerHTML = '💣';
      localStorage.setItem(`cell-${x}-${y}`, JSON.stringify(savedCell));
    }
  });
  endTimer()
  checkWin()

  return
}


// проигрыш
const endGame = () => {
  audioElementDefeat.play();
  gameEndText.innerHTML = 'Game over. Try again';
  gameEnd.classList.add('active');
  gameEndText.classList.add('active');
  wrapperActive.classList.add('active');
  newGameButton.classList.add('text-new');

  localStorage.setItem(`wrapperActiveLocal`, JSON.stringify(Array.from(wrapperActive.classList)));
  localStorage.setItem(`gameEndLocal`, JSON.stringify(Array.from(gameEnd.classList)));
  localStorage.setItem(`gameEndLocalText`, JSON.stringify(Array.from(gameEndText.classList)));
  localStorage.setItem(`gameEndLocalButton`, JSON.stringify(Array.from(newGameButton.classList)));
  // console.log(wrapperActiveGet)

  gameOver = true;
  localStorage.setItem('gameOverSave', gameOver)
  cells.forEach(cell => {
    if (cell.classList.contains('mine')) {
      cell.classList.remove('flagged');
      cell.classList.remove('closed');
      cell.classList.add('opened', 'mine-bum');
      cell.innerHTML = '💣';
      let coordinate = cell.getAttribute('data-cell');
      const coordin = coordinate.split(',');
      const x = coordin[0];
      const y = coordin[1];
      let savedCell = JSON.parse(localStorage.getItem(`cell-${x}-${y}`)) || {};
      if (savedCell.classList) {
        savedCell.classNames = savedCell.classNames.concat(Array.from(cell.classList));
      } else {
        savedCell.classNames = Array.from(cell.classList);
      }
      savedCell.classNames.push('opened', 'mine-bum');
      savedCell.innerHTML = '💣';
      localStorage.setItem(`cell-${x}-${y}`, JSON.stringify(savedCell));
    }
  });
  endTimer()
  return
}

// localStorage.setItem('firstClickSave', firstClick)
// localStorage.setItem('clickSave', click)



const secondsTime = document.querySelector('.settings__time');
localStorage.getItem('seconds')

if (localStorage.getItem('seconds')) {
  secondsTime.innerText = localStorage.getItem('seconds');
} else {
  secondsTime.innerText = 0;
}







// const valueBalance = document.querySelector('.settings__mine-balance');
// let mineBalance = localStorage.getItem('mineBalance')

// if (mineBalance) {
//   countnb = mineBalance;
//   valueBalance.innerText = countnb;
//   console.log(countnb)
// } else {
//   valueBalance.innerText = numMines;
// }




function checkWin() {
  const secondsResult = seconds;
  const clickResult = count;
  const levelResult = selectedlevel;
  const minesResult = numMines;
  saveGameResult(secondsResult, clickResult, levelResult, minesResult);
}

function saveGameResult(secondsResult, clickResult, levelResult, minesResult) {
  const result = { secondsResult, clickResult, levelResult, minesResult };
  const savedResults = localStorage.getItem('gameResults');
  const results = savedResults ? JSON.parse(savedResults) : [];

  results.unshift(result);

  if (results.length > 10) {
    results.splice(10);
  }

  localStorage.setItem('gameResults', JSON.stringify(results));
  displayResults(results);
}


function displayResults(results) {
  const tableBody = document.querySelector('.table__body');
  tableBody.innerHTML = '';


  results.forEach((result, index) => {
    const row = document.createElement('tr');
    const numberCell = document.createElement('td');
    const timeCell = document.createElement('td');
    const clickCell = document.createElement('td');
    const levelCell = document.createElement('td');
    const minesCell = document.createElement('td');

    numberCell.textContent = index + 1;
    timeCell.textContent = result.secondsResult;
    clickCell.textContent = result.clickResult;
    levelCell.textContent = result.levelResult;
    minesCell.textContent = result.minesResult;

    row.appendChild(numberCell);
    row.appendChild(timeCell);
    row.appendChild(clickCell);
    row.appendChild(levelCell);
    row.appendChild(minesCell);

    tableBody.appendChild(row);
  });
}


const savedResults = localStorage.getItem('gameResults');
const results = savedResults ? JSON.parse(savedResults) : [];

displayResults(results);








const stopAudio = () => {
  audioElementClick.pause();
  audioElementClick.currentTime = 0;
  audioElementClick.load();

  audioElementFlag.pause();
  audioElementFlag.currentTime = 0;
  audioElementFlag.load();

  audioElementWin.pause();
  audioElementWin.currentTime = 0;
  audioElementWin.load();

  audioElementDefeat.pause();
  audioElementDefeat.currentTime = 0;
  audioElementDefeat.load();


}








const clear = () => {
  gameOver = false;
  localStorage.setItem('gameOverSave', gameOver)
  seconds = 0;
  count = 0;
  clickCount.innerText = count;
  timer.innerText = 0;
  timerRunning = false;
  mines = [];
  numbers = [];
  gameEndText.innerHTML = '';
  newGameButton.classList.remove('text-new');
  balance.innerText = numMinesOutput.innerText;
  click = false;
  localStorage.setItem('clickSave', click)
  gameEndContent = '';
  firstClick = true;
  localStorage.setItem('firstClickSave', firstClick)
  gameEnd.classList.remove('active');
  gameEndText.classList.remove('active');
  wrapperActive.classList.remove('active');
  cells = document.querySelectorAll('.game__cell');
  cells.forEach(cell => {
    if (cell.classList.contains('mine')) {
      cell.classList.add('closed');
      cell.classList.remove('opened', 'mine-bum', 'flagged');
    }
    cell.remove();
  });
  // localStorage.clear();
  // console.clear();
  // createBoard();
}



let gameEndActive = document.querySelector('.game__end');
let gameEndActiveText = document.querySelector('.game__end-text');
let gameEndActiveButton = document.querySelector('.game__button');

let mineBumWinElement = document.querySelector('.mine-bum-win');


let gameEndActiveGet = JSON.parse(localStorage.getItem(`gameEndLocal`));
let gameEndActiveTextGet = JSON.parse(localStorage.getItem(`gameEndLocalText`));
let gameEndActiveButtonGet = JSON.parse(localStorage.getItem(`gameEndLocalButton`));

if (gameEndActiveGet === null) {
  gameEndActive.classList.remove('active');
} else {
  gameEndActiveGet.forEach(className => {
    gameEndActive.classList.add(className);
  });
  gameEndActive.classList.add('active');
}

if (gameEndActiveTextGet === null) {
  gameEndActiveText.classList.remove('active');
} else {
  gameEndActiveTextGet.forEach(className => {
    gameEndActiveText.classList.add(className);
  });
  gameEndActiveText.classList.add('active');
  if (mineBumWinElement) {
    gameEndText.innerHTML = `Hooray! You found all mines in ${seconds} seconds and ${countClicks.innerText} moves!`;
  } else if (!mineBumWinElement) {
    gameEndText.innerHTML = 'Game over. Try again';
  }
}

if (gameEndActiveButtonGet === null) {
  gameEndActiveButton.classList.remove('active');
} else {
  gameEndActiveButtonGet.forEach(className => {
    gameEndActiveButton.classList.add(className);
  });
  gameEndActiveButton.classList.add('active');
}






class NightMode {
  constructor() {
    this.toggle = document.querySelector('.main__night-day_toggle');
    this.bodyC = document.querySelector('body');
    this.wrapperC = document.querySelector('.wrapper');
    this.titleC = document.querySelector('.title');
    this.nightDay = document.querySelector('.main__night-day');
    // this.gameWrapperC = document.querySelector('.game__wrapper');
    // this.changeColor = document.querySelector('.main__colors-box');
    // this.colorsInput = document.querySelector('.main__colors-input');
    // this.gameLights = document.querySelector('.game__lights');
    // this.footer = document.querySelector('.footer');
    this.iconD = document.querySelector('.footer__icon-d');
    this.iconN = document.querySelector('.footer__icon-n');
    // this.textColor = document.querySelector('.main__text-color');
    this.easyColor = document.querySelector('.settings__level-easy-label');
    this.mediumColor = document.querySelector('.settings__level-medium-label');
    this.hardColor = document.querySelector('.settings__level-hard-label');
    this.resultButtonColor = document.querySelector('.game__result-button');
    this.loadNightMode();
  }

  toggleNightMode() {
    this.toggle.classList.toggle('active-color');
    this.bodyC.classList.toggle('active-color');
    this.wrapperC.classList.toggle('active-color');
    this.titleC.classList.toggle('active-color');
    this.nightDay.classList.toggle('active-color');
    this.iconD.classList.toggle('active-color');
    this.iconN.classList.toggle('active-color');
    this.easyColor.classList.toggle('active-color');
    this.mediumColor.classList.toggle('active-color');
    this.hardColor.classList.toggle('active-color');
    this.resultButtonColor.classList.toggle('active-color');
    this.saveNightMode();
  }

  saveNightMode() {
    const isNightMode = this.bodyC.classList.contains('active-color');
    localStorage.setItem('nightMode', isNightMode ? 'true' : 'false');
  }
  loadNightMode() {
    const savedNightMode = localStorage.getItem('nightMode');
    if (savedNightMode === 'true') {
      this.toggleNightMode();
    }
  }

  // onColorsInputChange() {
  //   const colorValue = this.colorsInput.value;
  //   this.gameLights.style.background = colorValue;
  //   this.toggle.style.background = colorValue;

  // }

  setupEventListeners() {
    this.nightDay.addEventListener('click', () => this.toggleNightMode());
    // this.colorsInput.addEventListener('input', () => this.onColorsInputChange());
  }
}

const nightMode = new NightMode();
nightMode.setupEventListeners();







for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  // console.log(`${key}: ${localStorage.getItem(key)}`);
}




// localStorage.clear();



let isAudioMuted = false;

function toggleAllAudio() {
  let audioOnOf = document.querySelector('.settings__on-of');
  let audioFiles = document.querySelectorAll('.audio-item');

  for (let i = 0; i < audioFiles.length; i++) {
    let audio = audioFiles[i];
    audio.muted = !audio.muted;
  }

  audioOnOf.textContent = audioFiles[0].muted ? 'Sound on' : 'Sound off';
}