
$(document).ready(function () {
  let array = [...Array(999).keys()].map(i => i + 1);

  for (let elem of array) {
    if (isHappyNumer(elem)) {
      console.log(`Happy number!!!!! is ${elem}`);
    }
  }
});

function isHappyNumer(number) {
  for (let i = 0; i < 6; i++) {
    let arrNumber = number.toString().split('');
    let first = arrNumber[0];
    let second = arrNumber[1];
    let third = arrNumber[2];
    if (second == undefined) second = 0;
    if (third == undefined) third = 0;

    let newNumber = first ** 2 + second ** 2 + third ** 2;
    if (newNumber == 1) {
      return true;
    }
    number = newNumber;
  }

 return false;
}