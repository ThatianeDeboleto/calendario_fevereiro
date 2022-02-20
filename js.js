const today = new Date();
const cmnth = today.toLocaleString("EN", { month: "long" });
const cwday = today.toLocaleString("EN", { weekday: "long" });
const cday = today.getDate();
const cyear = today.getFullYear();
document.getElementById("cmnth").innerHTML = cmnth;
document.getElementById("cday").innerHTML = cday;
document.getElementById("cwday").innerHTML = cwday;

function myfun(cevent, dayno) {
	document.getElementById("cevent").innerHTML = cevent;
	document.getElementById("cday").innerHTML = dayno;
	var wdays = [
		"sunday",
		"monday",
		"tuesday",
		"wednesday",
		"thursday",
		"friday",
		"saturday"
	];
	var wday = new Date("February," + dayno + ", 2022");
	document.getElementById("cwday").innerHTML = wdays[wday.getDay()];
}
let cells = document.querySelectorAll("#calendar-table-range > li");
cells[today.getDate() + 1].style.color = "var(--myred)";
const cevents = [
    'De o seu melhor',
    'Seja a mudança',
	'Conquistas chegaram',
	'Você é incrivel',
	'Abrace quem ama',
	'Traga luz',
	'Transforme o seu mundo',
	'Compre algo que ama',
	'Você consegue',
	'O esforço ganha do taleto',
	'Você pode mais do que imagina',
	'Ser feliz',
	'Seja Luz',
	'Torne sua vida mais linda',
	'Alegria é viver assim, sendo você',
	'Alegria é aqui e agora',
	'Continue',
	'Não desanime',
	'Esteja perto de quem te quer bem',
	'Tudo passa',
	'Seja grato por hoje',
	'Doe sem esperar retorno',
	'Lei da realização',
	'Ame sua vida',
	'Transformar',
	'Traga paz',
	'Sendo luz',
	'Conquitas estão a sua espera'
];
document.getElementById("cevent").innerHTML = cevents[today.getDate() - 1];
document.getElementById("cyear").innerHTML = cyear;
