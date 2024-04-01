let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.show()
tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';


let item = "";

let btn1p = document.getElementById("btn1+");
let btn1m = document.getElementById("btn1-");
let btn2p = document.getElementById("btn2+");
let btn2m = document.getElementById("btn2-");
let btn3p = document.getElementById("btn3+");
let btn3m = document.getElementById("btn3-");
let btn4p = document.getElementById("btn4+");
let btn4m = document.getElementById("btn4-");
let btn5p = document.getElementById("btn5+");
let btn5m = document.getElementById("btn5-");




let am1 = localStorage.getItem("am1");
let am2 = localStorage.getItem("am2");
let am3 = localStorage.getItem("am3");
let am4 = localStorage.getItem("am4");
let am5 = localStorage.getItem("am5");


if(am1 == null){
	document.getElementById("count1").innerText = 0;
}
else{
	document.getElementById("count1").innerText = localStorage.getItem("am1")
}
if(am2 == null){
	document.getElementById("count2").innerText = 0;
}
else{
	document.getElementById("count2").innerText = localStorage.getItem("am2")
}
if(am3 == null){
	document.getElementById("count3").innerText = 0;
}
else{
	document.getElementById("count3").innerText = localStorage.getItem("am3")
}

if(am4 == null){
	document.getElementById("count4").innerText = 0;
}
else{
	document.getElementById("count4").innerText = localStorage.getItem("am4")
}

if(am5 == null){
	document.getElementById("count5").innerText = 0;
}
else{
	document.getElementById("count5").innerText = localStorage.getItem("am5")
}




function price() {
  return am1*100+am2*100+am3*100+am4*100+am5*100;
}


btn1p.addEventListener("click", function(){
		am1 = Number(localStorage.getItem("am1"));
		am1 = am1+1;
		document.getElementById("count1").innerText = am1;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am1', am1);
});

btn1m.addEventListener("click", function(){
	am1 = Number(localStorage.getItem("am1"));
	if (am1 > 0) {
		am1 = am1-1;
		document.getElementById("count1").innerText = am1;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am1', am1);
	}
});





btn2p.addEventListener("click", function(){
		am2 = Number(localStorage.getItem("am2"));
		am2 = am2+1;
		document.getElementById("count2").innerText = am2;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am2', am2);
});

btn2m.addEventListener("click", function(){
	am2 = Number(localStorage.getItem("am2"));
	if (am2 > 0) {
		am2 = am2-1;
		document.getElementById("count2").innerText = am2;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am2', am2);
	}
});





btn3p.addEventListener("click", function(){
		am3 = Number(localStorage.getItem("am3"));
		am3 = am3+1;
		document.getElementById("count3").innerText = am3;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am3', am3);
});

btn3m.addEventListener("click", function(){
	am3 = Number(localStorage.getItem("am3"));
	if (am3 > 0) {
		am3 = am3-1;
		document.getElementById("count3").innerText = am3;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am3', am3);
	}
});




btn4p.addEventListener("click", function(){
		am4 = Number(localStorage.getItem("am4"));
		am4 = am4+1;
		document.getElementById("count4").innerText = am4;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am4', am4);
});

btn4m.addEventListener("click", function(){
	am4 = Number(localStorage.getItem("am4"));
	if (am4 > 0) {
		am4 = am4-1;
		document.getElementById("count4").innerText = am4;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am4', am4);
	}
});





btn5p.addEventListener("click", function(){
		am5 = Number(localStorage.getItem("am5"));
		am5 = am5+1;
		document.getElementById("count5").innerText = am5;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am5', am5);
});

btn5m.addEventListener("click", function(){
	am5 = Number(localStorage.getItem("am5"));
	if (am5 > 0) {
		am5 = am5-1;
		document.getElementById("count5").innerText = am5;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am5', am5);
	}
});



Telegram.WebApp.onEvent('mainButtonClicked', function(){
	am1 = Number(localStorage.getItem("am1"));
	am2 = Number(localStorage.getItem("am2"));
	am3 = Number(localStorage.getItem("am3"));
	am4 = Number(localStorage.getItem("am4"));
	am5 = Number(localStorage.getItem("am5"));
	let paym = document.getElementById("paym").value;
	let inname = document.getElementById("inname").value;
	let com = document.getElementById("com").value;
	topay = (""+price()+"р");
	let loc = document.getElementById("loc").value;
	let number = document.getElementById("number").value;
	if (loc != "" && number != "") {
		tg.sendData(((""+am1)+" "+(""+am2)+" "+(""+am3)+" "+(""+am4)+" "+(""+am5)+" !"+(""+loc)+"!"+(""+number)+"!"+(topay)+"!"+(paym)+"!"+(inname)+"!"+(com)));
		localStorage.clear();
	}
	else  {
		if (loc == ""){
			tg.MainButton.setText("Введите адрес");
			tg.MainButton.color = "#FF0000";
		}
		else{
			tg.MainButton.setText("Введите номер телефона");
			tg.MainButton.color = "#FF0000";
		}
	}
	//при клике на основную кнопку отправляем данные в строковом виде
});


let usercard = document.getElementById("usercard");
