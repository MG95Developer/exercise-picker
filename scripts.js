const button = document.getElementById('button');
const showNumnberDiv = document.getElementById('show-generated-number');

const generateRandomNumber = () => {
	const randomNumber = Math.ceil(Math.random() * 28); // 1 to 28 (inclusive)
	showNumnberDiv.innerHTML = randomNumber;
};

button.addEventListener('click', generateRandomNumber);
