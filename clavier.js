
const output = document.querySelector('#sortie');
/*const output2 = document.querySelector('#ligne2');
const output3 = document.querySelector('#ligne3');*/

function Touche(position1, position2, position3, name) {

  this.position1 = position1;
  this.position2 = position2;
  this.position3 = position3;
  this.name = name;

};



let tesc = new Touche('Esc', '', '', 'tesc');
let tf1 = new Touche('F1', '', '', 'tf1');
let tf2 = new Touche('F2', '', '', 'tf2');
let tf3 = new Touche('F3', '', '', 'tf3');
let tf4 = new Touche('F4', '', '', 'tf4');
let tf5 = new Touche('F5', '', '', 'tf5');
let tf6 = new Touche('F6', '', '', 'tf6');
let tf7 = new Touche('F7', '', '', 'tf7');
let tf8 = new Touche('F8', '', '', 'tf8');
let tf9 = new Touche('F9', '', '', 'tf9');
let tf10 = new Touche('F10', '', '', 'tf10');
let tf11 = new Touche('F11', '', '', 'tf11');
let tf12 = new Touche('F12', '', '', 'tf12');
let tdel = new Touche('Del', '', '', 'tdel');
let tsquare = new Touche('2', '', '','tsquare');
let tone = new Touche('1', '&', '','tone');
let ttwo = new Touche('2', 'é', '~','ttwo');
let tthree = new Touche('3', '"', '#','tthree');
let tfour = new Touche('4', "'", '#','tfour');
let tfive = new Touche('5', '(', '[','tfive');
let tsix = new Touche('6', '-', '|','tsix');
let tseven = new Touche('7', 'è', '`','tseven');
let teight = new Touche('8', '_', '','teight');
let tnine = new Touche('9', 'ç', '^','tnine');
let tzero = new Touche('0', 'à', '@','tzero');
let tdegre = new Touche('°', ')', ']','tdegre');
let tplus = new Touche('+', '=', '}','tplus');
let tremv = new Touche('remv', '', '','tremv');
let ttab = new Touche('Tab', '', '','ttab');
let ta = new Touche('A', '', '', 'ta');
let tz = new Touche('Z', '', '', 'tz');
let te = new Touche('E', '€', '', 'te');
let tr = new Touche('R', '', '', 'tr');
let tt = new Touche('T', '', '', 'tt');
let ty = new Touche('Y', '', '', 'ty');
let tu = new Touche('U', '', '', 'tu');
let ti = new Touche('I', '', '', 'ti');
let to = new Touche('O', '', '', 'to');
let tp = new Touche('P', '', '', 'tp');
let ttrema = new Touche('¨', '^', '', 'ttrema');
let tdollar = new Touche('£', '$', '', 'tdollar');
let tarrow = new Touche('>', '<', '', 'tarrow');
let tmaj = new Touche('Maj', '', '', 'tmaj');
let tq = new Touche('Q', '', '', 'tq');
let ts = new Touche('S', '', '', 'ts');
let td = new Touche('D', '', '', 'td');
let tf = new Touche('F', '', '', 'tf');
let tg = new Touche('G', '', '', 'tg');
let th = new Touche('H', '', '', 'th');
let tj = new Touche('J', '', '', 'tj');
let tk = new Touche('K', '', '', 'tk');
let tl = new Touche('L', '', '', 'tl');
let tm = new Touche('M', '', '', 'tm');
let tpercent = new Touche('%', 'ù', '', 'tpercent');
let tenter = new Touche('Enter', '', '', 'tenter');
let tshift1 = new Touche('Shift', '', '', 'tshift1');
let tw = new Touche('W', '', '', 'tw');
let tx = new Touche('X', '', '', 'tx');
let tc = new Touche('C', '', '', 'tc');
let tv = new Touche('V', '', '', 'tv');
let tb = new Touche('B', '', '', 'tb');
let tn = new Touche('N', '', '', 'tn');
let task = new Touche(',', '?', '', 'task');
let tdot = new Touche(';', '.', '', 'tdot');
let tslash = new Touche(':', '/', '', 'tslash');
let texclam = new Touche('!', '§', '', 'texclam');
let tshift2 = new Touche('Shift', '', '', 'tshift2');
let tfn = new Touche('fn', '', '', 'tfn');
let tctrl1 = new Touche('Ctrl', '', '', 'tctrl1');
let talt = new Touche('Alt', '', '', 'talt');
let twindows = new Touche('Win', '', '', 'twindows');
let tspace = new Touche('space', '', '', 'tspace');
let taltgr = new Touche('Alt', 'g', '', 'taltgr');
let tctrl2 = new Touche('Ctrl', '', '', 'tctrl2');
let tleft = new Touche('left', '', '', 'tleft');
let tup = new Touche('up', '', '', 'tup');
let tdown = new Touche('down', '', '', 'tdown');
let tright = new Touche('right', '', '', 'tright');

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
		output.append(ul);

	for (let j = 0; j < lignes[i].length; j++) {
		console.log(lignes[0][j]);


	

		let li = document.createElement('li');
		ul.appendChild(li);
		
		

		if (lignes[i][j].position1) {
			li.id = lignes[i][j].name;

			if (lignes[i][j].name === 'tspace') {
			li.style.width = '200px';
		}
		else{
			li.style.width = "40px";
		}

	if (lignes[i][j].name === 'tesc' || lignes[i][j].name === 'tf1' || lignes[i][j].name === 'tf2' || lignes[i][j].name === 'tf3' 
		|| lignes[i][j].name === 'tf4' || lignes[i][j].name === 'tf5' || lignes[i][j].name === 'tf6' || lignes[i][j].name === 'tf7'
		|| lignes[i][j].name === 'tf8' || lignes[i][j].name === 'tf9' || lignes[i][j].name === 'tf10' || lignes[i][j].name === 'tf11'
		|| lignes[i][j].name === 'tf12' || lignes[i][j].name === 'tdel') {
		li.style.height = '5px';
		li.style.textAlign = 'left';
	}else{
		li.style.height = '20px';
		li.style.textAlign = 'center';
	}

	if (lignes[0][j] === 'tsquare') {
		li.style.padding = '0px';
	}else{
		li.style.padding = '10px';
	}

			// console.log(li.id);
			li.textContent = lignes[i][j].position1;
			// li.style.textAlign = "left";
			li.style.display = "inline-block";
			li.style.listStyleType = "none";
		  	
		  	
		
		 	li.style.border = "1px solid black";
		  	// li.style.padding = "10px";
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
		}

		if (lignes[i][j].position2) {

		let span = document.createElement('span');
		// span.innerHTML = lignes[i][j].position2;
		console.log(span);
		li.append(span);
			
			span.textContent = ' ' + lignes[i][j].position2;
			span.style.color = 'red';
		}

		

	}

}
