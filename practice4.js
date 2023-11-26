// Hämta todo-data från denna url: https://jsonplaceholder.typicode.com/todos/
// Skriv ut med html på skärmen titeln på alla todo-objekt som har
// completed: true
const elementEl = document.querySelector(".element");
const elementEl2 = document.querySelector(".element2");
const elementEl3 = document.querySelector(".element3");
async function getToDo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);

  const filteredData = data.filter((todo) => {
    return todo.userId == 1;
    // return todo.completed == true;
  });

  console.log(filteredData);

  filteredData.forEach((todo) => {
    const divEl = document.createElement("div");
    divEl.innerHTML = `<h2>${todo.title}</h2> completed:${todo.completed}`;
    elementEl.appendChild(divEl);
  });
}
getToDo();

// 10.1 Hämta todo-data från denna url: https://jsonplaceholder.typicode.com/todos/
// Skriv ut med html på skärmen titeln på alla todo-objekt som har
// userId: 1

// 9.1 (2p) Skapa ett nytt objekt state2
// Det nya objektet ska updatera value till 20 och
// Du får bara använda spread operatorn ...

const state = {
  list: [1, 2, 3],
  value: 10,
};
console.log(state);

const state2 = { ...state, value: 20 };
console.log(state2);

// 9.2 (2p) Skriv klart funktionen updateState
// som ska uppdatera list med newList på objektet state.
// Du måste använda spread operatorn ...

function updateState(state, newList) {
  //Din kod här:
  const newState = {
    ...state,
    list: newList,
  };
  return newState;
}

console.log(updateState(state, [4, 5, 6])); // Ska logga: { list:[4,5,6], value: 20 }

// 4. Hämta och visa foton. 3p
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 20 fotona på sidan.

async function getPhoto() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json();
  console.log(data);

  const filteredData = data.filter((album) => {
    return album.id <= 20;
  });
  console.log(filteredData);

  filteredData.forEach((album) => {
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", `${album.url}`);
    imgEl.setAttribute("title", `${album.title}`);
    imgEl.style.width = "150px";
    imgEl.style.height = "100px";
    elementEl2.appendChild(imgEl);
  });
}
getPhoto();

// 5. Responsive Users 3p
// Ladda ner users från denna url: https://jsonplaceholder.typicode.com/users
// För varje user ska name, email och city visas i en div och placeras under varandra.
// I desktop-vy ska divarna för varje user visas i 3 kolumner.
// I mobil-vy ska divarna för varje user visas i en kolumn med 100% width.

async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  data.forEach((user) => {
    const divEl = document.createElement("div");
    divEl.setAttribute("class", "userDiv");
    const nameEl = document.createElement("p");
    nameEl.innerHTML = `<h2>${user.name}</h2>`;
    divEl.appendChild(nameEl);
    const emailEl = document.createElement("p");
    emailEl.innerHTML = `${user.email}`;
    divEl.appendChild(emailEl);
    const cityEl = document.createElement("p");
    cityEl.innerHTML = `${user.address.city}`;
    divEl.appendChild(cityEl);

    elementEl3.appendChild(divEl);
  });
}
getUser();
