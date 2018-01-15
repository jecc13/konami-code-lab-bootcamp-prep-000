// const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
  // Write your JavaScript code inside the init() function
const docBody = document.querySelector('body');
 
docBody.addEventListener('keydown', function(e) {
    console.log(e.which);
    onKeyDownHandler(e);
})  // shows ascii code for the key pressed

} // end function init 


const code = [65, 66, 67]; // A B C 

// Keep track of index outside of the event handler.
let index = 0;

// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
 
  if (key === key[index]) {
    index++;
 
    if (index === code.length) {
      alert("Hurray!");
      index = 0;
    }
  } else {
    index = 0;
  }
}

/* 
konami = 0;	
	
document.addEventListener('keydown', function(e) {
	
	if(e.keyCode == 38){
		if(konami <= 1){
			konami ++;
		}else{
			konami = 0;
		}
	}else if(e.keyCode == 40){
		if(konami == 2 || konami == 3){
			konami ++;
		}else{
			konami = 0;
		}
	}else if(e.keyCode == 37){
		if(konami == 4 || konami == 6){
			konami ++;
		}else{
			konami = 0;
		}
	}else if(e.keyCode == 39){
		if(konami == 5 || konami == 7){
			konami ++;
		}else{
			konami = 0;
		}
	}else if(e.keyCode == 66){
		if(konami == 8){
			konami ++;
		}else{
			konami = 0;
		}
	}else if(e.keyCode == 65){
		if(konami == 9){
			earthquake();
		}else{
			konami = 0;
		}
	}else{
		konami = 0;
	}
	
}, false);
	
*/

