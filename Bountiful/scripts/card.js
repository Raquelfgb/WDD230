/*const requestURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";
const cards = document.querySelector('.cards');
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const fruits = jsonObject['fruits'];
    fruits.forEach(displayProphets);
  });

function displayFruitsts(fruits) {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let id = document.createElement("h3");
    let nutrition = document.createElement("h3");

    h2.textContent = (`${fruits.name}`);
    id.textContent = (`${fruits.id}`);
    nutrition.textContent = (`${fruits.nutrition}`);


    card.appendChild(h2);
    card.appendChild(id);
    card.appendChild(nutrition);

    document.querySelector('div.cards').appendChild(card);
}*/
const h1 = document.querySelector('h1');
const copyright = document.querySelector('#copyrightyear');

copyrightyear.textContent =`${new Date().getFullYear()}`;

const lastModified = document.querySelector('#lastmodified');
lastModified.textContent = new Date(document.lastModified);

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

const url ="https://brotherblazzard.github.io/canvas-content/fruit.json";

const getFresh = async (filter = "all") => {
	let fruits = await jsonFetch(url);

	switch (filter) {
		case "carbohydrates":
			fruits = fruits.filter((fruit) => fruit.carbohydrates < 5);
			break;
		case "protein":
			fruits = fruits.filter((fruit) => fruit.protein > 10);
			break;
		case "fat":
			fruits = fruits.filter((fruit) => fruit.fat < 15);
			break;
		case "calories":
			fruits = fruits.filter((fruit) => fruit.calories < 5);
			break;
		case "sugar":
			fruits = fruits.filter((fruit) => fruit.sugar < 10);
			break;
		default:
			break;
	}

	displayFruits(fruits);
};

async function jsonFetch(url) {
	const response = await fetch(url);
	const data = await response.json();
	return data.fruits;
}

const displayFruits = (fruits) => {
	const cards = document.querySelector("div.cards");
	cards.innerHTML = "";

	fruits.forEach((fruit) => {
		let card = document.createElement("section");
		let h2 = document.createElement("h2");
		let stats = document.createElement("div");
		stats.classList.add("stats");
		let date = document.createElement("p");
		let death = document.createElement("p");
		let ageatdeath = document.createElement("p");
		let length = document.createElement("p");
		let place = document.createElement("p");
		let num = document.createElement("p");
		let portrait = document.createElement("img");

		h2.textContent = `${prophet.name} ${prophet.lastname}`;
		date.innerHTML = `<span class="label">Birth:</span> ${prophet.birthdate}`;
		place.innerHTML = `<span class="label">Place:</span> ${prophet.birthplace}`;
		num.innerHTML = `<span class="label">Children:</span> ${prophet.numofchildren}`;
		length.innerHTML = `<span class="label">Prophet Years:</span> ${prophet.length}`;
		death.innerHTML = `<span class="label">Death:</span> ${prophet.death}`;
		ageatdeath.innerHTML = `<span class="label">Age:</span> ${getAgeAtDeathInYears(
			prophet.birthdate,
			prophet.death
		)}`;

		portrait.setAttribute("src", prophet.imageurl);
		portrait.setAttribute(
			"alt",
			`${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day Prophet`
		);
		portrait.setAttribute("loading", "lazy");
		portrait.setAttribute("width", "340");
		portrait.setAttribute("height", "440");

		stats.appendChild(date);
		stats.appendChild(place);
		stats.appendChild(num);
		stats.appendChild(length);
		stats.appendChild(death);
		stats.appendChild(ageatdeath);

		card.appendChild(h2);
		card.appendChild(stats);
		card.appendChild(portrait);

		cards.appendChild(card);
	});
};

displayFruits();
