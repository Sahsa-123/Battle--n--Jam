//В дальнейшем получить рексестом
let user={
	    link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		is_owner:true,
		name:"Вадим Клинк",
		img:"css/photoes/example_photo.jpg",
		genre:["Хэви-металл","Трэш-металл","Блюз-рок","Фолк-рок",],
		instruments:["Ударная установка","Ритм-гитара","Бэк-вокал"],
		favourite_bands:["Metallica","Megadeth","Led Zeppelin"],
		songs:[
			"Jubilee-Кладбище имени меня ЮЮЮЮЮЮЮЮЮЮЮЮЮЮюююююююююююююююю",
			"Motorhead-Till The End",
			"Ari Hest-After the Thunder",
			"Linkin Park-One More Light",
			"Metallica-One",
			"Eminem feat. Dido-Stan",
			"Black Sabbath-Changes",
			"Guns N Roses-Patience",
			"Five Finger Death Punch-I Refuse",
			"Megadeth-A Tout Le Monde",
			"Noize MC-Жвачка Video Edit",
			"Metallica-The Day That Never Comes",
			"Journey-Separate Ways",
			"Metallica-The Unforgiven II",
			"Scorpions-Humanity",
			"Linkin Park-What I ve Done",
			"Linkin Park-In the End",
			"Linkin Park-Numb",
			"Linkin Park-What I ve Done",
			"Linkin Park-In the End",
			"Linkin Park-Numb",
			"Aerosmith-Dream On",
			"Johny Cash-Hurt",
			"Bob Dylan-Knockin On Heaven Door",
			"Guns N Roses-Dont Cry",
			"Limp Bizkit-Behind Blue Eyes",
			"The Beatles-Yesterday",
			"Megadeth-Tears In a Vial",
		],
		posts:[
			{
				date:"11.02.2002",
				audio:"C:/Users/chepr/Desktop/Музыка/Metallica - Fuel.mp3",
			},
			{
				date:"12.02.2002",
				message:"Metallica\n была основана в Лос-Анджелесе 28 октября 1981 года[6] гитаристом и вокалистом Джеймсом Хэтфилдом и барабанщиком Ларсом Ульрихом после того, как оба поместили объявление о создании группы в издании «The Recycler». Однако, как позже выяснилось из интервью Рона Макговни журналу «So What!», Джеймса и Ларса познакомил между собой их общий друг Хью Таннер, который в то время был соло-гитаристом в группе Рона и Джеймса «Leather Charm». Дуэт пригласил басиста Рона Макговни, знакомого Хэтфилда по его предыдущей группе «Leather Charm», однако на ранних стадиях существования группы постоянно возникали проблемы с гитаристами, поэтому уже поначалу их сменилось несколько: Ллойд Грант, Брэд Паркер и Джефф Уорнер. Metallica получила своё название, когда Рон Куинтана попросил Ларса Ульриха помочь ему выбрать название для своего нового журнала об американских и британских метал-группах. Куинтана имел такие варианты как «Metallica», «Metal Mania» и «Hesse». Ульрих сообразил, что «Metallica» будет отличным названием группы и сказал Рону, что такое название вряд ли кому-нибудь понравится.",
			},
			{
				date:"12.02.2002",
				message:"Metallica была основана в Лос-Анджелесе 28 октября 1981 года[6] гитаристом и вокалистом Джеймсом Хэтфилдом и барабанщиком Ларсом Ульрихом после того, как оба поместили объявление о создании группы в издании «The Recycler». Однако, как позже выяснилось из интервью Рона Макговни журналу «So What!», Джеймса и Ларса познакомил между собой их общий друг Хью Таннер, который в то время был соло-гитаристом в группе Рона и Джеймса «Leather Charm». Дуэт пригласил басиста Рона Макговни, знакомого Хэтфилда по его предыдущей группе «Leather Charm», однако на ранних стадиях существования группы постоянно возникали проблемы с гитаристами, поэтому уже поначалу их сменилось несколько: Ллойд Грант, Брэд Паркер и Джефф Уорнер. Metallica получила своё название, когда Рон Куинтана попросил Ларса Ульриха помочь ему выбрать название для своего нового журнала об американских и британских метал-группах. Куинтана имел такие варианты как «Metallica», «Metal Mania» и «Hesse». Ульрих сообразил, что «Metallica» будет отличным названием группы и сказал Рону, что такое название вряд ли кому-нибудь понравится.",
				audio:"C:/Users/chepr/Desktop/Музыка/Metallica - Fuel.mp3",
			}
			]
		}
//В дальнейшем получить рексестом
let song_list_for_search=[];
//Добавление сборщика личного кабинета
document.addEventListener("DOMContentLoaded", get_user);
//Сборщик лк
function get_user(event){
	user=JSON.stringify(user);
	user=JSON.parse(user);
	let needed_data=new Set(["name","img","genre","instruments","favourite_bands","songs","posts","is_owner"])
	if("is_owner" in user)needed_data.delete("is_owner");
	for (i in user){
		if(i=="name"){
			let name=document.body.querySelector(".user-name");
			name.textContent=user[i];
			needed_data.delete(i);

		}
		else if(i=="img"){
			let img=document.body.querySelector(".user-photo");
			img.src=user[i];
			needed_data.delete(i);
		}
		else if(i=="genre"){
			let sidebar=document.getElementById("genre-list");
			for(let j of user[i]){
					if(user[i].indexOf(j)==user[i].length-1){
						sidebar.textContent+=j;
						break;
					}
					sidebar.textContent+=j+", ";
			}
			needed_data.delete(i);
		}
		else if(i=="instruments"){
			let sidebar=document.getElementById("instruments-list");
			for(let j of user[i]){
					if(user[i].indexOf(j)==user[i].length-1){
						sidebar.textContent+=j;
						break;
					}
					sidebar.textContent+=j+", ";
			}
			needed_data.delete(i);
		}
		else if(i=="favourite_bands"){
			let sidebar=document.getElementById("favourite-bands-list");
			for(let j of user[i]){
					if(user[i].indexOf(j)==user[i].length-1){
						sidebar.textContent+=j;
						break;
					}
					sidebar.textContent+=j+", ";
				}
			needed_data.delete(i);
		}
		else if(i=="songs"){
			let add_to=document.getElementById("songs-list");
			for(j in  user[i]){
				let song=document.createElement("li");
				song.classList.add("song_list");
				song.textContent=user[i][j];
				add_to.append(song);
			}
			needed_data.delete(i);
		}
		else if(i=="posts"){
			let posts_amount_in_storage=user[i].length;
			let name_of_post=0;
			if ((posts_amount_in_storage<5) && (posts_amount_in_storage>0)){
				for (let postworked of user[i]){
					let appended_element=document.querySelector(".main-info-adder");
					let post_element=undefined;
					post_element=post_creator(postworked,user["link"],user["img"],user["name"],user["is_owner"]);
					if(post_element!=undefined){
						if(needed_data.has("posts"))needed_data.delete("posts");
						post_element.addEventListener("click",post_clicker);
						post_element.addEventListener("mouseover",pre_actions);
						post_element.setAttribute("name",name_of_post);
						post_element.addEventListener("click",header_clicker)
						appended_element.prepend(post_element);
						name_of_post++;
					}
					}
			}
		}
	}
	for(i of needed_data){
		switch(i){
			case "name":{
				if(!("name" in user))user["name"]="Не указано";
				let name=document.body.querySelector(".user-name");
				name.textContent="Не указано";
				break;
			}
			case "img":{
				if(!("img" in user))user["img"]="css/photoes/no.jpg";
				let img=document.body.querySelector(".user-photo");
				img.src="css/photoes/no.jpg";
				break;
			}
			case "genre":{
				if(!("genre" in user))user["genre"]="Не указаны";
				let sidebar=document.getElementById("genre-list");
				sidebar.textContent="Не указаны";
				break;
			}
			case "instruments":{
				if(!("instruments" in user))user["instruments"]="Не указаны";
				let sidebar=document.getElementById("instruments-list");
				sidebar.textContent="Не указаны";
				break;
			}
			case "favourite_bands":{
				if(!("favourite_bands" in user))user["favourite_bands"]="Не указаны";
				let sidebar=document.getElementById("favourite-bands-list");
				sidebar.textContent="Не указаны";
				break;
			}
			case "songs":{
				if(!("songs" in user))user["songs"]="Не указаны";
				let add_to=document.getElementById("songs-list");
				add_to.style="display:none";
				let placeholder=document.querySelector(".songs").lastElementChild;
				placeholder.textContent="Не указан";
				break;
			}
			case "posts":{
				user["posts"]=[];
				break;
			}
			case "is_owner":{
				user["is_owner"]=false;
				break
			}
		}
	}
	if(!user["is_owner"]){
		disabled=document.body.querySelector(".main-info>.post-creator");
		disabled.remove();
	}
	for(let i of document.getElementById("songs-list").children){
		song_list_for_search.push(i);
	}
}
//Добавление сборщика личного кабинета

//Добавление димаческого расчета окна ввода для потов(без аудио и зажима)
let post_writing_area=document.querySelector(".post-creator textarea");
post_writing_area.addEventListener("keydown",post_writer);
//post_writing_area.addEventListener("keydown", postwriter_expand);
function postwriter_expand(event){
	if(event.key=="Enter"){
		curent_calls=0;
		let creator=document.body.querySelector(".post-creator textarea");
		let n=counter_n(event.target.value);
		let post_creator=document.body.querySelector(".post-creator");
		let submitter=document.querySelector(".submit");
		if(n>=2 && n<7){
			n++;
			creator.rows=n;
			let padding=getComputedStyle(post_creator).paddingTop.substring(0,getComputedStyle(post_creator).paddingTop.length-2)*2;
			let height=submitter.offsetHeight+creator.offsetHeight+vmax_counter()+padding;
			height+="px";
			post_creator.style.height=height;
		}
		else if(n>=7){
			creator.removeAttribute("noscroll");
		}
		else{
			creator.setAttribute("noscroll",true)
			post_creator.style.height="8.375rem";
			creator.rows=2;
		}
	}
}
//Расчет vmax единиц измерения
function vmax_counter(num=1.25){
	let max=Math.max(document.documentElement.clientHeight,document.documentElement.clientWidth);
	let vmax=max*0.01*num;
	return vmax;
}
//Проверка на удаление переноса
function is_n_deleted(str){
	str=str.split("\n");
	str=str[str.length-1]
	if(str==="")return true
	return false
}
//Расчет высоты поля(без неявных переносов)!!!!
function post_writer(event,clear=false){
	if((event.key=="Backspace")||(event.key=="Enter")){
		curent_calls=0;
		let creator=document.body.querySelector(".post-creator textarea");
		let n=counter_n(event.target.value);
		if(event.key=="Enter")n++;
		if(event.key=="Backspace" && is_n_deleted(event.target.value))n--;
		let post_creator=document.body.querySelector(".post-creator");
		let submitter=document.querySelector(".submit");
		if(n>=2 && n<7){
			n++;
			creator.rows=n;
			let padding=getComputedStyle(post_creator).paddingTop.substring(0,getComputedStyle(post_creator).paddingTop.length-2)*2;
			let height=submitter.offsetHeight+creator.offsetHeight+vmax_counter()+padding;
			height+="px";
			post_creator.style.height=height;
		}
		else if(n>=7){
			creator.removeAttribute("noscroll");
		}
		else{
			creator.setAttribute("noscroll",true)
			post_creator.style.height="8.375rem";
			creator.rows=2;
		}
	}
	else if(clear){
		document.body.querySelector(".post-creator").style.height="8.375rem";
		document.body.querySelector(".post-creator textarea").rows=2;
	}
	/*else{
		curent_calls++;
		if(curent_calls>=break_calls){
			curent_calls=0;
			document.querySelector(".post-creator textarea").value+="\n";
		}
	}*/
}
//Подсчет переносов строк
function counter_n(string){
	let amount=0;
	for(j of string){
		if(j=="\n")amount++;
	}	
	return amount;
}
//Добавление димаческого расчета окна ввода для потов(без аудио и зажима)

//Добавление возможности публикации
let submit_button=document.querySelector(".submit");
submit_button.addEventListener("click",post_publish);
//Публикация постов
function post_publish(event){	
	let date=new Date();
	let month=date.getMonth();
	let day=date.getDate();
	if(+month<10)month="0"+month;
	if(+day<10)day="0"+day;
	date=day+"."+month+"."+date.getFullYear();
	message=document.body.querySelector(".post-creator textarea").value;
	audio=document.body.querySelector(".post-creator textarea audio");
	let post_storage={
		message:message,
		date:date,
		audio:audio
	}
	if(user["is_owner"]){
	user["posts"].push(post_storage);
	let appended_element=document.querySelector(".main-info-adder");
	if((post_storage["message"]!=undefined && post_storage["message"]!="" && post_storage["message"]!=null) || (post_storage["audio"]!=undefined && post_storage["audio"]!="" && post_storage["audio"]!=null)){
		post=post_creator(post_storage,user["link"],user["img"],user["name"],user["is_owner"]);
		if(post!=undefined){
			let name=user["posts"].length-1;
			post.setAttribute("name",name);
			post.addEventListener("click",post_clicker);
			post.addEventListener("mouseover",pre_actions);
			post.addEventListener("click",header_clicker);
			appended_element.prepend(post);
			document.body.querySelector(".post-creator textarea").value="";
			let clearevent=new Event("keyup");
			post_writer(clearevent,true);
			/*отправка соответствующей информации на сервер*/

			}
		}
	}
	else{
		document.querySelector(".main-info>.post-creator").remove();
	}
}
//Добавление возможности публикации

/*Функции "сборки"*/
//сборщик сообщений с переносом
function message_creator(message){
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
//Сборщик постов без аудио
function post_creator(post_storage,link,img="css/photoes/no.jpg",name="не указано",is_owner=false){
	
	let post_element=document.createElement("article");
	let appendants= new Map();
	let MRO=["message_part","audio_part","date_part"];
	let MROindex=0;
	let MROlen=0;
	for(let j in post_storage){
		if(j=="message"){
			if(post_storage[j]!=undefined && post_storage[j]!=null){
				let message_part=message_creator(post_storage[j])
				message_part.classList.add("message_part");
				appendants.set("message_part",message_part);
				MROlen++;
			}
		}
		else if(j=="date"){
			let date_part=document.createElement("span");
			date_part.classList.add("date_part");
			date_part.textContent=post_storage[j];
			appendants.set("date_part",date_part);
			MROlen++;
		}
		else if(j=="audio"){
			if(post_storage[j]!=undefined && post_storage[j]!=null){
				let audio_part=document.createElement("audio");
				audio_part.classList.add("audio_part");
				audio_part.src=post_storage[j];
				audio_part.controls=true;
				appendants.set("audio_part",audio_part);
				MROlen++;
			}
		}
	}
	let post_body_len=0;
	let post_body=document.createElement("section");
	while(MROindex<3){
		let elem=appendants.get(MRO[MROindex])
		if(elem){
			post_body.append(elem);
			post_body_len++;
		}
		MROindex++;
	}
	if(post_body_len){
		let post_header=header_post_creator(link,img,name,is_owner);
		post_element.append(post_header);
		post_element.append(post_body);
		return post_element;
	}
}
//Сборщик шапки постов
function header_post_creator(link,img="css/photoes/no.jpg",name="не указано",is_owner=false){
	let header=document.createElement("section");
	header.classList.add("header_post");

	let av=document.createElement("img");
	av.classList.add("header_img");
	av.src=img;

	let nick=document.createElement("a");
	nick.textContent=name;
	nick.classList.add("nick");
	(!link)?nick.disabled=true:nick.href=link;
	let del_area=document.createElement("div");
	let button=document.createElement("button");
	button.classList.add("predelete");
	button.innerHTML="&#8942;";

	let options_list =document.createElement("ul");
	options_list.classList.add("options_list")
	let def=new Map(Object.entries({"Удалить пост":"del","Поделиться":"share","Сохранить":"save"}));
	for (let [key,value] of def.entries()){
		if(user["is_owner"]){
			let li=document.createElement("li");
			li.textContent=key;
			li.classList.add("options",value);
			options_list.append(li);
		}
		else{
			if(value!="del"){
				let li=document.createElement("li");
				li.textContent=key;
				li.classList.add("options",value);
				options_list.append(li);
			}
		}
	}
	del_area.append(button,options_list);
	del_area.classList.add("delete");

	let mass=[av,nick,del_area];
	let ul=document.createElement("ul");
	for(let i of mass){
		let li=document.createElement("li");
		li.append(i);
		ul.append(li);
	}
	ul.classList.add("header_ul");
	header.append(ul);
	return header;
}
/*Функции "сборки"*/

/*Функции взаимодейчтвия с постом*/
//Переход по ссылке и удаление поста
function post_clicker(event){
	let e=event.target.classList;
	nick=document.querySelector(".nick");
	if(e.contains("delete")){

	}
	else if(e.contains("header_img")){
		let event = new Event("click");
		if("link" in user)document.location.href = user["link"];
	}
}
//Выпадающее меню
function pre_actions(event){
	let checkerStyle=event.target.classList;
	if(checkerStyle.contains("predelete")){
		let delarea=event.target.parentElement;
		let deleter=delarea.querySelector("div.delete ul");
		let post=delarea.closest(".main-info article");
		deleter.style="display:block";
	}
	else if(checkerStyle.contains("delete")){
		let del=event.target.querySelector("div.delete ul");
		del.style="display:block";
	}
	else if(checkerStyle.contains("options")){
		let del=event.target.closest("div.delete ul");
		del="display:block";
	}
	else if(checkerStyle.contains("options_list")){
		event.target="display:block";
	}
	else{
		this.querySelector("div.delete ul").style="display:none";
	}
}
//Удаление поста
function header_clicker(event){
	let clicked=event.target;
	let del=this.querySelector(".del");
	let share=this.querySelector(".share");
	let save=this.querySelector(".save");
	if(clicked==del){
		let index=this.getAttribute("name");
		user["posts"].splice(index,1);
		this.remove();
		//реквест на удаление
		posts=document.querySelector("section.main-info-adder").children;
		counter=posts.length-1;
		for(let j of posts){
			j.setAttribute("name",counter);
			counter--;
		}
	}
	else if(clicked==share){}
	else if(clicked==save){}
}
/*Функции взаимодейчтвия с постом*/

/*Функции взаимодействия с таблицей краткой иныформации*/
let table=document.querySelector("table.short-user-data-table")
table.querySelector(".songs-list-td input").addEventListener("input",search_func1);
function search_func1(event){
	let info_adder=table.querySelector(".songs #songs-list");
	info_adder.innerHTML=null;
	if(this.value==""){
		for(let i of song_list_for_search){
			info_adder.append(i);
		}
	}
	else{
		let value=this.value;
		for(let i of song_list_for_search){
			let name=i;
			if(name.textContent.toLowerCase().includes(value.toLowerCase()))info_adder.append(i);
		}
		if(info_adder.innerHTML==""){
			let i=document.createElement("span");
			i.textContent="Песня не найдена";
			//i.classList.add("no_song");
			info_adder.append(i);
		}
	}
}
/*Функции взаимодействия с таблицей краткой иныформации*/

/*Функции схлопывания сайдбара*/
let sidebar=document.querySelector("header details")
sidebar.addEventListener("mouseleave",turn_off)
sidebar.addEventListener("mouseover",turn_on)
function turn_off(event){
	if(sidebar.open){
		sidebar.removeAttribute("open");
	}
}
function turn_on(event){
	if(!sidebar.open)sidebar.open=true;
}
/*Функции схлопывания сайдбара*/

/*Функция прокрутки наведения*/
let ul=document.getElementById("songs-list");
ul.addEventListener("mouseover",scroller);
function scroller(event){
	if(this.clientWidth<event.target.offsetWidth){
		function scroller_inner(){
		this.scrollLeft+=1;
		}
		let li = event.target;
		let f=scroller_inner.bind(li);
		let i=0
		while(i<1000){
			f();
			i++;
		}
	}
}
/*Функция прокрутки наведения*/