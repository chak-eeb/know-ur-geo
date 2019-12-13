// start the game
const startBtn = document.getElementById('start');
const correct = document.querySelector('.correct');
let counter = document.querySelector('.counter span').textContent;

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
	console.log(imagesArray[randomIndex]);
	console.log(inputValue);
	console.log(counter);

	if (
		inputValue == 'china' ||
		imagesArray[randomIndex] == '../images/china.jpg'
	) {
		correct.textContent = 'CORRECT';
		correct.style.color = 'green';
		counter++;
	} else {
		correct.textContent = 'TRY AGAIN';
		correct.style.color = 'red';
	}
	if (
		inputValue == 'brazil' ||
		imagesArray[randomIndex] == '../images/brazil.svg'
	) {
		correct.textContent = 'CORRECT';
		correct.style.color = 'green';
		counter++;
	} else {
		correct.textContent = 'TRY AGAIN';
		correct.style.color = 'red';
	}
	if (
		inputValue == 'france' ||
		imagesArray[randomIndex] == '../images/france.png'
	) {
		correct.textContent = 'CORRECT';
		correct.style.color = 'green';
		counter++;
	} else {
		correct.textContent = 'TRY AGAIN';
		correct.style.color = 'red';
	}
	if (
		inputValue == 'morocco' ||
		imagesArray[randomIndex] == '../images/morocco.png'
	) {
		correct.textContent = 'CORRECT';
		correct.style.color = 'green';
		counter++;
	} else {
		correct.textContent = 'TRY AGAIN';
		correct.style.color = 'red';
	}
	if (
		inputValue == 'australia' ||
		imagesArray[randomIndex] == '../images/australia.jpeg'
	) {
		correct.textContent = 'CORRECT';
		correct.style.color = 'green';
		counter++;
	} else {
		correct.textContent = 'TRY AGAIN';
		correct.style.color = 'red';
	}
}

//
