
const requestURL = "/lesson09/card.json";
const layouts = document.querySelector('.layouts');
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const layouts = jsonObject['layouts'];
    layouts.forEach(displayLayouts);
  });

function displayLayouts(layouts) {
    let card = document.createElement("section");
	let h2 = document.createElement("h2");
	let logo = document.createElement("img");
	let address = document.createElement("h3");
	let telephone = document.createElement("h3");
	let url = document.createElement("h3");

	h2.textContent = (`${layouts.h2}`);
    address.textContent = (`${layouts.address}`);
    telephone.textContent = (`${layouts.telephone}`);
	url.textContent = (`${layouts.url}`);

    portrait.setAttribute('src', layouts.url);
    portrait.setAttribute('alt', (`Logo of ${layouts.h2}`));
    portrait.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(telephone);
	card.appendChild(url);

    document.querySelector('div.layouts').appendChild(card);

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}