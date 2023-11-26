// 2.	Skriv klart funktionen findLargest.
// findLargest ska returnera det största numret i arrayen som skickas till den:

function findLargest(numbers) {
  // lägg till din kod här
  let largestNum = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largestNum) {
      largestNum = numbers[i];
    }
  }
  return largestNum;
}

console.log(findLargest([1, 2, 3, 4, 5])); // ska logga 5
console.log(findLargest([-1, -2, -3, -4, -5])); // ska logga -1

// 2.1	Skriv klart funktionen findSmallest.
// findSmallest ska returnera det minsta talet i arrayen.

function findSmallest(numbers) {
  // lägg till din kod här
  let smallestNum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallestNum) {
      smallestNum = numbers[i];
    }
  }
  return smallestNum;
}

console.log(findSmallest([6, 1, 2, 3, 4, 5])); // ska logga 1
console.log(findSmallest([-6, -1, -2, -3, -4, -5])); // ska logga -6

// 3. Samma ord?
// Skriv klart funktionen som kollar om två ord är likadana
// oberoende av stor och liten bokstav.

function compareWords(word1, word2) {
  //din kod här
  return word1.toUpperCase() == word2.toUpperCase();
}

console.log(compareWords("hej", "HEJ")); // Ska logga true
console.log(compareWords("hej", "nej")); // Ska logga false

// 4	Skriv klart funktionen sumArray
// sumArray returnerar summan av alla talen i arrayen som skickas till den:

function sumArray(numbers) {
  // lägg till din kod här
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // ska logga 15
console.log(sumArray([-1, -2, -3, -4, -5])); // ska logga -15

// 1.1 Använd forEach för att summera talen i arrayen numbers
// och spara resultatet i variabeln sum.
let sum = 0;
const numbers = [1, 54, 532, 33, 44];
numbers.forEach((num) => {
  sum += num;
});
console.log(sum); // sum is 664

// 1.2 Använd myForEach som tar en array och en funktion som input
// för att summera talen i arrayen numbers
// och spara reslutatet i variabeln mySum.
let mySum = 0;

function myForEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

myForEach(numbers, (number) => {
  mySum += number;
});
console.log(sum, mySum);

// 4 Skriv en funktion som tar en array med strängar som input och
// returnerar en array med bara de strängar som är minst 4 tecken långa.

function minstFour(arrStr) {
  let newArr = arrStr.filter((word) => word.length >= 4);
  return newArr;
}

console.log(minstFour(["hej", "hello", "qasim", "chas"]));

// 3. Skriv klart funktionen removeVowels som tar
// bort vokaler, alltså bokstäverna: aouåeiyäö.

const vowels = ["a", "i", "o", "u", "e", "ä", "ö", "å"];

function removeVowels(word) {
  //din kod här
  let wordsWithoutVowel = "";
  for (let i = 0; i < word.length; i++) {
    let letters = word[i];
    if (!vowels.includes(letters)) {
      wordsWithoutVowel += letters;
    }
  }
  return wordsWithoutVowel;
}

console.log(removeVowels("hej")); // Ska logga "hj"
console.log(removeVowels("hallå")); // Ska logga hll
