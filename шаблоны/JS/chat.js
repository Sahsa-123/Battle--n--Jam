/*Сборка чата*/
/*Получение чата*/
let chat={
	reciever:{
		img:"css/photoes/reciever.jpg",
		name:"Абонент не абонент",
		link:"https://www.youtube.com/watch?v=r0rIx7EVcTE"
	},
	sender:{
		img:"css/photoes/sender.jpeg",
		name:"Михаил Палыч",
	},
	chat_story:[
		{
			is_cheked:"true",
			author:"абонент не абонент",
			text:"Да?",
			date:"2012-01-26T13:51:50.417-07:00"
		},
		{
			is_cheked:true,
			author:"Михаил Палыч",
			text:"Алё!",
			date:"2012-01-26T13:51:50.417-07:00"
		},
		{
			is_cheked:true,
			author:"абонент не абонент",
			text:"Да да?",
			date:"2012-01-26T13:51:50.417-07:00"
		},
		{
			is_cheked:true,
			author:"абонент не абонент",
			text:"А?",
			date:"2012-01-26T13:51:50.417-07:00"
		},
		{
			is_cheked:true,
			author:"Михаил Палыч",
			text:"Как с деньгами-то там?",
			date:"2012-01-26T13:51:50.417-07:00"
		},
		{
			is_cheked:true,
			author:"абонент не абонент",
			text:"Чё с деньгами?",
			date:"2012-01-26T13:51:50.417-07:00"
		},
		{
			is_cheked:true,
			author:"абонент не абонент",
			text:"Чё?",
			date:"2012-01-26T13:51:50.417-07:00"
		},
		{
			is_cheked:true,
			author:"абонент не абонент",
			text:"Куда ты звонишь?",
			date:"2012-01-26T13:51:50.417-07:00"
		},
		{
			is_cheked:true,
			author:"Михаил Палыч",
			text:"Тебе звоню.",
			date:"2012-01-26T13:51:50.417-07:00"
		},
		{
			is_cheked:true,
			author:"абонент не абонент",
			text:"Ты кто такой?",
			date:"2012-01-26T13:51:50.417-07:00"
			},
		{
			is_cheked:true,
			author:"Михаил Палыч",
			text:" Михал Палыч",
			date:"2012-01-26T13:51:50.417-07:00"
		},
		{
			is_cheked:true,
			author:"абонент не абонент",
			text:"Какой Михал Палыч?",
			date:"2012-01-26T13:51:50.417-07:00"
		},
		{
			is_cheked:true,
			author:"Михаил Палыч",
			text:"Терентьев",
			date:"2012-01-26T13:51:50.417-07:00"
		},
		{
			is_cheked:false,
			author:"абонент не абонент",
			text:"Такого не знаю,\n ты ошибся номером, друг.",
			date:"2012-01-26T13:51:50.417-07:00"
		},
		{
			is_cheked:false,
			author:"Михаил Палыч",
			text:"bnbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
			date:"2012-01-26T13:51:50.417-07:00"
		}
	]
}
/*Получение чата*/

/*Подключение сборщика*/
document.addEventListener("DOMContentLoaded", get_chats);
/*Подключение сборщика*/
//Сборщик чата
function get_chats(event){
	let sender=chat["sender"];
	let reciever=chat["reciever"];
	let needed_data_of_reciever=new Set(["name","img","link"])
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
	for(let i in reciever){
		switch(i){
			case "name":{
				let name=document.querySelector("section.reciever>ul>li>span.name_of_reciever");
				name.textContent=reciever[i];
				needed_data_of_reciever.delete("name");
				break;
			}
			case "img":{
				let img=document.querySelector("section.reciever>ul>li>img.image_of_reciever");
				img.src=reciever[i];
			    needed_data_of_reciever.delete("img");
				break;
			}
			case "link":{
				let link=reciever[i];
				let link_container=document.querySelector("section.reciever");
				link_container.setAttribute("link",link);
				needed_data_of_reciever.delete("link")
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
	for(let key of needed_data_of_reciever){
		switch(key){
			case "name":{
				let name=document.querySelector("section.reciever>ul>li>span.name_of_reciever");
				name.textContent=needed_data.get(key);
				needed_data_of_sender.delete("name");
				break;
			}
			case "img":{
				let img=document.querySelector("section.reciever>ul>li>img.image_of_reciever");
				img.src=needed_data.get(key);
				needed_data_of_sender.delete("img");
				break;
			}
		}
	}
	/*Добавление дэфолтных значений*/
	/*Сборка истории чата*/
	for(let i of chat["chat_story"]){
		let message=message_creator(i["text"],i["author"],i["is_cheked"],i["date"]);
		document.querySelector("section.message_area").append(message)
	}
	/*Сборка истории чата*/
	document.body.querySelector("section.message_area").scrollTop=document.body.querySelector("section.message_area").scrollHeight-document.body.querySelector("section.message_area").clientHeight;
}
//Сборщик чата
/*Сборка чата*/

//Сборка текстовой части сообщения
function text_of_message_creator(message){
	let message_part=document.createElement("section");
	if(message.indexOf("\n")!=-1){
		for(let i of message.split("\n")){
			let p=document.createElement("p");
  			p.textContent=i;
  			message_part.append(p);
		}
	}
	else{
		message_part.textContent=message;
	}
	return message_part;
}
//Сборка текстовой части сообщения
/*Сборка сообщения*/
function message_creator(text,author,status=false,date="10:30"){
	//получение текстовой части
	let message=document.createElement("article");
	let text_part=text_of_message_creator(text);
	text_part.classList.add("message_part")
	//получение текстовой части

	//получение даты
	let date_part=document.createElement("span");
	date_part.classList.add("date_part");
	date=new Date(Date.parse(date));
	let hours=date.getHours();
	let minutes=date.getMinutes();
	if(parseInt(hours)<=1)hours="0"+hours;
	if(parseInt(minutes)<10)minutes="0"+minutes;
	date_part.textContent=hours+":"+minutes;
	//получение даты

	//сборка сообщения
	message.append(text_part);
	message.append(date_part);
	let message2=document.createElement("div")
	message2.append(message)
	//сборка сообщения 

	//добавление стилей
	let sender=document.querySelector("header>ul>li>span.user-name").textContent.toLowerCase();
	author=author.toLowerCase();
	if(author==sender)message2.setAttribute("author","sender")
	else message2.setAttribute("author","reciever");
	if(status)message2.setAttribute("status","true")
	else message2.setAttribute("status","false");
	//добавление стилей

	return message2
}
/*Сборка сообщения*/

/*Функции схлопывания сайдбара*/
let sidebar=document.querySelector("header details")
let reciever_sidebar=document.querySelector("section.reciever>ul.reciever_list>li>details")
sidebar.addEventListener("mouseleave",turn_off)
sidebar.addEventListener("mouseover",turn_on)
reciever_sidebar.addEventListener("mouseleave",turn_off)
reciever_sidebar.addEventListener("mouseover",turn_on)
function turn_off(event){
	if(this.open){
		this.removeAttribute("open");
	}
}
function turn_on(event){
	if(!this.open)this.open=true;
}
/*Функции схлопывания сайдбара*/

/*Переход а страницу reciever*/
let img=document.querySelector("section.reciever>ul>li>img");
img.addEventListener("click",open);
let span=document.querySelector("section.reciever>ul>li>span");
span.addEventListener("click",open);
function open(event){
	let article=this.closest("section.reciever");
	let link=article.hasAttribute("link");
	if(link){
		document.location.href = article.getAttribute("link");
	}
}
/*Переход а страницу reciever*/

//Добавление димаческого расчета окна ввода
let textarea=document.querySelector("section.sender textarea")
textarea.addEventListener("keydown",post_writer)
//Проверка на удаление переноса
function is_n_deleted(str){
	str=str.split("\n");
	str=str[str.length-1]
	if(str==="")return true
	return false
}
//Подсчет переносов строк
function counter_n(string){
	let amount=0;
	for(j of string){
		if(j=="\n")amount++;
	}	
	return amount;
}
//Расчет высоты поля(без неявных переносов)!!!!
function post_writer(event,clear=false){
	if((event.key=="Backspace")||(event.key=="Enter")){
		curent_calls=0;
		let creator=document.body.querySelector("section.sender>textarea");
		let n=counter_n(event.target.value);
		if(event.key=="Enter")n++;
		if(event.key=="Backspace" && is_n_deleted(event.target.value))n--;
		let post_creator=document.body.querySelector("section.sender");
		let message_area=document.body.querySelector("section.message_area");
		if(n>=2 && n<7){
			n++;
			let height1=document.querySelector("section.sender textarea").offsetHeight;
			creator.rows=n;
			let height2=document.querySelector("section.sender textarea").offsetHeight;
			let height=height2-height1;
			post_creator.style.height=post_creator.offsetHeight+height+"px";
			message_area.style.height=message_area.offsetHeight-height+"px";
			message_area.scrollTop+=height;
		}
		else if(n>=7){
		}
		else{
			post_creator.style.height="9.85vh";
			message_area.style.height="68vh"
			creator.rows=2;
		}
	}
	else if(clear){
		document.body.querySelector("section.sender").style.height="9.85vh";
		document.body.querySelector("section.message_area").style.height="68vh"	
		document.body.querySelector("section.sender textarea").rows=2;
		document.body.querySelector("section.message_area").scrollTop=document.body.querySelector("section.message_area").scrollHeight-document.body.querySelector("section.message_area").clientHeight;
		document.body.querySelector("section.sender textarea").value="";
	}
}
//Добавление димаческого расчета окна ввода

//Добавление возможности публикации
let submit_button=document.querySelector("section.sender span.submit_button");
submit_button.addEventListener("click",send_message);
function send_message(event){	
	let date=new Date(Date.now());
	date=JSON.stringify(date);
	date=JSON.parse(date);
	let message=document.body.querySelector("section.sender textarea").value;
	let author=document.querySelector("header ul.user_header>li>span.user-name").textContent
	let message_obj={
		is_checked:false,
		text:message,
		date:date,
		author:author
	}
	if(message_obj["text"]!=undefined && message_obj["text"]!="" && message_obj["text"]!=null){
		if(document.querySelector("section.reciever").hasAttribute("blocked")){
			alert("Получатель заблокирован")
		}
		else{
			let appendant=message_creator(message_obj["text"],message_obj["author"],message_obj["is_checked"],message_obj["date"]);
			//Отправка инфы на сервер
			chat["chat_story"].push(message_obj);
			document.body.querySelector("section.message_area").append(appendant);
			let clearevent=new Event("keydown");
			post_writer(clearevent,true);
		}
	}
}
//Добавление возможности публикации

//Взаимодействие с вып м reciever'a
let options=document.querySelector("section.reciever li>.options");
options.addEventListener("click",reciever_menu);
function reciever_menu(event){
 	let clicked=event.target;
 	if(clicked.classList.contains("clear")){
 		if(confirm("Вы действительно хотите очистить историю?\nВосстановить соббщение будет невозможно")){
 			document.querySelector("section.message_area").innerHTML=null;
 		}
 		// Отправляем запрос на удаление чата
 	}
 	else if(clicked.classList.contains("block")){
 		if(clicked.textContent=="Заблокировать"){
 			document.querySelector("section.message_area").setAttribute("blocked",true);
 			document.querySelector("section.reciever").setAttribute("blocked",true);
 			clicked.textContent="Разблокировать";
 			// Отправляем запрос на блокировку
 		}
 		else{
 			document.querySelector("section.message_area").removeAttribute("blocked");
 			document.querySelector("section.reciever").removeAttribute("blocked");
 			clicked.textContent="Заблокировать"
 			// Отправляем запрос на разблокировку
 		}
 	}
 }
//Взаимодействие с вып м reciever'a