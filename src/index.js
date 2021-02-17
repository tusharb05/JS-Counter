let main = document.querySelector('.main');
let counterArea = document.querySelector('.counter');
let decrementBtn = document.querySelector('.btn-minus');
let resetBtn = document.querySelector('.btn-reset');
let incrementBtn = document.querySelector('.btn-plus');

counterArea.innerHTML = '<h1>0</h1>';
let counter = 0;

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
resetBtn.addEventListener('click', reset);

function decrement() {
	counter--;
	if(counter>0) {
		counterArea.innerHTML = `<h1>${counter}</h1>`;
	}
	else if(counter<0) {
		counterArea.innerHTML = `<h1 style="margin-left:90px">${counter}</h1>`;
	}
	decideColor()
}

function increment() {
	counter++;
	if(counter>=0){
		counterArea.innerHTML = `<h1>${counter}</h1>`;
	}
	else if(counter<0){
		counterArea.innerHTML = `<h1 style="margin-left:90px">${counter}</h1>`;
	}
	decideColor();
}

function reset() {
	counter = 0;
	counterArea.innerHTML = `<h1 style="color:white">${counter}</h1>`; 
}

function decideColor() {
	if(counter<0) {
		counterArea.style.color = '#ec4646';
	}
	else if(counter>0) {
		counterArea.style.color = '#16c79a';
	}
	else if(counter==0) {
		counterArea.style.color = 'white';
	}
}
