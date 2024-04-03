export function multiples(sumTo) {
  let sum = 0;
  let number = 0;

  function checkNumber() {
    if (number % 3 === 0) {
      sum += number;
    }
    else if (number % 5 === 0) {
      sum += number;
    }
    number += 1;
    if (number < sumTo) {
      return checkNumber();
    }
    else {
      return sum;
    }
  }
  
  return checkNumber();
}

export function fibonacci(sumTo) {
  const fibonacciArray = [1, 2];
  let index = 0;
  let sum = 0;
  
  function populateArray() {
    const element = fibonacciArray[index];
    const element2 = fibonacciArray[index + 1];
    const newElement = element + element2;
    fibonacciArray.push(newElement);
    index += 1;
    if (newElement <= sumTo) {
      populateArray()
    }
    else {
      index = 0;
    }
  }

  function sumEvenValues() {
    const element = fibonacciArray[index];
    if (index === fibonacciArray.length) {
      return sum;
    }
    if (element % 2 === 0) {
      sum += element;
    }
    index += 1;
    return sumEvenValues();
  }
  
  populateArray()
  return sumEvenValues()
}