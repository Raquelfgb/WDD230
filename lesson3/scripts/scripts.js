const h1 = document.querySelector('h1');
const copyright = document.querySelector('#copyrightyear');

copyrightyear.textContent =`${new Date().getFullYear()}`;

const lastModified = document.querySelector('#lastmodified');
lastModified.textContent = new Date(document.lastModified);
