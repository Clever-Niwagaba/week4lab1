import Chronometer from "./chronometer.js";
const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  let min = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = min[0];
  minUniElement.innerHTML = min[1];
}

function printSeconds() {
  // ... your code goes here
  let sec = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElementDecElement.innerHTML = sec[0];
  secUniElementUniElement.innerHTML = sec[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  let millisec = chronometer.computeTwoDigitNumber(printSeconds() % 1000);
  milDecElement.innerHTML = millisec[0];
  milUniElement = millisec[1];
}

function printSplit() {
  // ... your code goes here
  const TimeofSplit = chronometer.split();
  const newSplit = document.createElement('li');

  newSplit.innerHTML = TimeofSplit;
  splitsElement.appendChild(newSplit);
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
  // ... your code goes here
  if (btnLeftElement.className.includes('stop')) {
    btnRightElement.innerHTML = 'SPLIT';
    btnRightElement.className = 'btn split';
  } else {
    btnRightElement.innerHTML = 'RESET';
    btnRightElement.className = 'btn reset';
  }
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  // ... your code goes here
  if (btnLeftElement.className.includes('stop')) {
    btnRightElement.innerHTML = 'SPLIT';
    btnRightElement.className = 'btn split';
  } else {
    btnRightElement.innerHTML = 'RESET';
    btnRightElement.className = 'btn reset';
  }
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.className.includes('start')) {
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.className.includes('reset')) {
    chronometer.reset();
    printTime();
    clearSplits();
  } else {
    printSplit();
  }
});
