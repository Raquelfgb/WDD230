const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('list');

button.addEventListener('click', () => {
    if (input.value !== '') {
        let myName = input.value;
        input.value = '';
        const li = document.createElement('li');
        li.textContent = myName;
        list.appendChild(li);
    }
    let myName = input.value;
    input.value = '';
    const li = document.createElement('li');
    li.textContent = myName;
    list.appendChild(li);
});