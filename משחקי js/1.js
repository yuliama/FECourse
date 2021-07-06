
$(document).ready(function () {

    let numbers = [];
    for (let x = 2; x <= 20; x++) {
        if (x % 2 == 0) {
            numbers.push(x);
        }
    }
    console.log(numbers);
    console.log(numbers.length);
    console.log(numbers[1], numbers[3], numbers[6]);
    console.log(numbers.findIndex(element => element == 10));
    numbers.splice(numbers.length - 1, 2);
    console.log(numbers);


    let arr = [2, 'water', 5, 'paper'];
    console.log(arr);

    let people =[];
    people.push({name:'yulia', height: 180, eyes: 'blue'});
    people.push({name:'david', height: 167, eyes: 'black'});
    people.push({name:'nitzan', height: 160, eyes: 'green'});
    console.log(people);

    people.splice(0,1);
    console.log(people);


    people.unshift({nume:'nir', height:180, eyes:'brown'});
    console.log(people);

    people[0] = {nume:'nir', height:180, face:{eyes:'brown'}};
    console.log(people);
});