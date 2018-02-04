'use strict';

// звуки клавиш
const higher = ['first.mp3', 'second.mp3', 'third.mp3', 'fourth.mp3', 'fifth.mp3'];
const lower = ['first.mp3', 'second.mp3', 'third.mp3', 'fourth.mp3', 'fifth.mp3'];
const middle = ['first.mp3', 'second.mp3', 'third.mp3', 'fourth.mp3', 'fifth.mp3'];

const setOfSounds = document.getElementsByClassName('set')[0]; //первый элемент из коллекции с классом set
const keyPiano = document.getElementsByTagName('li'); //коллекция тэгов li
const player = document.getElementsByTagName('audio'); //коллекция тэгов audio

const arrayKeyPiano = Array.from(keyPiano); //из коллекции сделаем массив

function song(event){
	if (event.altKey){ // если зажата клавиша alt 
		setOfSounds.classList.remove('middle'); //из коллекции удаляем класс 
		setOfSounds.classList.remove('lower');//из коллекции удаляем класс 
		setOfSounds.classList.add('higher');//в коллекцию добавляем класс 
		player[arrayKeyPiano.indexOf(this)].src = `sounds/higher/${higher[arrayKeyPiano.indexOf(this)]}`; //по индексу элемента из массива выбираем элемент из коллекции и прописываем путь к файлу 
		player[arrayKeyPiano.indexOf(this)].play(); 
	}else if (event.shiftKey){ // если зажата клавиша shiftKey 
			setOfSounds.classList.remove('middle');
			setOfSounds.classList.remove('higher');
			setOfSounds.classList.add('lower');
			player[arrayKeyPiano.indexOf(this)].src = `sounds/lower/${lower[arrayKeyPiano.indexOf(this)]}`;
			player[arrayKeyPiano.indexOf(this)].play();
	}else{ // во всех остальных случаях
		setOfSounds.classList.remove('lower');
		setOfSounds.classList.remove('higher');
		setOfSounds.classList.add('middle');
		player[arrayKeyPiano.indexOf(this)].src = `sounds/middle/${middle[arrayKeyPiano.indexOf(this)]}`;
		player[arrayKeyPiano.indexOf(this)].play();
	}
}

for (const key of arrayKeyPiano){ // перебираем элементы из массива
	key.addEventListener('click', song); // на элемент вешаем обработчик событий
}