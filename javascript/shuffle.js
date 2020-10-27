const inputScreen = document.getElementById('input');
const resultScreen = document.getElementById('result');
const inputText = document.getElementById('inputText');
const textCard = document.getElementById('textCard');
const secondaryText = document.getElementById('secondaryText');

const toggleScreen = function () {
    resultScreen.classList.toggle('hidden');
    inputScreen.classList.toggle('hidden');
}

const getRandomNumber = function (lengthArray) {
    let randomNumber = Math.floor(Math.random()*lengthArray);
    return randomNumber;
}

const shuffle = function () {
    let inputContent = inputText.value;
    if(inputContent){
        let inputElements = inputContent.split(',');
        let chosenElement = inputElements[getRandomNumber(inputElements.length)]
        textCard.innerHTML = chosenElement;
        secondaryText.innerHTML = 'O nome sorteado foi...'
    } else {
        secondaryText.innerHTML = 'Por favor, informe os nomes para o sorteio.';
        textCard.innerHTML = 'Ops...'
    }
    toggleScreen();
}

const newShuffle = function () {
    inputText.value = '';
    secondaryText.innerHTML = 'Digite os nomes que deseja sortear, separados por vírgula, e clique em "sortear".';
    toggleScreen();
}