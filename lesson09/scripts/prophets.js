
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });

function displayProphets(prophet) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthdate = document.createElement("h3");
    let birthplace = document.createElement("h3");

    h2.textContent = (`${prophet.name} ${prophet.lastname}`);
    birthdate.textContent = (`${prophet.birthdate}`);
    birthplace.textContent = (`${prophet.birthplace}`);

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', (`Portait of ${prophet.name} ${prophet.lastname}`));
    portrait.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(birthdate);
    card.appendChild(birthplace);

    document.querySelector('div.cards').appendChild(card);
}