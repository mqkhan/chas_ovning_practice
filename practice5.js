// 1. (3p) Använd forEach för att skapa en funktion, calculateAverage,
// som tar en array av tal som input och returnerar medelvärdet
// av dessa tal.
// tips: Googla hur man räknar ut medelvärdet av ett antal tal

function calculateAverage(arrTal) {
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arrTal.length; i++) {
    sum += arrTal[i];
  }
  return (avg = sum / arrTal.length);
}

console.log(calculateAverage([1, 2, 3, 4, 5]));

// 2. (3p) Skapa en funktion, removeDuplicates, som tar en array
// med element och returnerar en ny array där alla duplicerade
// element har tagits bort och endast unika element finns kvar.

function removeDuplicates(arr) {
  let uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (!uniqueArr.includes(word)) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5, "hej", "hej"]));

// 3. (3p) Skriv en funktion, capitalizeWords, som tar en array av
// strängar som input och returnerar en ny array där varje
// ord börjar med en stor bokstav.

function capitalizeWord(arr) {
  let capitalizedArr = arr.map((item) => {
    let firstLetter = item.substring(0, 1).toUpperCase();
    let rest = item.substring(1);
    return firstLetter + rest;
  });
  return capitalizedArr;
}
console.log(capitalizeWord(["hej", "hello"]));

//-------------------------------------------------------------------------------------

function capitalizeWord1(arr) {
  let capitalizedArr = [];

  arr.forEach((item) => {
    let capitalizedWord = item.charAt(0).toUpperCase() + item.slice(1);
    capitalizedArr.push(capitalizedWord);
  });
  return capitalizedArr;
}
console.log(capitalizeWord1(["nej", "hello"]));

// Skriv en funktion, convertToUSD som konverterar värdena i currencies
// till USD. Använd exchangeRates för att göra uträkningen

const exchangeRates = {
  EUR: 1.12, // Euro till USD
  GBP: 1.32, // Brittiskt pund till USD
  JPY: 0.0094, // Japansk yen till USD
};

const currencies = [
  { currency: "EUR", value: 100 }, // 100 Euro
  { currency: "GBP", value: 50 }, // 50 Brittiskt pund
  { currency: "JPY", value: 5000 }, // 5000 Japansk yen
];

function convertToUSD(currencyArr) {
  const usdArr = currencyArr.map((item) => {
    let exchangeRate = Math.floor(exchangeRates[item.currency] * item.value);
    return { ...item, value: exchangeRate };
  });
  return usdArr;
}
console.log(convertToUSD(currencies));

// Skapa en funktion, findLongestWord, som tar en sträng som input
// och returnerar det längsta ordet i strängen.

function findLongestWord(str) {
  let words = str.split(" ");
  let longestWord = "";
  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}
console.log(findLongestWord("my name is qasim")); // qasim

// Skriv en funktion, generateRandomNumbers, som tar
// två parametrar: min och max. Funktionen ska generera
// och returnera en array med 10 slumpmässiga heltal mellan min och max.
// tips Math.random() ger en slumpad siffra mellan 0 och 1

function generateRandomNumbers(min, max) {
  let newArr = [];
  for (let i = 1; i < 11; i++) {
    let wholeNum = Math.floor(Math.random() * (max - min) + 1);
    newArr.push(wholeNum);
  }
  return newArr;
}
console.log(generateRandomNumbers(10, 100));

// 7.1 (3p) Hämta data med fetch från denna url: https://restcountries.com/v3.1/all
// Visa följande för varje land:
// Officiellt namn
// Valuta
// bild på flagga med tillhörande alt-text

const containerEl = document.getElementById("container");

async function getCountry() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  console.log(data);

  data.forEach((country) => {
    const divEl = document.createElement("div");

    const nameEl = document.createElement("p");
    nameEl.innerHTML = `<h2>${country.name.official}</h2>`;
    divEl.appendChild(nameEl);

    const flagEl = document.createElement("img");
    flagEl.setAttribute("src", `${country.flags.png}`);
    flagEl.setAttribute("alt", `${country.flags.alt}`);
    divEl.appendChild(flagEl);

    containerEl.appendChild(divEl);
  });
}
getCountry();
