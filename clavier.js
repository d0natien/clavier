
const output = document.querySelector('ul');

function Touche(position1, position2, position3) {
  this.position1 = position1;
  this.position2 = position2;
  this.position3 = position3;
}

let touche1 = new Touche('', 'Esc', '');
let touche2 = new Touche('F1', '', '');
let touche3 = new Touche('F2', '', '');
let touche4 = new Touche('F3', '', '');
let touche5 = new Touche('F4', '', '');
let touche6 = new Touche('F5', '', '');
let touche7 = new Touche('F6', '', '');
let touche8 = new Touche('F7', '', '');
let touche9 = new Touche('F8', '', '');
let touche10 = new Touche('F9', '', '');
let touche11 = new Touche('F10', '', '');
let touche12 = new Touche('F11', '', '');
let touche13 = new Touche('F12', '', '');
let touche14 = new Touche('', 'Del', '');

let ligne1 = [touche1, touche2,touche3,touche4, touche5, touche6,touche7, touche8, touche9,touche10, touche11, touche12, touche13, touche14];

for (let i = 0; i < ligne1.length; i++) {
	
	function press(){
			this.style.boxShadow = "inset 0px 1px 0px #aaa, 0px 1px 0px 1px #156785";
			this.style.position = "relative";
			this.style.top = "5px";
				}

	function unpress(){
			this.style.boxShadow = "inset 0px 1px 0px #aaa, 0px 7px 0px 1px #156785, 8px 7px 7px grey";
			this.style.top = '0px';
	}

	let li = document.createElement('li');
	li.textContent = ligne1[i].position1 + ligne1[i].position2 + ligne1[i].position3;
	li.style.display = "inline";
	li.style.listStyleType = "none";
  	li.style.width = "80px";
 	li.style.border = "1px solid black";
  	li.style.padding = "10px";
  	li.style.margin = "2px";
  	li.style.textAlign = "center";
  	li.style.fontWeight = "bold";
  	li.style.textTransform = "uppercase";
  	li.style.boxShadow = "inset 0px 1px 0px #aaa, 0px 7px 0px 1px #156785, 8px 7px 7px grey";
  	li.style.borderRadius = "5px";
  	li.style.color = "#808080";

  	li.addEventListener('mousedown', press);
  	li.addEventListener('mouseup', unpress);

 output.appendChild(li);

};





