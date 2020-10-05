
const output1 = document.querySelector('#ligne1');

function Touche(position1, position2) {

  this.position1 = position1;
  this.position2 = position2;

};



let tesc = new Touche('Esc', '');
let tf1 = new Touche('F1', '');
let tf2 = new Touche('F2', '');
let tf3 = new Touche('F3', '');
let tf4 = new Touche('F4', 'é');
let tf5 = new Touche('F5', '');
let tf6 = new Touche('F6', '');
let tf7 = new Touche('F7', '');
let tf8 = new Touche('F8', 'è');
let tf9 = new Touche('F9', 'ç');
let tf10 = new Touche('F10', '');
let tf11 = new Touche('F11', '');
let tf12 = new Touche('F12', '');
let tdel = new Touche('Del', '');
/*let tdos = new Touche('2', '');
let tone = new Touche('1', '&');
let ttwo = new Touche('2', 'é');

let ttab = new Touche('Tab', '');

let tmaj = new Touche('Maj', '');*/

let ligne1 = [tesc, tf1, tf2, tf3, tf4, tf5, tf6, tf7, tf8, tf9, tf10, tf11, tf12, tdel];


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

let li1 = document.createElement('li');

if (ligne1[i].position1) {
	li1.textContent = ligne1[i].position1;
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
