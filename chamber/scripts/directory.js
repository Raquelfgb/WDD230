url ='https://raw.githubusercontent.com/Raquelfgb/wdd230/main/lesson09/card.json';




/*const requestURL = 'https://raw.githubusercontent.com/Raquelfgb/wdd230/main/lesson09/card.json';
const cards = document.querySelector('.layouts');
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
	  console.log(jsonObject);
    const layouts = jsonObject['layouts'];
    layouts.forEach(displayLayouts);
  });*/



function displayLayouts(layouts) {
  const cards = document.querySelector('.layouts');
  layouts.forEach(layout => {
    let card = document.createElement("section");
	  let h2 = document.createElement("h2");
	  let logo = document.createElement("img");
	  let address = document.createElement("h3");
	  let telephone = document.createElement("h3");
	  let url = document.createElement("h3");

	  h2.textContent = (`${layout.name}`);
    address.textContent = (`${layout.address}`);
    telephone.textContent = (`${layout.telephone}`);
	  url.textContent = (`${layout.url}`);

    logo.setAttribute('src', layout.logo);
    logo.setAttribute('alt', (`Logo of ${layout['h2']}`));
    logo.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(telephone);
	  card.appendChild(url);
    cards.appendChild(card); 
  });

}
    //document.querySelector('div.layouts').appendChild(card)

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
	// example using arrow function
	layouts.classList.add("grid");
	layouts.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	layouts.classList.add("list");
	layouts.classList.remove("grid");
}
async function getUrlData(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    displayLayouts(data.layouts);}
  
}

getUrlData(url)

