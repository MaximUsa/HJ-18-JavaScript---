'use strict';

function loadData(url) {
	const functionName = 'callback';
	return new Promise((done, fail) => {
		window[functionName] = done;
		const script = document.createElement('script');
		script.src = `${url}?jsonp=${functionName}`;
		document.body.appendChild(script);
	});
}

function food(data) {
	const pic = document.querySelector('[data-pic]');
	const title = document.querySelector('[data-title]')
	const ingredients = document.querySelector('[data-ingredients]')

	pic.style.background = `url(${data.pic}) no-repeat`;
	title.textContent = data.title;
	ingredients.textContent = data.ingredients.join(', ');

	return 'https://neto-api.herokuapp.com/food/42/rating';
}

function rating(data) {
	const rating = document.querySelector('[data-rating]');
	const star = document.querySelector('[data-star]');
	const votes = document.querySelector('[data-votes]');

	rating.textContent = data.rating;
	star.style.width = `${data.rating *10}%`
	votes.textContent = `${data.votes} оценок`;

	return 'https://neto-api.herokuapp.com/food/42/consumers';
}

function user(data) {
	console.log(data)
	const consumers = document.querySelector('[data-consumers]');
	const span = document.createElement('span');
	
	Array.from(data.consumers).forEach( element => {
		consumers.appendChild(document.createElement('img'));
		consumers.lastElementChild.src = element.pic;
		consumers.lastElementChild.setAttribute('title', element.name);
	});

	consumers.appendChild(span);
	consumers.lastElementChild.textContent = `(+${data.total})`;
}

loadData('https://neto-api.herokuapp.com/food/42')
	.then(food)
	.then(res => loadData(res))
	.then(rating)
	.then(res => loadData(res))
	.then(user);

