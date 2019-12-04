// start the game
const startBtn = document.getElementById('start');
startBtn.addEventListener('click', start);
const imagesArray = [
	'../images/brazil.svg',
	'../images/china.jpg',
	'../images/france.png',
	'../images/morocco.png',
	'../images/australia.jpeg'
];
// const answer = document.getElementsById('value').value;
// function checkAnswer(){
// if(answer)
// }
// const submit = document.getElementsById('submit');
// submit.addEventListener('click', checkAnswer);

// function submit() {}

function start() {
	let randomIndex = Math.floor(Math.random() * 5);
	console.log(randomIndex);
	// const picture = imagesArray[randomIndex];
	document.getElementById('pic').src = imagesArray[randomIndex];

	// document.createElement('style').innerHTML =
	// 	'.image {' +
	// 	' background-image: ' +
	// 	'url(../images/australia.jpeg); ' +
	// 	'}';
}
