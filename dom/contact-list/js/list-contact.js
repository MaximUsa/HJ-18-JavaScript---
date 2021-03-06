const parseContacts = JSON.parse(loadContacts()); //распарсим JSON

const contactsList = document.querySelector('.contacts-list'); //ищем первый элемент по классу
contactsList.innerHTML = ''; // очищаем 

function addContact(contactJson) {
	let contactsDataNew;
	let index;
	for (const contact of contactJson) { //перебираем элементы 
		contactsList.appendChild(document.createElement('li'));//создаем новый тег li и добавляем его как дочерний в блок тега с классом .contacts-list
		contactsDataNew = document.querySelectorAll('.contacts-list > li'); //коллекция тегов li 
		index = contactJson.indexOf(contact); //индекс элемента в объекте 
		contactsDataNew[index].innerHTML =`<strong> ${contact.name} </strong>`;	 //добавляем содержимое в блок тег li	
		contactsDataNew[index].dataset.phone = contact.phone; //добавляем атрибуты 
		contactsDataNew[index].dataset.email = contact.email;	
	}
}

addContact(parseContacts);