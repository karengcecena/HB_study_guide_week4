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
/// HAVING ISSUES SELECTING THE MAX NUMBER!!!!!!!!!
  const max = document.querySelector("#max").value;
  
  let i = 1;
  let number = 1;
  const numbers = [];
  
  while ((number + Number(multsOf)) <= max){
    number = Number(multsOf) * i;
    numbers.push(number);
    i += 1;
  };
  console.log(multsOf);
  console.log(max);
  console.log(numbers);

});

/** **************
An Agreeable Form
*************** */

// Your Code Here

/** ****************
Five colored primes
***************** */

const PRIME_COLORS = ['orange', 'midnightblue', 'darkgoldenrod', 'green', 'purple'];

// Your Code Here

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

// Your Code Here
