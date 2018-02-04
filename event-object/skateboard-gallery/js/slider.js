'use strict';

const galleryNav = document.getElementById('nav') //по ID получаем ссылку на элемент
const links = galleryNav.getElementsByTagName('a'); // получаем коллекцию из тегов
const viewGallery = document.getElementById('view');//по ID получаем ссылку на элемент

function view(event){
	event.preventDefault(); //отменяем действия по умолчанию	
	viewGallery.src = this.href; // устанавливаем путь до фото 
	if (this.classList.contains('gallery-current')){ // если в коллекци классов есть gallery-current
		return; // выходим из функции
	}
	for (const link of links){ // перебираем элементы из коллекции 
		link.classList.remove('gallery-current') // удаляем gallery-current из атрибута class  
		//надо ли удалять пустой атрибут??
		// после удаления значения из атрибута, код выглядит так
		//<a href="images/full/01.jpg" class target="_blank">
		// пустой атрибут class
		link.removeAttribute('class') // удаляем уже пустой атрибут 
	}
	this.classList.add('gallery-current'); //добавляем значение в class	
}

//из коллекции делаем массив и для каждого элемента массива вешаем обработчик 
Array.from(links).forEach(link => link.addEventListener('click', view));

