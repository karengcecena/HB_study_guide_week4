'use strict';

/** ********************
 Make an Event Handler
********************* */

document.querySelector("#popup-alert-button").addEventListener("click", () => {
  alert("You asked for a pop-up? :)");
});

/** ***********************
Practice Your Times Tables
************************ */

document.querySelector("#multiplying-form").addEventListener("submit", (evt) => {
  evt.preventDefault();
  
  const multsOf = document.querySelector("#mults-of").value;
  const max = document.querySelector("#max").value;
  
  let i = 1;
  let number = 1;
  const numbers = [];
  
  while ((number + Number(multsOf)) <= max){
    number = Number(multsOf) * i;
    numbers.push(number);
    i += 1;
  };
  // console.log(multsOf);
  // console.log(max);
  console.log(numbers);

});

/** **************
An Agreeable Form
*************** */

document.querySelector("#agreeable-form").addEventListener("submit", (evt) => {
  evt.preventDefault();

  const food = document.querySelector("#favorite-food-input").value;
  document.querySelector("#agreeable-text").innerHTML = `I like ${food}, too.`
});

/** ****************
Five colored primes
***************** */

const PRIME_COLORS = ['orange', 'midnightblue', 'darkgoldenrod', 'green', 'purple'];

document.querySelector("#make-prime-circles").addEventListener("click", () => {
  // added so that only one line of circles would appear in submit box
  document.querySelector("#prime-circle-area").innerHTML = null;

  // Calculating primes until 11
  const primes = [];

  function isNumberPrime(number) {
    // you want i * i <= number so that it changes based on number being inputted
    for (let i = 2; i * i <= number; i += 1){
      if (number % i == 0){
        return false;
      } 
    } 
    // if nothing divided
    return true;
  };

  function primesUntil11() {
    for (let i = 2; i < 12; i +=1 ){
      if (isNumberPrime(i)) {
        primes.push(i)
      }
    }
  };
  primesUntil11();

  // Creating divs for the prime numbers 
  // console.log(primes);

  let i = 0;
  for (const digit of primes){
    // console.log(digit);
    // Version 1 for same colors: 
    const version1 = `<div class="prime-circle" style="background-color:${PRIME_COLORS[i]}">${digit}</div>`

    // Version 2 for random colors for fun: 
    const color = PRIME_COLORS[Math.floor(Math.random() * PRIME_COLORS.length)]
    const version2 = `<div class="prime-circle" style="background-color:${color}">${digit}</div>`

    // Adds the HTML for all of the numbers with circles 
    document.querySelector("#prime-circle-area").insertAdjacentHTML("beforeend", version2)

    // Increases the count for version 1 to select colors by index
    i += 1;
  }

});

/** *********
Got Puppies?
********** */

// NOTE: DO NOT CHANGE THE CODE OF THIS FUNCTION
function showPuppies(results) {
  // get the URL for the puppy photo out of the results object
  const puppyURL = results.url;
  const puppyDiv = document.querySelector('#puppies-go-here');
  // clear anything currently in the div
  puppyDiv.innerHTML = null;
  // add the img element
  puppyDiv.insertAdjacentHTML('beforeend', `<img src=${puppyURL} alt="puppy-image">`);
}

document.querySelector("#puppy-form").addEventListener("submit", (evt) => { 
  evt.preventDefault();
  const puppies = document.querySelector("#num-puppies").value;

  const url = `/puppies.json?num-puppies=${puppies}`

  fetch(url)
  .then((response) => response.json())
  .then((results) => {
    console.log(results)
    showPuppies(results)
    
  });
});