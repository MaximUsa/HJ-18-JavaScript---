'use strict';

var imgArray = [
'breuer-building.jpg',
'guggenheim-museum.jpg',
'headquarters.jpg',
'IAC.jpg',
'new-museum.jpg']

const slider = document.getElementById('currentPhoto');

let step = -1;

function nextPhoto(){
	step += 1;
	if (step === imgArray.length) {
		step = 0;
	}
	slider.src = `i/${imgArray[step]}`;
}

function prevPhoto(){
	step -= 1;	
	if (step < 0) {
		step = imgArray.length-1;
	}
	slider.src = `i/${imgArray[step]}`;
}


nextPhoto();
const buttonNext = document.getElementById('nextPhoto');
buttonNext.onclick = nextPhoto;

const buttonPrev = document.getElementById('prevPhoto');
buttonPrev.onclick = prevPhoto;
