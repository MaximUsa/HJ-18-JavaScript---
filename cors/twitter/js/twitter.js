'use strict';

function callback (userData) {

	const wallpaper = document.querySelector('[data-wallpaper]');
	const username = document.querySelector('[data-username]');
	const description = document.querySelector('[data-description]');
	const pic = document.querySelector('[data-pic]');
	const tweets = document.querySelector('[data-tweets]');
	const followers = document.querySelector('[data-followers]');
	const following = document.querySelector('[data-following]');

	wallpaper.src = userData.wallpaper;
	username.textContent = userData.username;
	description.textContent = userData.description;
	pic.src = userData.pic;
	tweets.value = userData.tweets;
	followers.value = userData.followers;
	following.value = userData.following;





}




const url = `https://neto-api.herokuapp.com/twitter/jsonp`; 

const script = document.createElement('script');
script.setAttribute('src', url);

document.body.appendChild(script);


/*

callback(JSON.parse(`
	{
	"username":"@carlf",
	"description":"Carl Fredricksen is the protagonist in Up. He also appeared in Dug's Special Mission as a minor character.",
	"tweets":2934,
	"followers":1119,
	"following":530,
	"wallpaper":"https://neto-api.herokuapp.com/hj/4.1/twitter/up.jpg",
	"pic":"https://neto-api.herokuapp.com/hj/4.1/twitter/carl.jpg"}`));




	data-wallpaper — картинка профиля пользователя, подставляйте адрес картинки в атрибут src;
data-username — имя пользователя, подставляйте в тело тега;
data-description — описание пользователя, подставляйте в тело тега;
data-pic — аватар пользователя, подставляйте адрес картинки в атрибут src;
data-tweets — количество твитов, подставляйте в тело тега;
data-followers — количество подписчиков, подставляйте в тело тега;
data-following — количество подписок, подставляйте в тело тега.

*/
