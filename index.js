// start the game
const startBtn = document.getElementById('start');
const correct = document.querySelector('.correct');
let counterVal = document.querySelector('.counter').textContent;
let counter = 0;

startBtn.addEventListener('click', start);
const imagesArray = [
	'../images/brazil.svg',
	'../images/china.jpg',
	'../images/france.png',
	'../images/morocco.png',
	'../images/australia.jpeg'
];
// const china = '../images/china.jpg';
// const brazil = '../images/brazil.svg';
// const france = '../images/france.png';
// const morocco = '../images/morocco.png';
// const australia = '../images/australia.jpeg';
let randomIndex = Math.floor(Math.random() * 5);
function start() {
	console.log(randomIndex);
	document.getElementById('pic').src = imagesArray[randomIndex];
}

// submit function

const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', answer);

function answer() {
	const inputValue = document.getElementById('val').value;
	if (
		imagesArray[randomIndex] == '../images/china.jpg' &&
		inputValue === 'china'
	) {
		correct.textContent = 'CORRECT';
		correct.style.color = 'green';
	} else if (
		imagesArray[randomIndex] == '../images/brazil.svg' &&
		inputValue === 'brazil'
	) {
		correct.textContent = 'CORRECT';
		correct.style.color = 'green';
	} else if (
		imagesArray[randomIndex] == '../images/france.png' &&
		inputValue === 'france'
	) {
		correct.textContent = 'CORRECT';
		correct.style.color = 'green';
	} else if (
		imagesArray[randomIndex] == '../images/morocco.png' &&
		inputValue === 'morocco'
	) {
		correct.textContent = 'CORRECT';
		correct.style.color = 'green';
	} else if (
		imagesArray[randomIndex] == '../images/australia.jpeg' &&
		inputValue === 'australia'
	) {
		correct.textContent = 'CORRECT';
		correct.style.color = 'green';
	} else {
		correct.style.color = 'red';
		correct.textContent = 'TRY AGAIN';
	}

	// if ((correct.textContent = 'CORRECT')) {
	// 	counter++;
	// 	counter = counterVal;
	// }
}
