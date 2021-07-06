
$(document).ready(function () {

  var array = [-5, -2, -6, 0, -1];
  console.log("var array = [-5, -2, -6, 0, -1];")
  console.log("---------------------------");
  console.log("---------------------------");
  console.log("---------------------------");

  //1. Sum array
  console.log("1. Sum array:");

  console.log(array.reduce((a, b) => a + b, 0));
  console.log("---------------------------");

  //2. Max array
  console.log("2. Max array:");

  console.log(Math.max(...array));
  console.log("---------------------------");


  //3. Count array (count the number of even numbers in an array)
  console.log("3. Count array (count the number of even numbers in an array):");

  var count = array.reduce(function (sum, elem) {
    return elem % 2 == 0 ? ++sum : sum;
  }, 0);
  console.log(count);
  console.log("---------------------------");

  //4.Find array (find the index of a given item in an array)
  console.log("Find array (find the index of a given item in an array)");
  console.log(array.findIndex(element => element == 0));
});