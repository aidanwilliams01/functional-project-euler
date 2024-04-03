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

export function fibonacci() {
  return 0;
}