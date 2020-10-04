
const output1 = document.querySelector('#ligne1');
/*const output2 = document.querySelector('#ligne2');
const output3 = document.querySelector('#ligne3');
const output4 = document.querySelector('#ligne4');
const output5 = document.querySelector('#ligne5');
const output6 = document.querySelector('#ligne6');*/


function Touche(position1, position2) {

  this.position1 = position1;
  this.position2 = position2;

};

let tesc = new Touche('', 'Esc');
let tf1 = new Touche('F1', '');
let tf2 = new Touche('F2', '');
let tf3 = new Touche('F3', '');
let tf4 = new Touche('F4', '');
let tf5 = new Touche('F5', '');
let tf6 = new Touche('F6', '');
let tf7 = new Touche('F7', '');
let tf8 = new Touche('F8', '');
let tf9 = new Touche('F9', '');
let tf10 = new Touche('F10', '');
let tf11 = new Touche('F11', '');
let tf12 = new Touche('F12', '');
let tdel = new Touche('', 'Del');
/*let tdos = new Touche('2', '');
let tone = new Touche('1', '&');
let ttwo = new Touche('2', 'é');

let ttab = new Touche('Tab', '');

let tmaj = new Touche('Maj', '');*/

let ligne1 = [tesc, tf1, tf2, tf3, tf4, tf5, tf6, tf7, tf8, tf9, tf10, tf11, tf12, tdel];
/*let ligne2 = [tdos, tone, ttwo];
let ligne3 = [tmaj];
let ligne4 = [ttab];
let ligne5 = [];
let ligne6 = [];*/

// let clavier = [ligne1, ligne2, ligne3];

	function press(){
			this.style.boxShadow = "inset 0px 1px 0px #aaa, 0px 1px 0px 1px #fff";
			this.style.position = "relative";
			this.style.top = "5px";
	}

	function unpress(){
			this.style.boxShadow = "inset 0px 1px 0px #aaa, 0px 7px 0px 1px #fff";
			this.style.top = "0px";
	}


for (let i = 0; i < ligne1.length; i++) {
	// for (let j = 0; j < ligne1.length; j++) {
	// 	for (let k = 0; k < ligne2.length; k++) {
	// 		for (let l = 0; l < ligne3.length; l++) {
			
		
let li1 = document.createElement('li');

	li1.textContent = ligne1[i].position1 + ' ' + ligne1[i].position2;
	li1.style.textJustify = "inter-word";
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

/*  		output3.appendChild(li3);
 	}
 	output2.appendChild(li2);
}*/
output1.appendChild(li1);
// }
};




/*for (let i = 0; i < ligne2.length; i++) {
let li2 = document.createElement('li');

	li2.textContent = ligne2[i].position1 + ' ' + ligne2[i].position2;
	li2.style.textJustify = "inter-word";
	li2.style.display = "inline";
	li2.style.listStyleType = "none";
  	li2.style.width = "80px";
 	li2.style.border = "1px solid black";
  	li2.style.padding = "10px";
  	li2.style.margin = "2px";
  	li2.style.textAlign = "center";
  	li2.style.fontWeight = "bold";
  	li2.style.boxShadow = "inset 0px 1px 0px #aaa, 0px 7px 0px 1px #156785, 8px 7px 7px grey";
  	li2.style.borderRadius = "5px";
  	li2.style.color = "#808080";

  
  	li2.addEventListener('mousedown', press);
  	li2.addEventListener('mouseup', unpress);
  	li2.addEventListener('mouseout', unpress);

 	output2.appendChild(li2);


};

for (let i = 0; i < ligne3.length; i++) {
let li3 = document.createElement('li');

	li3.textContent = ligne3[i].position1 + ' ' + ligne3[i].position2;
	li3.style.textJustify = "inter-word";
	lI3.style.display = "inline";
	li3.style.listStyleType = "none";
  	li3.style.width = "80px";
 	li3.style.border = "1px solid black";
  	li3.style.padding = "10px";
  	li3.style.margin = "2px";
  	li3.style.textAlign = "center";
  	li3.style.fontWeight = "bold";
  	li3.style.boxShadow = "inset 0px 1px 0px #aaa, 0px 7px 0px 1px #156785, 8px 7px 7px grey";
  	li3.style.borderRadius = "5px";
  	li3.style.color = "#808080";

  
  	li3.addEventListener('mousedown', press);
  	li3.addEventListener('mouseup', unpress);
  	li3.addEventListener('mouseout', unpress);

 	output3.appendChild(li3);


};*/





