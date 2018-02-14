
const request = new XMLHttpRequest();
request.addEventListener('load', onLoad);
request.open('GET', 'components/email-tab.html');
request.send();

const content = document.querySelector('#content')
			tabs = document.querySelectorAll('nav a')
			preload = document.querySelector('#preloader');

Array.from(tabs).forEach(tab => {
		tab.addEventListener('click', defaultEvent);
	});

function defaultEvent(event){
	for (let tab of tabs) {
    tab.classList.remove('active');
  }
  this.classList.add('active');      
  event.preventDefault();
	request.addEventListener('loadstart', onLoadStart);
  request.addEventListener('load', onLoad);
	request.addEventListener('loadend', onLoadEnd);
	request.open('GET', this.href);
  request.send();
}

function onLoad() {
	content.innerHTML = request.responseText;
}

function onLoadSms() {
 	content.innerHTML = requestSms.responseText;
}

function onLoadStart() {
	preload.classList.remove('hidden');
}

function onLoadEnd() {
	preload.classList.add('hidden');
}
