/*Получене и обработка объекта пользователя*/
let user={
	name:"Вадим Клинк",
	img:"css/photoes/example_photo.jpg"
}
//Подключение сборщика
document.addEventListener("DOMContentLoaded", get_user);
//Сборщик

function get_user(event){
	let sender=user;
	let needed_data_of_sender=new Set(["name","img"])
	let needed_data=new Map([["img","css/photoes/no.jpg"],["name","Не указан"]])
	for(let i in sender){
		switch(i){
			case "name":{
				let name=document.querySelector("header>ul>li>span.user-name");
				name.textContent=sender[i];
				needed_data_of_sender.delete("name");
				break;
			}
			case "img":{
				let img=document.querySelector("header>ul>li>img.user-photo");
				img.src=sender[i];
				needed_data_of_sender.delete("img");
				break;
			}
		}
	}
	/*Добавление дэфолтных значений*/
	for(let key of needed_data_of_sender){
		switch(key){
			case "name":{
				let name=document.querySelector("header>ul>li>span.user-name");
				name.textContent=needed_data.get(key);
				needed_data_of_sender.delete("name");
				break;
			}
			case "img":{
				let img=document.querySelector("header>ul>li>img.user-photo");
				img.src=needed_data.get(key);
				needed_data_of_sender.delete("img");
				break;
			}
		}
	}
	/*Добавление дэфолтных значений*/
	//Добавление ф-ий для редача
	let redach=document.querySelector("section.redach_form");
	redach.addEventListener("click", redach_click);
	//Добавление ф-ий для редача
}
/*Получене и обработка объекта пользователя*/

/*Заготовки для собеседника*/
/*Заготовки для собеседника*/

/*События нажатия на панель управления*/
document.querySelector(".controls>.buttons").addEventListener("click",options_click);

function options_click(event){
	let clicked=event.target;
	if (clicked.matches("section.controls ul.buttons>li.redach>img")){
		let guest=document.querySelector("section.chat>.guest");
		let redach=document.querySelector("section.chat>.redach_form");
		if(redach.hasAttribute("is_closed")){
			if(guest!=null && guest!=undefined)guest.style="";
			redach.removeAttribute("is_closed");
		}
		else{
			if(guest!=null && guest!=undefined)guest.style="width:98%;margin:0px 1%";
			redach.setAttribute("is_closed","hidden");
		}
	}
	else if (clicked.matches("section.controls ul.buttons>li.add_to_friends>img")){
		/*отправка действия на сервер*/
	}
	else if (clicked.matches("section.controls ul.buttons>li.mic>img")){
		/*отправка действия на сервер*/
	}
	else if (clicked.matches("section.controls ul.buttons>li.swap>img")){
		/*отправка действия на сервер*/
	}
}
/*События нажатия на панель управления*/

/*Функции схлопывания сайдбара*/
let sidebar=document.querySelector("header details")
sidebar.addEventListener("mouseleave",turn_off)
sidebar.addEventListener("mouseover",turn_on)
function turn_off(event){
	if(this.open){
		this.removeAttribute("open");
	}
}
function turn_on(event){
	if(!this.open)this.open=true;
}
/*Функции схлопывания сайдбара*/

/*Функции нажатия на редач*/
function redach_click(event){
	let clicked=event.target.closest("li");
	let chat=document.querySelector("section.guest")
	if(clicked.classList.contains("close") || clicked.classList.contains("save")){
		if(clicked.classList.contains("close")){
			this.setAttribute("is_closed","hidden");
			chat.style="width:98%;margin:0px 1%;"
		}
		//else{
//
//		}
	}
	//else if(){}
}
/*Функции нажатия на редач*/