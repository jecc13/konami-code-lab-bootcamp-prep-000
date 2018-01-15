// const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];


function init() {
  // Write your JavaScript code inside the init() function
const docBody = document.querySelector('body');
 
docBody.addEventListener('keydown', function(e) {
    // shows ascii code for the key pressed
    // console.log(e.which);
    
    onKeyDownHandler(e);
})  
} // end function init 


// Key codes for A, B, and C keys.
const alphabet = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
 
// Keep track of index outside of the event handler.
let index = 0;
 
// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
 
  if (key === alphabet[index]) {
    index++;
 
    if (index === alphabet.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}
