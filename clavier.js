
const output = document.querySelector('#sortie');
/*const output2 = document.querySelector('#ligne2');
const output3 = document.querySelector('#ligne3');*/

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
let tshift1 = new Touche('Shift', '', '');
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

let lignes = [[tesc, tf1, tf2, tf3, tf4, tf5, tf6, tf7, tf8, tf9, tf10, tf11, tf12, tdel],
			[tsquare, tone, ttwo, tthree, tfour, tfive, tsix, tseven, teight, tnine, tzero, tdegre, tplus, tremv],
			[ttab, ta, tz, te, tr, tt, ty, tu, ti, to, tp, ttrema, tdollar, tarrow],
			[tmaj, tq, ts, td, tf, tg, th, tj, tk, tl, tm, tpercent, tenter], 
			[tshift1, tw, tx, tc, tv, tb, tn, task, tdot, tslash, texclam, tshift2], 
			[tfn, tctrl1, talt, twindows, tspace, taltgr, tctrl2, tleft, tup, tdown, tright]];

console.log(lignes.length);

	function press(){
			this.style.boxShadow = "inset 0px 1px 0px #aaa, 0px 1px 0px 1px #fff";
			this.style.position = "relative";
			this.style.top = "5px";
	}

	function unpress(){
			this.style.boxShadow = "inset 0px 1px 0px #aaa, 0px 7px 0px 1px #fff";
			this.style.top = "0px";
	}

	

for (let i = 0; i < lignes.length; i++) {

	let ul = document.createElement('ul');
		// ul.innerHTML = lignes;
		output.append(ul);

	for (let j = 0; j < lignes[i].length; j++) {
		console.log(lignes[i][j]);


	

		let li = document.createElement('li');

		if (lignes[i][j].position1) {
			li.textContent = lignes[i][j].position1;
			li.style.textAlign = "left";
			li.style.display = "inline";
			li.style.listStyleType = "none";
		  	li.style.width = "80px";
		 	li.style.border = "1px solid black";
		  	li.style.padding = "10px";
		  	li.style.margin = "2px";
		  	li.style.textAlign = "center";
		  	li.style.fontWeight = "bold";
		  	li.style.boxShadow = "inset 0px 1px 0px #aaa, 0px 7px 0px 1px #fff";
		  	li.style.borderRadius = "5px";
		  	li.style.color = "#808080";
		  	li.style.backgroundColor = "#fff";

		  	li.addEventListener('mousedown', press);
		  	li.addEventListener('mouseup', unpress);
		  	li.addEventListener('mouseout', unpress);
		ul.appendChild(li);
		}

		if (lignes[i][j].position2) {

		let span = document.createElement('span');
		span.innerHTML = lignes[i][j].position2;
		console.log(span);
		li.append(span);
			
			span.textContent = ' ' + lignes[i][j].position2;
			span.style.color = 'red';
		}

	}

}
