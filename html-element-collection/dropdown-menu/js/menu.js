'use strict'

const wrapperMenu = document.getElementsByClassName('wrapper-dropdown')[0];

/*
function toggleSelectedClass() {
	wrapperMenu.classList.toggle('active');
}

wrapperMenu.onclick = toggleSelectedClass;
*/

wrapperMenu.onclick = () => {
	wrapperMenu.classList.toggle('active');
}





