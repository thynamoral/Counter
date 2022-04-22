

const playerName = prompt("Hello I'm Moral! What your name?");

let startNum = 0;

const allBtn = document.querySelectorAll('button');
const addition = document.querySelector('.addition');
const substraction = document.querySelector('.substraction');
const reset = document.querySelector('.reset');
const mainNum = document.querySelector('h1');

addition.addEventListener('click',() => {
    mainNum.style.color = 'green';
    startNum++;
    mainNum.innerText = startNum;
})

substraction.addEventListener('click',() => {
    mainNum.style.color = 'red';
    startNum--;
    mainNum.innerText = startNum;
})

reset.addEventListener('click',() => {
    startNum = 0;
    mainNum.style.color = 'black';
    mainNum.innerText = startNum;
    alert(`Let's get started again ${playerName.toUpperCase()}!`);
})
