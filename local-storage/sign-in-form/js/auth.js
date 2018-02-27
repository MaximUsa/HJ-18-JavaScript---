'use strict';

const formSignIn = document.querySelector('.sign-in-htm');
const formSignUp = document.querySelector('.sign-up-htm');
const btnSingIn = formSignIn.querySelector('.button');
const btnSingUp = formSignUp.querySelector('.button');

const xhr = new XMLHttpRequest();

xhr.addEventListener('load', (e) => {
	console.log(xhr.response);
});

function singIn (event) {
	let obj =  {}
	const formData = new FormData(formSignIn);
	console.log(formData);
	
	for (const [k, v] of formData) {
 		console.log(`${k} : ${v}`);
 		obj[k] = v
 		console.log(`${obj[k]}`);
	}
	event.preventDefault();
	xhr.open('POST', 'https://neto-api.herokuapp.com/signin');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify(obj));
}

function singUp (event) {
	let obj =  {}
	const formData = new FormData(formSignUp);
	console.log(formData);
	
	for (const [k, v] of formData) {
 		console.log(`${k} : ${v}`);
 		obj[k] = v
 		console.log(`${obj[k]}`);
	}
	event.preventDefault();
	xhr.open('POST', 'https://neto-api.herokuapp.com/signup');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify(obj));
}

btnSingIn.addEventListener('click', singIn)
btnSingUp.addEventListener('click', singUp)


