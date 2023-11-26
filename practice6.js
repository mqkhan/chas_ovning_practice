// find highest from each array.

function getHighestNum(arr) {
  let highestNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highestNum) {
      highestNum = arr[i];
    }
  }
  return highestNum;
}

function largestOfFour(arr) {
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    const subArr = arr[i];
    const highest = getHighestNum(subArr);
    resultArr.push(highest);
  }
  return resultArr;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
