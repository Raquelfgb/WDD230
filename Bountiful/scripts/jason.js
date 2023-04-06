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
	const cards = document.querySelector(".cards");
	cards.innerHTML = "";

	fruits.forEach((fruit) => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let genus = document.createElement("p");
		let id = document.createElement("p");
		let family = document.createElement("p");
		let order = document.createElement("p");
		let nutrition = document.createElement("p");
		let carbohydrates = document.createElement("p");
        let protein = document.createElement("p");
        let fat = document.createElement("p");
        let calories = document.createElement("p");
        let sugar = document.createElement("p");
        const fruit1 = document.getElementById("fruit1");
        const fruit2 = document.getElementById("fruit2");
        const fruit3 = document.getElementById("fruit3");
		

		name.textContent = `${fruit.name}`;
		genus.innerHTML = `<span class="label">Genus:</span> ${fruit.genus}`;
        family.innerHTML = `<span class="label">Family:</span> ${fruit.family}`;
        order.innerHTML = `<span class="label">Order:</span> ${fruit.order}`;
		id.innerHTML = `<span class="label">ID:</span> ${fruit.id}`;
		nutrition.innerHTML = `<span class="label">Nutrition:</span> ${fruit.nutrition}`;
        carbohydrates.innerHTML = `<span class="label">Carbohydrates:</span> ${fruit.carbohydrates}`;
        protein.innerHTML = `<span class="label">Protein:</span> ${fruit.protein}`;
        fat.innerHTML = `<span class="label">Fat:</span> ${fruit.fat}`;
        calories.innerHTML = `<span class="label">Calories:</span> ${fruit.calories}`;
        sugar.innerHTML = `<span class="label">Sugar:</span> ${fruit.sugar}`;
		

		
});

displayFruits();}