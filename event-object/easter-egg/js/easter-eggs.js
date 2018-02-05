'use strict';

const nav = document.getElementsByTagName('nav')[0]; // коллекция тегов 
const secret = document.getElementsByClassName('secret')[0]; // коллекция классов 
let arrKey =[]; // пустой массив
let secretKey = "KeyY,KeyT,KeyN,KeyJ,KeyK,KeyJ,KeyU,KeyB,KeyZ"; //секретная строка, состоит из кодов клавиш


//функция показывает пасхалку
function easterEggsVisible(){
	arrKey.push(event.code); //добавляем код клавиши в массив
	if (arrKey.join().search(secretKey) != -1) { //склеиваем массив в строку и ищем нашу секретную строку
		secret.classList.add('visible'); //добавим свойство отображающее пасхалку
		return arrKey = []; // возвращаем пустой массив, при следующем вводе пасхалка скроется. Можно раз ввести секретную строку и открыть пасхалку.
		// нужен ли тут return или можно без него обойтись??
 	}else {  //если секретная строка не найдена скрываем пасхалку
 		secret.classList.remove('visible');
 	}
}

//функция показывает меню
function navVisible() { 
	if (event.ctrlKey && event.altKey && event.code === 'KeyT'){ //если нажаты клавиши 
		nav.classList.add('visible');	//отображаем меню
	}else {
		nav.classList.remove('visible');// скрываем меню
	}
}

function list(event){
	navVisible();
	easterEggsVisible();
}

document.addEventListener('keydown', list);