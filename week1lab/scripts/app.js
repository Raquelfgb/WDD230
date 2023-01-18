const h1 = document.querySelector('h1');
const copyright = document.querySelector('#copyrightyear');

h1.textContent = 'Raquel de Freitas Greco Bueno';

copyrightyear.textContent =`${new Date().getFullYear()}`;

let quantity = document.querySelector('#q').value;

document.querySelector('p').innerHTML = 'Welcome to <em>our</em> neighborhood!';

document.querySelector('#temp').value = getTemperature();

const divs = document.querySelectorAll('div');