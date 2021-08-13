// import functions and grab DOM elements

// initialize state
let hawksCounter = 0;
let ospreysCounter = 0;
// set event listeners
const hawksScoreEl = document.querySelector('#hawks-score');
const ospreysScoreEl = document.querySelector('#ospreys-score');
const hawksButtonEl = document.querySelector('.hawks-button');
const ospreysButtonEl = document.querySelector('.ospreys-button');
// console.log( hawksScoreEl, ospreyScoreEl, hawksButtonEl, ospreysButtonEl);
// STRETCH: Anouncer selector

  // get user input
hawksButtonEl.addEventListener('click', () => {
    hawksCounter += 7;
    // console.log(hawksCounter);
    hawksScoreEl.textContent = hawksCounter;
});

ospreysButtonEl.addEventListener('click', () => {
    ospreysCounter += 7;
    // console.log(ospreysCounter);
    ospreysScoreEl.textContent = ospreysCounter;
});
  // use user input to update state 
  // update DOM to reflect the new state
