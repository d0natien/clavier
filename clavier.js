
const output1 = document.querySelector('#ligne1');
const output2 = document.querySelector('#ligne2');
const output3 = document.querySelector('#ligne3');

function Touche(position1, position2, position3) {

  this.position1 = position1;
  this.position2 = position2;
  this.position3 = position3;

};



let tesc = new Touche('Esc', '', '');
let tf1 = new Touche('F1', '', '');
let tf2 = new Touche('F2', '', '');
let tf3 = new Touche('F3', '', '');
let tf4 = new Touche('F4', '', '');
let tf5 = new Touche('F5', '', '');
let tf6 = new Touche('F6', '', '');
let tf7 = new Touche('F7', '', '');
let tf8 = new Touche('F8', '', '');
let tf9 = new Touche('F9', '', '');
let tf10 = new Touche('F10', '', '');
let tf11 = new Touche('F11', '', '');
let tf12 = new Touche('F12', '', '');
let tdel = new Touche('Del', '', '');
let tsquare = new Touche('2', '', '');
let tone = new Touche('1', '&', '');
let ttwo = new Touche('2', 'é', '~');
let tthree = new Touche('3', '"', '#');
let tfour = new Touche('4', "'", '#');
let tfive = new Touche('5', '(', '[');
let tsix = new Touche('6', '-', '|');
let tseven = new Touche('7', 'è', '`');
let teight = new Touche('8', '_', '');
let tnine = new Touche('9', 'ç', '^');
let tzero = new Touche('0', 'à', '@');
let tdegre = new Touche('°', ')', ']');
let tplus = new Touche('+', '=', '}');
let tremv = new Touche('remv', '', '');
let ttab = new Touche('Tab', '', '');
let ta = new Touche('A', '', '');
let tz = new Touche('Z', '', '');
let te = new Touche('E', '€', '');
let tr = new Touche('R', '', '');
let tt = new Touche('T', '', '');
let ty = new Touche('Y', '', '');
let tu = new Touche('U', '', '');
let ti = new Touche('I', '', '');
let to = new Touche('O', '', '');
let tp = new Touche('P', '', '');
let ttrema = new Touche('¨', '^', '');
let tdollar = new Touche('£', '$', '');
let tarrow = new Touche('>', '<', '');
let tmaj = new Touche('Maj', '', '');
let tq = new Touche('Q', '', '');
let ts = new Touche('S', '', '');
let td = new Touche('D', '', '');
let tf = new Touche('F', '', '');
let tg = new Touche('G', '', '');
let th = new Touche('H', '', '');
let tj = new Touche('J', '', '');
let tk = new Touche('K', '', '');
let tl = new Touche('L', '', '');
let tm = new Touche('M', '', '');
let tpercent = new Touche('%', 'ù', '');
let tenter = new Touche('Enter', '', '');
let tsihft1 = new Touche('Shift', '', '');
let tw = new Touche('W', '', '');
let tx = new Touche('X', '', '');
let tc = new Touche('C', '', '');
let tv = new Touche('V', '', '');
let tb = new Touche('B', '', '');
let tn = new Touche('N', '', '');
let task = new Touche(',', '?', '');
let tdot = new Touche(';', '.', '');
let tslash = new Touche(':', '/', '');
let texclam = new Touche('!', '§', '');
let tshift2 = new Touche('Shift', '', '');
let tfn = new Touche('fn', '', '');
let tctrl1 = new Touche('Ctrl', '', '');
let talt = new Touche('Alt', '', '');
let twindows = new Touche('Win', '', '');
let tspace = new Touche('space', '', '');
let taltgr = new Touche('Alt', 'gr', '');
let tctrl2 = new Touche('Ctrl', '', '');
let tleft = new Touche('left', '', '');
let tup = new Touche('up', '', '');
let tdown = new Touche('down', '', '');
let tright = new Touche('right', '', '');

let ligne1 = [tesc, tf1, tf2, tf3, tf4, tf5, tf6, tf7, tf8, tf9, tf10, tf11, tf12, tdel];
let ligne2 = [tsquare, tone, ttwo, tthree, tfour, tfive, tsix, tseven, teight, tnine, tzero, tdegre, tplus, tremv];
let ligne3 = [ttab, ta, tz, te, tr, tt, ty, tu, ti, to, tp, ttrema, tdollar, tarrow];


	function press(){
			this.style.boxShadow = "inset 0px 1px 0px #aaa, 0px 1px 0px 1px #fff";
			this.style.position = "relative";
			this.style.top = "5px";
	}

	function unpress(){
			this.style.boxShadow = "inset 0px 1px 0px #aaa, 0px 7px 0px 1px #fff";
			this.style.top = "0px";
	}


// POUR LA LIGNE 1

for (let i = 0; i < ligne1.length; i++) {

	let li1 = document.createElement('li');

if (ligne1[i].position1) {
	li1.textContent = ligne1[i].position1;
	li1.style.textAlign = "left";
	li1.style.display = "inline";
	li1.style.listStyleType = "none";
  	li1.style.width = "80px";
 	li1.style.border = "1px solid black";
  	li1.style.padding = "10px";
  	li1.style.margin = "2px";
  	li1.style.textAlign = "center";
  	li1.style.fontWeight = "bold";
  	li1.style.boxShadow = "inset 0px 1px 0px #aaa, 0px 7px 0px 1px #fff";
  	li1.style.borderRadius = "5px";
  	li1.style.color = "#808080";
  	li1.style.backgroundColor = "#fff";

  	li1.addEventListener('mousedown', press);
  	li1.addEventListener('mouseup', unpress);
  	li1.addEventListener('mouseout', unpress);
output1.appendChild(li1);

}


if (ligne1[i].position2) {

let span = document.createElement('span');
span.innerHTML = ligne1[i].position2;
console.log(span);
li1.append(span);
	
	span.textContent = ' ' + ligne1[i].position2;
	span.style.color = 'red';
}
};



// POUR LA LIGNE 2
for (let i = 0; i < ligne2.length; i++) {

	let li2 = document.createElement('li');

if (ligne2[i].position1) {
	li2.textContent = ligne2[i].position1;
	li2.style.textJustify = "inter-word";
	li2.style.display = "inline";
	li2.style.listStyleType = "none";
  	li2.style.width = "80px";
 	li2.style.border = "1px solid black";
  	li2.style.padding = "10px";
  	li2.style.margin = "2px";
  	li2.style.textAlign = "center";
  	li2.style.fontWeight = "bold";
  	li2.style.boxShadow = "inset 0px 1px 0px #aaa, 0px 7px 0px 1px #fff";
  	li2.style.borderRadius = "5px";
  	li2.style.color = "#808080";
  	li2.style.backgroundColor = "#fff";

  	li2.addEventListener('mousedown', press);
  	li2.addEventListener('mouseup', unpress);
  	li2.addEventListener('mouseout', unpress);
output2.appendChild(li2);

}


if (ligne2[i].position2) {

let span = document.createElement('span');
span.innerHTML = ligne2[i].position2;
console.log(span);
li2.append(span);
	
	span.textContent = ' ' + ligne2[i].position2;
	span.style.color = 'red';
}
};


// POUR LA LIGNE 3

for (let i = 0; i < ligne3.length; i++) {

	let li3 = document.createElement('li');

if (ligne3[i].position1) {
	li3.textContent = ligne3[i].position1;
	li3.style.textJustify = "inter-word";
	li3.style.display = "inline";
	li3.style.listStyleType = "none";
  	li3.style.width = "80px";
 	li3.style.border = "1px solid black";
  	li3.style.padding = "10px";
  	li3.style.margin = "2px";
  	li3.style.textAlign = "center";
  	li3.style.fontWeight = "bold";
  	li3.style.boxShadow = "inset 0px 1px 0px #aaa, 0px 7px 0px 1px #fff";
  	li3.style.borderRadius = "5px";
  	li3.style.color = "#808080";
  	li3.style.backgroundColor = "#fff";

  	li3.addEventListener('mousedown', press);
  	li3.addEventListener('mouseup', unpress);
  	li3.addEventListener('mouseout', unpress);
output3.appendChild(li3);

}


if (ligne3[i].position2) {

let span = document.createElement('span');
span.innerHTML = ligne3[i].position2;
console.log(span);
li3.append(span);
	
	span.textContent = ' ' + ligne3[i].position2;
	span.style.color = 'red';
}
};
