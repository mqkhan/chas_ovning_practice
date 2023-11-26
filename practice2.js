// 1.1 (2p) Använd forEach för att lägga ihop orden i words-arrayen till ett långt ord
// som sparas i variabeln myWord.
let myWord = "";
const words = ["programming", "is", "fun"];

words.forEach((word) => {
  myWord += word;
});

console.log(myWord); // Ska logga: "programmingisfun";

// 1.2 (2p) Använd en for-lop för att lägga ihop orden i words-arrayen till en mening
// med mellanslag mella varje ord.
let sentence = "";
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (i == words.length - 1) {
    sentence += word;
    console.log("a " + sentence);
  } else {
    sentence += word + " ";
  }
}

console.log(sentence); // Ska logga "programming is fun";

// 2.1 (2p) Använd filter för att filtrera numbers och
// skapa en ny array med alla tal som är mindre än 50.
// Den nya arrayen ska sparas i en variabel som heter smallerThan50.
const numbers = [200, 54, 582, 33, 4];

const smallerThan50 = numbers.filter((num) => {
  return num < 50;
});
console.log(smallerThan50);

// 2.2 (2p) Använd map på arrayen numbers2 och
// skapa en ny array där alla tal är tripplade. Alltså gånger 3.
// Den nya arrayen ska sparas i en variabel som heter tripple.
const numbers2 = [...numbers]; //[200, 54, 582, 33, 4];

const tripple = numbers2.map((num) => {
  return num * 3;
});
console.log(tripple);

// 3. (2p) Totala längden av orden
// Skriv klart funktionen som räknar ut den totala längden av dom 3 orden.

function totalWordLength(word1, word2, word3) {
  //din kod här
  return word1.length + word2.length + word3.length;
}

const result = totalWordLength("hej", "på", "dig");
console.log(result); // Ska logga 8

// 4 (2p) Använd map för att skapa en ny array fastCars där alla bilar har speed: 100.

const cars = [
  { type: "Volvo", speed: 50 },
  { type: "Ford", speed: 80 },
  { type: "Opel", speed: 60 },
];

const fastCars = cars.map((car) => {
  return { ...car, speed: 100 };
});
console.log(fastCars);

// 7.1 (2p) Skriv klart funktionen updatePeople
// som lägger till en property:
// adult: true
// om personen i arrayen är 18 år eller över annars
// en property:
// adult: false
// funktionen ska returnera den uppdaterade arrayen.

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 35 },
  { name: "Fred", age: 19 },
  { name: "Alice", age: 6 },
];

function updatePeople(peopleArr) {
  // Din kod här:
  const updatePeopleArr = peopleArr.map((person) => {
    return { ...person, adult: person.age >= 18 };
  });
  return updatePeopleArr;
}
console.log(updatePeople(people));

// 7.2 (2p) Skriv en funktion med arrayen people som input som
// returnerar en array med bara vuxna. Alltså age minst 18 år.

function vuxna(peopleArr) {
  const vuxnaPeopleArr = peopleArr.filter((person) => {
    return person.age >= 18;
  });
  return vuxnaPeopleArr;
}
console.log(vuxna(people));

// 8. (2p) Skriv klart funktionen pizzaPrice som tar en pizza-sort
// som input och returnerar priset.
// Pizza-sorterna är begränsade till följande pizzor:
// "hawaii", "peperoni" och "vegetarian"
// En "hawaii" kostar 80 kr
// En "peperoni" kostar 90 kr
// En "vegetarian" kostar 85 kr

// const pizza = {
//   hawaii: 80,
//   peperoni: 90,
//   vegetarian: 85,
// };

function pizzaPrice(pizza) {
  //Din kod här.
  if (pizza == "hawai") {
    return 80;
  } else if (pizza == "peperoni") {
    return 90;
  } else {
    return 85;
  }
}
console.log(pizzaPrice("hawai"));
console.log(pizzaPrice("vegetarian"));
console.log(pizzaPrice("peperoni"));
