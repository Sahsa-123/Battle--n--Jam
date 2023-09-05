//Получение объекта пользователя
let user={
	link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
	name:"Вадим Клинк",
	icon:"css/photoes/example_photo.jpg",
	chats:[{
		name:"Мастейн",
		icon:"css/photoes/Mastein.jpg",
		last_message:"it\'s stil we, the people right?",
		link:"chat.html",
		lm_date:"15:35",
		date:"2010-11-01T16:30:10",
		banned:true
		},{
		name:"Гизер",
		icon:"css/photoes/Gizer.jpg",
		link:"chat.html",
		lm_date:"9:24",
		date:"2013-11-01T16:30:12"
		},{
		name:"Хэнсли",
		icon:"css/photoes/Hensli.jpg",
		last_message:"",
		link:"chat.html",
		lm_date:"9:06",
		date:"2013-10-02T16:30:10",
		banned:true
		},{
		name:"Мастейн",
		icon:"css/photoes/Mastein.jpg",
		last_message:"it\'s stil we, the people right?",
		link:"chat.html",
		lm_date:"15:35",
		date:"2013-11-01T16:30:10"
		},{
		name:"Гизер",
		icon:"css/photoes/Gizer.jpg",
		link:"chat.html",
		lm_date:"9:24",
		date:"2013-11-01T16:30:12",
		banned:true
		},{
		name:"Хэнсли",
		icon:"css/photoes/Hensli.jpg",
		last_message:"",
		link:"chat.html",
		lm_date:"9:06",
		date:"2013-10-02T16:30:10",
		banned:true
		},{
		name:"Мастейн",
		icon:"css/photoes/Mastein.jpg",
		last_message:"it\'s stil we, the people right?",
		link:"chat.html",
		lm_date:"15:35",
		date:"2013-11-01T16:30:10",
		banned:true
		},{
		name:"Гизер",
		icon:"css/photoes/Gizer.jpg",
		link:"chat.html",
		lm_date:"9:24",
		date:"2013-11-01T16:30:12"
		},{
		name:"Тони",
		icon:"css/photoes/Iommi.jpg",
		last_message:"I am ironman",
		link:"chat.html",
		lm_date:"10:15",
		date:"2010-11-01T16:30:10"
		},{
		name:"Хэнсли",
		icon:"css/photoes/Hensli.jpg",
		last_message:"",
		link:"chat.html",
		lm_date:"9:06",
		date:"2013-10-02T16:30:10",
		banned:true
		},{
		name:"Мастейн",
		icon:"css/photoes/Mastein.jpg",
		last_message:"it\'s stil we, the people right?",
		link:"chat.html",
		lm_date:"15:35",
		date:"2013-11-01T16:30:10"
		},{
		name:"Гизер",
		icon:"css/photoes/Gizer.jpg",
		link:"chat.html",
		lm_date:"9:24",
		date:"2013-11-01T16:30:12",
		banned:true
		},{
		name:"Хэнсли",
		icon:"css/photoes/Hensli.jpg",
		last_message:"",
		link:"chat.html",
		lm_date:"9:06",
		date:"2013-10-02T16:30:10",
		banned:true
		},{
		name:"Хэтфилд",
		icon:"css/photoes/hatfield.jpg",
		last_message:"fuck it all and no regrets",
		lm_date:"8:30",
		link:"chat.html",
		date:"2012-11-01T16:30:10",
		banned:true
		},{
		name:"Хэтфилд",
		icon:"css/photoes/hatfield.jpg",
		last_message:"fuck it all and no regrets",
		lm_date:"8:30",
		link:"chat.html",
		date:"2012-11-01T16:30:10"
		},{
		name:"Хэтфилд",
		icon:"css/photoes/hatfield.jpg",
		last_message:"fuck it all and no regrets",
		lm_date:"8:30",
		link:"chat.html",
		date:"2012-11-01T16:30:10"
		},{
		name:"Хэтфилд",
		icon:"css/photoes/hatfield.jpg",
		last_message:"fuck it all and no regrets",
		lm_date:"8:30",
		link:"chat.html",
		date:"2012-11-01T16:30:10"
		}]
}
let chat_list=[];
//Получение объекта пользователя


//Подключение сборщика
document.addEventListener("DOMContentLoaded", get_chats);

//функция сортировки 
function sort_arr(a,b){
	a=Date.parse(a["date"]);
	b=Date.parse(b["date"]);
	if(a>b){return 1}
	else if(a==b){return 0}
	else {return -1};
}
//функция сортировки 

//функция сборки
function get_chats(event){
	user["chats"].sort(sort_arr);
	let info_adder=document.querySelector(".chats");
	let index=0;
	outer:for (let i of user["chats"]){

		if (i["date"]===undefined || i["date"]===null){
			//Отправка сигнала о неисправности объекта
			continue outer;
		};
		let item=document.createElement("article");

		let name=document.createElement("span");

		let icon=document.createElement("img");

		let last_message=document.createElement("span");
		let lm_date=document.createElement("span");

		let options=["Удалить чат"];
		(i["banned"]!==undefined)?options.push("Разблокировать"):options.push("Заблокировать");
		let option=document.createElement("details");
		let button=document.createElement("summary");
		let d_ul=document.createElement("ul");
		option.append(button);
		for(let j of options){
			let li=document.createElement("li");
			li.textContent=j;
			d_ul.append(li);
		}
		option.append(d_ul);
		option.addEventListener("mouseleave",turn_off)
		option.addEventListener("mouseover",turn_on)
		option.addEventListener("click",mb_hd_click)

		let needed_data=new Set(["name","icon","last_message","link"]);
		let appendants=new Map();
		let MRO=["icon","name","last_message","lm_date","options"];

		inner:for (let j in i){

			switch(j){
				case "name":{
					if(i[j]!=undefined || i[j]!=null){
						name.textContent=i[j];
						needed_data.delete(j);
						appendants.set("name",name);
					}
					break;
				}
				case "icon":{
					if(i[j]!=undefined || i[j]!=null){
						icon.src=i[j];
						needed_data.delete(j);
						appendants.set("icon",icon);
					}
					break;
				}
				case "last_message":{
					if(i[j]!=undefined || i[j]!=null){
						last_message.textContent=i[j];
						needed_data.delete(j);
						appendants.set("last_message",last_message);
					}
					break;
				}
				case "link":{
					if(i[j]!=undefined || i[j]!=null){
						item.setAttribute("link",i[j]);
						needed_data.delete(j);
					}
					break;
				}
				case "lm_date":{
					if(i[j]!=undefined || i[j]!=null){
						lm_date.textContent=i[j];
						needed_data.delete(j);
						appendants.set("lm_date",lm_date);
					}
					break;
				}
			}
		}
		if (needed_data.size!=0){
			for (let j of needed_data){ 
				switch(j){
					case "name":{
						name.textContent="Не указанно";
						needed_data.delete(j);
						appendants.set("name",name);
						break;
					}
					case "icon":{
						icon.src="css/photoes/no.jpg";
						needed_data.delete(j);
						appendants.set("icon",icon);
						break;
					}
					case "last_message":{
						delete last_message;
						needed_data.delete(j);
						break;
					}
					case "link":{
						//Отправка сигнала о неисправности объекта
						continue outer;
						break;
					}
					case "lm_date":{
						delete lm_date;
						needed_data.delete(j);
						break;
					}
				}
			}
		}
		appendants.set("options",option)
		let ul=document.createElement("ul");
		for(let key of MRO){
			if(appendants.has(key)){
				let li=document.createElement("li");
				li.append(appendants.get(key));
				li.classList.add(key);
				ul.append(li)
			}
			continue;
		};
		item.append(ul);
		if(i["banned"])item.setAttribute("banned",true);
		item.setAttribute("index",index)
		info_adder.append(item);
		chat_list.push(item);
		info_adder.addEventListener("click",open_chat);
		index++;
	}
	let needed_data=new Set(["name", "icon"])
	outer2:for(let i in user){
		if(i=="name"){
			let name=document.body.querySelector(".user-name");
			name.textContent=user[i];
			needed_data.delete(i);

		}
		else if(i= "icon"){
			let icon=document.body.querySelector(".user-photo");
			icon.src=user[i];
			needed_data.delete(i);
		}
	}
	outer3:for(let i of needed_data){
		switch(i){
			case "name":{
				if(!("name" in user))user["name"]="Не указано";
				let name=document.body.querySelector(".user-name");
				name.textContent="Не указано";
				break;
			}
			case "icon":{
				if(!("icon" in user))user["icon"]="css/photoes/no.jpg";
				let icon=document.body.querySelector(".user-photo");
				icon.src="css/photoes/no.jpg";
				break;
			}	
		}
	}
}
//функция сборки
//Подключение сборщика


//Функция перехода по ссылке
function open_chat(event){
	let article=this.querySelector("article");
	let link=article.hasAttribute("link");
	if(link){
		let inputer=document.getElementsByName("search_bar")[0];
		inputer.value="";
		document.location.href = article.getAttribute("link");
	}
}
//Функция перехода по ссылке

//расчет vmax
function vmax_counter(num=1.25){
	let max=Math.max(document.documentElement.clientHeight,document.documentElement.clientWidth);
	let vmax=max*0.01*num;
	return vmax;
}
//расчет vmax

//поиск бесед
document.getElementsByName("search_bar")[0].addEventListener("input",search)
function search(event){
	/*
	//блок, убирающий сдвиг
	let inp=document.querySelector(".search_bar input");
	//блок, убирающий сдвиг
	*/
	let info_adder=document.querySelector(".chats");
	info_adder.innerHTML=null;
	if(this.value==""){
		for(let i of chat_list){
			info_adder.append(i);
		}
	}
	else{
		let value=this.value;
		for(let i of chat_list){
			let name=i.querySelector(".name span")
			if(name.textContent.toLowerCase().includes(value.toLowerCase()))info_adder.append(i);
		}
		if(info_adder.innerHTML==""){
			let i=document.createElement("span");
			i.textContent="Пользователь не найден";
			i.classList.add("no_user");
			info_adder.append(i);
		}
	}
}
//поиск бесед

//Функции схлопывания сайдбара
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
//Функции схлопывания сайдбара

//Функции взаимодействия с чатом
function mb_hd_click(event){
	event.stopPropagation();
	if(event.target.textContent=="Удалить чат"){
		let index=event.target.closest(".chats article[link]").getAttribute("index");
		chat_list.splice(index,1);
		let article=event.target.closest(".chats article[link]");
		//отправка запроса на удаление
		article.remove();
		counter=0;
		for(let j of document.querySelector("section.chats").children){
			j.setAttribute("index",counter);
			counter++;
		}
	}
	else if(event.target.textContent=="Заблокировать"){
		//отправка запросов на блокировку пользов("block",true);ателя
		event.target.textContent="Разблокировать";
		event.target.closest(".chats article[link]").setAttribute("banned",true)
	}
	else if(event.target.textContent=="Разблокировать"){
		//отправка запросов на блокировку пользователя
		event.target.textContent="Заблокировать";
		event.target.closest(".chats article[link]").removeAttribute("banned");
	}
}
//Функции взаимодействия с чатом