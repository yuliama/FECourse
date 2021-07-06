
$(document).ready(function () {

    //1
    console.log("ex1:");
    let num1 = 9;
    let num2 = 14;
    console.log(num1 > num2 ? num1 : num2);
    console.log("---------------------------");

    //2
    console.log("ex2:");
    let number1 = 3;
    let number2 = -7;
    let number3 = 2;
    let sum = number1 + number2 + number3;
    console.log(sum > 0 ? '-' : '+');
    console.log("---------------------------");

    //3
    console.log("ex3:");
    let a = 0;
    let b = -1;
    let c = 4;

    let arr = [];
    arr.push(a, b, c);
    console.log(arr);
    arr.sort();
    console.log(arr);
    console.log("---------------------------");

    //4
    console.log("ex4:");
    var array = [-5, -2, -6, 0, -1];
    console.log(Math.max(...array));
    console.log("---------------------------");

    //5
    console.log("ex5:");
    var studentsGrades = [
        {
            name: 'David',
            grade: 80
        },
        {
            name: 'Vinoth',
            grade: 77
        },
        {
            name: 'Divya',
            grade: 88
        },
        {
            name: 'Ishitha',
            grade: 95
        },
        {
            name: 'Thomas',
            grade: 68
        }
    ];

    let sum1 = 0;
    $(studentsGrades).each(function (x, y) {
        sum1 += y.grade;
    });
    let avg = sum1 / studentsGrades.length;

    if (avg < 60)
        console.log(' גרוע מאוד ' + avg);
    else if (avg < 70)
        console.log(' גרוע ' + avg);
    else if (avg < 80)
        console.log(' בינוני ' + avg);
    else if (avg < 90)
        console.log(' טוב ' + avg);
    else if (avg < 100)
        console.log(' טוב מאוד ' + avg);

    console.log("---------------------------");
});